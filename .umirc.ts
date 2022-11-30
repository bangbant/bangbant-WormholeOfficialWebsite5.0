import { defineConfig } from 'umi';

export default defineConfig({
  chainWebpack(config) {
    config.module
      .rule('html-loader')
      .test(/\.html$/)
      .exclude.end()
      .use('html-loader')
      .loader('html-loader');
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index.jsx',
      routes: [
        { path: '/', component: './HomePage/HomePage.jsx' },
        {
          path: '/Ecosystem',
          component: './Ecosystem/Ecosystem.jsx',
        },
        {
          path: '/Wallet',
          component: './Wallet/Wallet.jsx',
        },
        {
          path: '/Join',
          component: './Join/Join.jsx',
        },
        {
          path: '/AboutERB',
          component: './AboutERB/AboutERB.jsx',
        },
        {
          path: '/WormholesOverview',
          component: './WormholesOverview/WormholesOverview.jsx',
        },
        {
          path: '/AboutWormholes',
          component: './AboutWormholes/AboutWormholes.jsx',
        },
        {
          path: '/Dapps',
          component: './Dapps/Dapps.jsx',
        },
        {
          path: '/AboutSNFT',
          component: './AboutSNFT/AboutSNFT.jsx',
        },
        {
          path: '/DRE',
          component: './DRE/DRE.jsx',
        },
      ],
    },
  ],
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'https://www.wormholestest.com',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api': '/api',
      },
    },
    '/ipfs': {
      target: 'https://www.wormholestest.com',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/ipfs': '/ipfs',
      },
    },
  },
  publicPath: './',
  runtimePublicPath: true,
  history: {
    type: 'hash',
  },
  hash: true,
  links: [
    // href的图片你可以放在public里面，直接./图片名.png 就可以了，也可以是cdn链接
    { rel: 'ico', href: './src/assets/images/logo.ico' },
  ],
  title: false,
});
