// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    'hur-fungerar-our-studio',
    'ny-pa-jobbet',
    {
      type: 'category',
      label: 'Förmåner',
      collapsed: false,
      items: ['bonussystem', 'forsakringar', 'pensionssparande', 'bike'],
    },
    {
      type: 'category',
      label: 'Policyer',
      collapsed: false,
      items: ['arbetsmiljopolicy', 'coc', 'csr-arbete'],
    },
    {
      type: 'category',
      label: 'Verktyg & Resurser',
      collapsed: false,
      items: ['ai-verktyg', 'verktyg', 'vpn', 'konferensrum'],
    },
  ],
};

module.exports = sidebars;
