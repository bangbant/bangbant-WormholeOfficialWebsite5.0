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
      ],
    },
  ],
  fastRefresh: {},
});
