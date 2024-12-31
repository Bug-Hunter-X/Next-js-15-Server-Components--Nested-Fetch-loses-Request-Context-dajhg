# Next.js 15 Server Components: Nested Fetch loses Request Context

This repository demonstrates a subtle bug in Next.js 15 server components related to losing request context (cookies, headers) when using nested `fetch` calls within asynchronous operations.  The problem manifests when a server component makes a network request, and then that response triggers further requests in an asynchronous manner.

## Problem Description

When a server component makes a network request using `fetch`, the initial request object's cookies and headers are often unavailable in deeply nested asynchronous functions.  This leads to unexpected behavior, particularly when authentication is involved.

## Solution

The solution involves explicitly passing the necessary context (e.g., cookies, headers) down to the nested functions instead of relying on implicit access.

## Reproduction Steps

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe that the initial request succeeds, but the nested request fails due to missing cookies or headers.

## Solution Steps

1. Modify the code as shown in `bugSolution.js`.
2.  Observe that the issue is now resolved.