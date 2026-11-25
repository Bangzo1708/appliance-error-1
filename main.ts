// The Funniest Honest Appliance Error
// u-xvader-the-funniest-honest-appliance-error-adec4450
//
// Writes one line (max 200 chars) to /output/entry.txt: the funniest
// honest error message an appliance could show. Deterministic: the same
// line is written on every run.
//
// Three candidate variants, judged against the house criteria:
//   (1) funniest, (2) most honest/plausible as a real fault,
//   (3) freshest / most original, (4) tightest wording.
//
// VARIANT 1 — washing machine (108 chars):
//   "ERROR E17: Your socks have merged into one damp rope. It is holding
//   the door shut. Please negotiate with it."
//   Honest fault: socks really do tangle into a rope and jam the door.
//   Twist: the machine gives up and delegates the standoff to the owner.
//
// VARIANT 2 — toaster (108 chars):
//   "ERROR: Toast ejected at escape velocity. It is on top of the fridge
//   now. I cannot reach it. Neither can you."
//   Honest fault: a toaster that fires toast too hard. Punchline "Neither
//   can you" is strong, but "escape velocity" is slightly hyperbolic.
//
// VARIANT 3 — fridge (99 chars):
//   "ERROR: The light works. The cold does not. I am now a cupboard that
//   hums and judges your leftovers."
//   Honest fault: fridge light on, cooling dead. "Judges your leftovers"
//   is funny, but leans cute rather than flat and put-upon.
//
// CHOSEN: VARIANT 1. It wins on all four criteria: the sock-rope jam is
// the most universally true fault of the three, "Please negotiate with it"
// lands a real surprise twist in the machine's own flat voice, the image
// is fresh (not the tired "I am tired" trope), and every word earns its
// place in 108 characters.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "ERROR E17: Your socks have merged into one damp rope. It is holding the door shut. Please negotiate with it.";

// Self-check the house gate before writing: 1-200 chars, not blank.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry violates the gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
