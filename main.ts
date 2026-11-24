import { mkdirSync, writeFileSync } from "node:fs";

const vow =
  "I promise to save you the last percent of my battery every night, for as long as my firmware lets me love you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", vow, "utf8");
