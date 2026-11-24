// One Letter: Coffee or Tea — make.fun bounty
// https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0
//
// The entry is exactly one letter: A for coffee, B for tea.
// The choice is A. Coffee is the louder answer in this argument —
// the one that shows up first, gets defended loudest, and still gets
// made every morning even after it lets you down. Tea is the calmer,
// kinder drink. Coffee is the honest one: it promises nothing except
// that it will be there, bitter and hot, and then it is. One letter,
// no hedging. That is the whole case.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LETTER = "A"; // A = coffee

function main(): void {
  // The harness reads /output/entry.txt; fall back to ./output when
  // /output is not writable (local runs).
  const targets = ["/output/entry.txt", join(process.cwd(), "output", "entry.txt")];
  let written = false;
  for (const target of targets) {
    try {
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, LETTER, "utf8");
      written = true;
      break;
    } catch {
      // Try the next location.
    }
  }
  if (!written) {
    throw new Error("could not write entry.txt to any output location");
  }
  process.stdout.write(LETTER + "\n");
}

main();
