import test from "node:test";
import assert from "node:assert/strict";
import { clamp } from "../src/clamp.js";

test("keeps values within the interval", () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test("limits values above the maximum", () => {
  assert.equal(clamp(20, 0, 10), 10);
});
