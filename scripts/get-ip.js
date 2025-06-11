/**
 * Get the current machine's IP address.
 *
 * This script is used in the `dev:reload` and `dev:hot` scripts to get the
 * current machine's IP address and use it to start the dev server. This is
 * necessary because the dev server is started in a separate process and
 * therefore can't access the IP address of the current machine.
 *
 * @returns {string} The current machine's IP address.
 */

import { networkInterfaces } from "os";

const nets = networkInterfaces();
const ip = Object.values(nets)
  .flat()
  .find((net) => net.family === "IPv4" && !net.internal)?.address;

console.log(ip || "127.0.0.1");
