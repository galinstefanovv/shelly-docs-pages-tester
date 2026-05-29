// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import codeImport from 'remark-code-import';
import remarkLinkTarget from './remark-link-target.js';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shelly Scenes Scripting',
  tagline: 'API Documentation',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.sp.infn.dev',
  baseUrl: '/',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          remarkPlugins: [ [codeImport, { preserveTrailingNewline: true }], remarkLinkTarget, ],
        },
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      navbar: {
        // title: 'Shelly Scenes Scripting',

        logo: {
          alt: 'Shelly Scenes Scripting',
          src: 'img/logo.png',
        },

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            label: 'Cloud Scripting',
            position: 'left',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Shelly Scenes Scripting.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
