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
//
// Why A, in one line: coffee is the drink you argue about, tea is the
// drink you apologise with — and an argument is what the letter is for.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The verdict, and the only byte this program ever writes.
const LETTER = "A"; // A = coffee

// Where the harness looks for the answer, in preference order.
// The first path is the sandbox location; the second is the local
// fallback for runs outside the harness, where /output is not writable.
function outputTargets(): string[] {
  return ["/output/entry.txt", join(process.cwd(), "output", "entry.txt")];
}

// Write the single letter to the first location that accepts it.
// Returns true once a write succeeds, false when every location fails.
function writeEntry(letter: string): boolean {
  for (const target of outputTargets()) {
    try {
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, letter, "utf8");
      return true;
    } catch {
      // That location is unavailable; try the next one.
    }
  }
  return false;
}

function main(): void {
  if (!writeEntry(LETTER)) {
    throw new Error("could not write entry.txt to any output location");
  }
  process.stdout.write(LETTER + "\n");
}

main();
