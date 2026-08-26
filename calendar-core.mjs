const breaks = [
  -61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192,
  2262, 2324, 2394, 2456, 3178,
];
const div = (a, b) => ~~(a / b),
  mod = (a, b) => a - ~~(a / b) * b;
function core(jy) {
  const gy = jy + 621;
  let leapJ = -14,
    jp = breaks[0],
    jm = 0,
    jump = 0;
  for (let i = 1; i < breaks.length; i++) {
    jm = breaks[i];
    jump = jm - jp;
    if (jy < jm) break;
    leapJ += div(jump, 33) * 8 + div(mod(jump, 33), 4);
    jp = jm;
  }
  const n = jy - jp;
  leapJ += div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
  if (mod(jump, 33) === 4 && jump - n === 4) leapJ++;
  const leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;
  return { gy, march: 20 + leapJ - leapG, jump, n };
}
function cycle(jump, n) {
  let a = n;
  if (jump - n < 6) a = n - jump + div(jump + 4, 33) * 33;
  let leap = mod(mod(a + 1, 33) - 1, 4);
  return leap === -1 ? 4 : leap;
}
export function g2d(gy, gm, gd) {
  let d =
    div((gy + div(gm - 8, 6) + 100100) * 1461, 4) +
    div(153 * mod(gm + 9, 12) + 2, 5) +
    gd -
    34840408;
  return d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
}
export function d2g(jdn) {
  let j = 4 * jdn + 139361631;
  j += div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
  const i = div(mod(j, 1461), 4) * 5 + 308,
    gd = div(mod(i, 153), 5) + 1,
    gm = mod(div(i, 153), 12) + 1;
  return [div(j, 1461) - 100100 + div(8 - gm, 6), gm, gd];
}
export function j2d(jy, jm, jd) {
  const r = core(jy);
  return g2d(r.gy, 3, r.march) + (jm - 1) * 31 - div(jm, 7) * (jm - 7) + jd - 1;
}
export function d2j(jdn) {
  const gy = d2g(jdn)[0];
  let jy = Math.min(gy - 621, 3177),
    r = core(jy),
    k = jdn - g2d(r.gy, 3, r.march);
  if (k >= 0) {
    if (k <= 185) return [jy, 1 + div(k, 31), mod(k, 31) + 1];
    k -= 186;
  } else {
    jy--;
    k += 179;
    if (cycle(r.jump, r.n) === 1) k++;
  }
  return [jy, 7 + div(k, 30), mod(k, 30) + 1];
}
export const g2j = (y, m, d) => d2j(g2d(y, m, d));
export const j2g = (y, m, d) => d2g(j2d(y, m, d));
export function jalMonthLen(y, m) {
  return m <= 6
    ? 31
    : m <= 11
      ? 30
      : cycle(core(y).jump, core(y).n) === 0
        ? 30
        : 29;
}
