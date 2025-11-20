// entry.js
import * as ofd from 'ofd.js';

// 暴露到全局
window.ofd = ofd;
globalThis.ofd = ofd;

console.log('✅ ofd module loaded:', ofd);
