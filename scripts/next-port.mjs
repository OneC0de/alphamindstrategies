#!/usr/bin/env node
import { spawn } from "node:child_process";
import net from "node:net";

const mode = process.argv[2] ?? "dev";
const basePort = Number(process.env.PORT ?? 3001);
const maxAttempts = 50;

function canUsePort(port) {
  return new Promise((resolve, reject) => {
    const tester = net
      .createServer()
      .once("error", (err) => {
        if (err.code === "EADDRINUSE" || err.code === "EACCES") {
          resolve(false);
        } else {
          reject(err);
        }
      })
      .once("listening", () => {
        tester.close(() => resolve(true));
      })
      .listen(port, "0.0.0.0");
  });
}

async function findAvailablePort(start) {
  for (let step = 0; step < maxAttempts; step += 1) {
    const port = start + step;
    if (await canUsePort(port)) {
      return port;
    }
  }
  throw new Error(
    `No available port found between ${start} and ${start + maxAttempts}`,
  );
}

async function run() {
  const port = await findAvailablePort(basePort);
  if (port !== basePort) {
    console.log(
      `⚠️  Port ${basePort} is busy. Starting Next.js ${mode} server on ${port}.`,
    );
  } else {
    console.log(`▶️  Starting Next.js ${mode} server on ${port}.`);
  }

  const child = spawn("next", [mode, "-p", String(port)], {
    stdio: "inherit",
    env: { ...process.env, PORT: String(port) },
  });

  child.on("exit", (code) => {
    process.exit(code ?? 0);
  });
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
