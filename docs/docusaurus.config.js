const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'My Site',
  tagline: '互联网就是用来存垃圾的',
  url: 'https://tomoya06.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.json'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'codezone_intro',
            position: 'left',
            label: 'CodeZone',
          },
          { type: 'doc', docId: 'note_intro', label: '随手记', position: 'left' },
          { to: '/blog', label: '博客', position: 'left' },
          {
            href: 'https://github.com/tomoya06',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '快捷方式',
            items: [
              {
                label: '剑指offer题库',
                to: '/docs/剑指offer/剑指offer_intro',
              },
              {
                label: '剑指offer专项版题库',
                to: '/docs/剑指offer专项版/剑指offer专项版_intro',
              }
            ],
          },
          {
            title: '联系我',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/tomoya06',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/pjh_tomoya06/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/tomoya06/',
              },
            ],
          },
          {
            title: '我在看...',
            items: [
              {
                label: 'TypeSctipt',
                href: 'https://www.typescriptlang.org/',
              },
              {
                label: '俄罗斯烂漫',
                href: 'https://www.instagram.com/russian_romantics/',
              },
              {
                label: '闲暇时光 ☕',
                href: 'https://www.youtube.com/'
              }
            ]
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} tomoya06's HomePage, Heavelop Inc. <br>Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
