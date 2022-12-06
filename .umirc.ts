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
          path: '/WalletApp',
          component: './WalletApp/WalletApp.jsx',
        },
        {
          path: '/Join',
          component: './Join/Join.jsx',
        },
        {
          path: '/JoinApp',
          component: './JoinApp/JoinApp.jsx',
        },
        {
          path: '/AboutERB',
          component: './AboutERB/AboutERB.jsx',
        },
        {
          path: '/AboutERBApp',
          component: './AboutERBApp/AboutERBApp.jsx',
        },
        {
          path: '/WormholesOverview',
          component: './WormholesOverview/WormholesOverview.jsx',
        },
        {
          path: '/WormholesOverviewApp',
          component: './WormholesOverviewApp/WormholesOverviewApp.jsx',
        },
        {
          path: '/AboutWormholes',
          component: './AboutWormholes/AboutWormholes.jsx',
        },
        {
          path: '/AboutWormholesApp',
          component: './AboutWormholesApp/AboutWormholesApp.jsx',
        },
        {
          path: '/Dapps',
          component: './Dapps/Dapps.jsx',
        },
        {
          path: '/DappsApp',
          component: './DappsApp/DappsApp.jsx',
        },
        {
          path: '/AboutSNFT',
          component: './AboutSNFT/AboutSNFT.jsx',
        },
        {
          path: '/DRE',
          component: './DRE/DRE.jsx',
        },
        {
          path: '/DREApp',
          component: './DREApp/DREApp.jsx',
        },
        {
          path: '/MandraCapital',
          component: './MandraCapital/MandraCapital.jsx',
        },
        {
          path: '/MandraCapitalApp',
          component: './MandraCapitalApp/MandraCapitalApp.jsx',
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
  // history: {
  //   type: 'hash',
  // },
  hash: true,
  links: [
    // href的图片你可以放在public里面，直接./图片名.png 就可以了，也可以是cdn链接
    { rel: 'ico', href: './src/assets/images/logo.ico' },
  ],
  title: false,
});
