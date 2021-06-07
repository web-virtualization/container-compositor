/* eslint-disable */

const pkg = require('./package.json');
const esbuild = require('esbuild');
const { createServer } = require('http');
const isProd = process.env.NODE_ENV === 'production';
const serverPort = process.env.PORT || 5003;
const serveHandler = require('serve-handler');

const buildOpts = {
  entryPoints: [
    './src/main.ts'
  ],
  external: ['vm'],
  bundle: true,
  sourcemap: false, //!isProd,
  minify: isProd,
  format: 'iife',
  watch: !isProd,
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.env.PKG_VERSION': JSON.stringify(pkg.version),
  },
  tsconfig: './tsconfig.json',
  globalName: '',
  outfile: `./${isProd ? 'dist' : 'public'}/web-container${isProd ? '-v' + pkg.version : ''}${isProd ? '-min' : ''}.js`,
  resolveExtensions: ['.ts'],
  target: ["es2018"]
};

esbuild
  .build(buildOpts)
  .then(() => {
    if (isProd) return;

    const server = createServer((request, response) => {
      // More details here: https://github.com/vercel/serve-handler#options
      return serveHandler(request, response, {
        cleanUrls: false,
        public: 'public'
      });
    });
    server.listen(serverPort, () => {
      console.info(`web server start at http://127.0.0.1:${serverPort}`);
    });
  })
  .catch((err) => {
    console.error(`Errors: \n ${err.stack}`);
    process.exit(1);
  })
