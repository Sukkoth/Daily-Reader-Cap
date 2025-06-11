import { execSync } from "child_process";

try {
  const output = execSync("adb devices")
    .toString()
    .split("\n")
    .filter((line) => line.trim() && !line.startsWith("List"))
    .map((line) => line.split("\t")[0]);

  const firstDevice = output[0];

  if (!firstDevice) {
    console.error(`
        ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

        No adb device connected for debug and live reload

        ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
        `);
    process.exit(1);
  }

  console.log(firstDevice);
} catch (err) {
  console.error("Failed to get device ID:", err.message);
  process.exit(1);
}
