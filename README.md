# Unhandled Server Errors in Node.js

This repository demonstrates a common error in Node.js applications: inadequate error handling in HTTP servers.  Improper error handling can lead to unexpected server crashes, making debugging difficult.  The solution showcases best practices for robust error management.

## Bug

The `bug.js` file contains a simple HTTP server.  It lacks comprehensive error handling, specifically within the `server.on('error', ...)` event listener.  This omission prevents the application from gracefully handling various errors, such as port conflicts or other system-level issues.

## Solution

The `bugSolution.js` demonstrates a more robust approach.  It includes detailed logging using `console.error`, allowing developers to identify and resolve issues more efficiently.  Proper error handling prevents the application from unexpectedly exiting.