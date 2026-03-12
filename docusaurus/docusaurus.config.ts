import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Livo Player',
  tagline: 'Marketing, support, product guides and release updates for Livo.',
  favicon: 'img/livo-logo.png',
  url: 'https://example.com',
  baseUrl: '/',
  organizationName: 'livo',
  projectName: 'livo-site',
  onBrokenLinks: 'throw',
  trailingSlash: false,
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en',
      },
      tr: {
        label: 'Türkçe',
        htmlLang: 'tr',
      },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Livo Updates',
          blogDescription: 'Release notes, new features and product updates.',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Recent posts',
          editUrl: undefined,
        },
        pages: {},
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/livo-logo.png',
    navbar: {
      title: 'Livo',
      logo: {
        alt: 'Livo logo',
        src: 'img/livo-logo.png',
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/docs/intro', label: 'Docs', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/support', label: 'Support', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            {label: 'Home', to: '/'},
            {label: 'Docs', to: '/docs/intro'},
            {label: 'Blog', to: '/blog'},
          ],
        },
        {
          title: 'Support',
          items: [
            {label: 'Support', to: '/support'},
            {label: 'Privacy Policy', to: '/privacy-policy'},
            {label: 'Terms', to: '/terms'},
          ],
        },
        {
          title: 'Stores',
          items: [
            {
              label: 'App Store',
              href: 'https://apps.apple.com/tr/app/livo-iptv/id6755977918',
            },
            {
              label: 'Google Play',
              href: 'https://play.google.com/store/apps/details?id=com.livo.android',
            },
          ],
        },
      ],
      copyright:
        'Copyright © 2026 Livo Player. This app does not provide IPTV content or subscriptions.',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
