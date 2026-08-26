import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
test("PWA and security files are connected", async () => {
  const html = await readFile("index.html", "utf8");
  assert.match(html, /manifest\.webmanifest/);
  assert.match(html, /Content-Security-Policy/);
  assert.match(await readFile("sw.js", "utf8"), /iva-time-v\d+/);
});
test("all interactive feature controls exist", async () => {
  const html = await readFile("index.html", "utf8");
  for (const id of [
    "manageCities",
    "compareBtn",
    "plannerBtn",
    "sort",
    "shareBtn",
  ])
    assert.match(html, new RegExp(`id="${id}"`));
});
test("Wiki has no CDN dependency", async () => {
  const html = await readFile("wiki/index.html", "utf8");
  assert.doesNotMatch(html, /https?:\/\//);
});
