import { defineConfig } from 'umi';

export default defineConfig({
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
