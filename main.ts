import { mkdirSync, writeFileSync } from "node:fs";

const story = "Born in prison. Died a king.";

const words = story.trim().split(/\s+/);
if (words.length !== 6) throw new Error(`expected six words, got ${words.length}`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
