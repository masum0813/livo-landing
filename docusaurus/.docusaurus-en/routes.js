import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '040'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/product-portal-launch',
    component: ComponentCreator('/blog/product-portal-launch', '206'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docs',
    component: ComponentCreator('/blog/tags/docs', '928'),
    exact: true
  },
  {
    path: '/blog/tags/launch',
    component: ComponentCreator('/blog/tags/launch', 'a36'),
    exact: true
  },
  {
    path: '/blog/tags/website',
    component: ComponentCreator('/blog/tags/website', '0c9'),
    exact: true
  },
  {
    path: '/privacy-policy',
    component: ComponentCreator('/privacy-policy', '524'),
    exact: true
  },
  {
    path: '/support',
    component: ComponentCreator('/support', 'f2e'),
    exact: true
  },
  {
    path: '/terms',
    component: ComponentCreator('/terms', '3b9'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd91'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '868'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '85f'),
            routes: [
              {
                path: '/docs/faq',
                component: ComponentCreator('/docs/faq', 'ec8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/add-m3u-playlist',
                component: ComponentCreator('/docs/getting-started/add-m3u-playlist', '6cd'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/add-xtream-account',
                component: ComponentCreator('/docs/getting-started/add-xtream-account', 'a93'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/install-and-open',
                component: ComponentCreator('/docs/getting-started/install-and-open', '0b0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '058'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/troubleshooting/login-errors',
                component: ComponentCreator('/docs/troubleshooting/login-errors', '9cf'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/troubleshooting/playback-issues',
                component: ComponentCreator('/docs/troubleshooting/playback-issues', 'a67'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/troubleshooting/playlist-not-loading',
                component: ComponentCreator('/docs/troubleshooting/playlist-not-loading', '956'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/usage/appearance-and-theme',
                component: ComponentCreator('/docs/usage/appearance-and-theme', 'e02'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/usage/favorites-and-history',
                component: ComponentCreator('/docs/usage/favorites-and-history', 'fc6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/usage/live-tv',
                component: ComponentCreator('/docs/usage/live-tv', '635'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/usage/movies-and-series',
                component: ComponentCreator('/docs/usage/movies-and-series', 'a83'),
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
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
