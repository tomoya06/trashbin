---
date: 2019-09-05 15:54:28
tags:
- 前端
- Node.js
- Electron
title: Electron基础
---

收集Electron的常见问题

<!-- more -->

## Main Process, Renderer Process and Pages

0. Main Process: the process that runs package.json's main script. An Electron app always has one main process, but never more.
1. Renderer Process: Each web page in Electron runs in its own process, which is called the renderer process.
2. Relationship with Pages: The main process creates web pages by creating BrowserWindow instances. Each BrowserWindow instance runs the web page in its own renderer process. When a BrowserWindow instance is destroyed, the corresponding renderer process is also terminated.

### Additional Tips

0. If you want to perform GUI operations in a web page, the renderer process of the web page must communicate with the main process to request that the main process perform those operations.