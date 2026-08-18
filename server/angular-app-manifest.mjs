
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/myplacee/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/myplacee"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 442, hash: '59db3cfde3c635f92c01a891f1c6be5d93e8e8c81edeebba99d1cac86a55387d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 955, hash: 'a138459a58e74da0d86bcc6fe0f470cb436f7a552bf722f5988750a5fedc052e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21582, hash: '3c3dd2bd78890f3d6c0ca85e3cef4fb12a6c0b6f5d5b41b3e994cf812fa0b280', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
