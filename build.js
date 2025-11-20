// build.js
const esbuild = require('esbuild');
const path = require('path');

esbuild.build({
  entryPoints: ['entry.js'],
  bundle: true,
  platform: 'browser',
  format: 'iife',
  outfile: './js/ofd.bundle.js',
  minify: false,
  target: ['es2016'],
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  inject: [path.resolve(__dirname, 'shims.js')],
  // 关键：告诉 esbuild 如何处理 Node.js 内置模块
  external: [], // 不排除任何东西，全部打包
}).catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
