import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, one star: an alien tourist's review of Earth that still
// compliments the food — single line, UTF-8, within the 1–200 char gate.
const ENTRY =
  "One star: the gravity was awful, the traffic was worse, but the biryani alone is worth invading for.";

writeEntry();

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
}
