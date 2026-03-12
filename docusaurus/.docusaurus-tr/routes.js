import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/tr/__docusaurus/debug',
    component: ComponentCreator('/tr/__docusaurus/debug', '815'),
    exact: true
  },
  {
    path: '/tr/__docusaurus/debug/config',
    component: ComponentCreator('/tr/__docusaurus/debug/config', '891'),
    exact: true
  },
  {
    path: '/tr/__docusaurus/debug/content',
    component: ComponentCreator('/tr/__docusaurus/debug/content', '768'),
    exact: true
  },
  {
    path: '/tr/__docusaurus/debug/globalData',
    component: ComponentCreator('/tr/__docusaurus/debug/globalData', '8a5'),
    exact: true
  },
  {
    path: '/tr/__docusaurus/debug/metadata',
    component: ComponentCreator('/tr/__docusaurus/debug/metadata', '0fc'),
    exact: true
  },
  {
    path: '/tr/__docusaurus/debug/registry',
    component: ComponentCreator('/tr/__docusaurus/debug/registry', 'a86'),
    exact: true
  },
  {
    path: '/tr/__docusaurus/debug/routes',
    component: ComponentCreator('/tr/__docusaurus/debug/routes', '25f'),
    exact: true
  },
  {
    path: '/tr/blog',
    component: ComponentCreator('/tr/blog', '58c'),
    exact: true
  },
  {
    path: '/tr/blog/archive',
    component: ComponentCreator('/tr/blog/archive', 'ad6'),
    exact: true
  },
  {
    path: '/tr/blog/product-portal-launch',
    component: ComponentCreator('/tr/blog/product-portal-launch', '7d6'),
    exact: true
  },
  {
    path: '/tr/blog/tags',
    component: ComponentCreator('/tr/blog/tags', '8c7'),
    exact: true
  },
  {
    path: '/tr/blog/tags/acilis',
    component: ComponentCreator('/tr/blog/tags/acilis', '1ea'),
    exact: true
  },
  {
    path: '/tr/blog/tags/docs',
    component: ComponentCreator('/tr/blog/tags/docs', '5c9'),
    exact: true
  },
  {
    path: '/tr/blog/tags/web',
    component: ComponentCreator('/tr/blog/tags/web', 'bd8'),
    exact: true
  },
  {
    path: '/tr/privacy-policy',
    component: ComponentCreator('/tr/privacy-policy', '0b3'),
    exact: true
  },
  {
    path: '/tr/support',
    component: ComponentCreator('/tr/support', 'dc9'),
    exact: true
  },
  {
    path: '/tr/terms',
    component: ComponentCreator('/tr/terms', 'ef2'),
    exact: true
  },
  {
    path: '/tr/docs',
    component: ComponentCreator('/tr/docs', '2cc'),
    routes: [
      {
        path: '/tr/docs',
        component: ComponentCreator('/tr/docs', 'bc7'),
        routes: [
          {
            path: '/tr/docs',
            component: ComponentCreator('/tr/docs', '17d'),
            routes: [
              {
                path: '/tr/docs/faq',
                component: ComponentCreator('/tr/docs/faq', '4a2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tr/docs/getting-started/add-m3u-playlist',
                component: ComponentCreator('/tr/docs/getting-started/add-m3u-playlist', '5d3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tr/docs/getting-started/add-xtream-account',
                component: ComponentCreator('/tr/docs/getting-started/add-xtream-account', '7e3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tr/docs/getting-started/install-and-open',
                component: ComponentCreator('/tr/docs/getting-started/install-and-open', '56e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tr/docs/intro',
                component: ComponentCreator('/tr/docs/intro', 'fa8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tr/docs/troubleshooting/login-errors',
                component: ComponentCreator('/tr/docs/troubleshooting/login-errors', '131'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tr/docs/troubleshooting/playback-issues',
                component: ComponentCreator('/tr/docs/troubleshooting/playback-issues', '544'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tr/docs/troubleshooting/playlist-not-loading',
                component: ComponentCreator('/tr/docs/troubleshooting/playlist-not-loading', '3bc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tr/docs/usage/appearance-and-theme',
                component: ComponentCreator('/tr/docs/usage/appearance-and-theme', 'e82'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tr/docs/usage/favorites-and-history',
                component: ComponentCreator('/tr/docs/usage/favorites-and-history', '159'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tr/docs/usage/live-tv',
                component: ComponentCreator('/tr/docs/usage/live-tv', '38c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tr/docs/usage/movies-and-series',
                component: ComponentCreator('/tr/docs/usage/movies-and-series', '88b'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/tr/',
    component: ComponentCreator('/tr/', '90b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
