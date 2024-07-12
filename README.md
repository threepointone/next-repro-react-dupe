This is a simple next js app, nothing unique.

To reproduce this error:

- Run `npx next build`, this does a plain next build
- Run `bun lcs.ts`. This scans through generated edge-chunks, and looks for the longest duplicate code. It'll run for a while, and then print out the longest duplicate code. You'll see that it's the minified source of react.
