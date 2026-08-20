import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";

describe("Ping", async function () {
  const { viem } = await network.create();

  it("stores the default message", async function () {
    const ping = await viem.deployContract("Ping");

    assert.equal(await ping.read.message(), "Hello from abyannet");
  });

  it("updates the message", async function () {
    const ping = await viem.deployContract("Ping");

    await ping.write.setMessage(["Ping test passed"]);
    assert.equal(await ping.read.message(), "Ping test passed");
  });
});
