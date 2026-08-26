import test from "node:test";
import assert from "node:assert/strict";
import { g2j, j2g, jalMonthLen } from "../calendar-core.mjs";
test("Nowruz conversions are exact", () => {
  assert.deepEqual(g2j(2024, 3, 20), [1403, 1, 1]);
  assert.deepEqual(j2g(1403, 1, 1), [2024, 3, 20]);
});
test("conversion round trip", () => {
  for (const d of [
    [2026, 8, 26],
    [2000, 1, 1],
    [1990, 12, 31],
  ]) {
    assert.deepEqual(j2g(...g2j(...d)), d);
  }
});
test("Jalali month lengths are valid", () => {
  for (let m = 1; m <= 12; m++)
    assert.ok([29, 30, 31].includes(jalMonthLen(1405, m)));
});
