/// <reference types="bun" />
import * as fs from "fs";
import { Glob } from "bun";
function largestRepeatedSubstring(s: string): string {
  let n = s.length;
  let lrs = ""; // To store the largest repeated substring

  // Function to find the longest common prefix of two substrings
  function longestCommonPrefix(s1: string, s2: string): string {
    let minLength = Math.min(s1.length, s2.length);
    for (let i = 0; i < minLength; i++) {
      if (s1[i] !== s2[i]) {
        return s1.substring(0, i);
      }
    }
    return s1.substring(0, minLength);
  }

  // Generate all suffixes of the string
  let suffixes: string[] = [];
  for (let i = 0; i < n; i++) {
    suffixes.push(s.substring(i));
  }

  // Sort the suffixes
  suffixes.sort();

  // Compare adjacent suffixes to find the longest repeated substring
  for (let i = 0; i < n - 1; i++) {
    let tempLrs = longestCommonPrefix(suffixes[i], suffixes[i + 1]);
    if (tempLrs.length > lrs.length) {
      lrs = tempLrs;
    }
  }

  return lrs;
}

// Example usage

const glob = new Glob("server/edge-chunks/*.js");

for await (const file of glob.scan(".next")) {
  console.log(`analyzing ${file}...\n`);
  const input = fs.readFileSync(`./.next/${file}`, "utf-8");
  console.log(largestRepeatedSubstring(input) + "\n");
}
