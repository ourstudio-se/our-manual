# our Manual

Our Studio's employee handbook, hosted at [manual.ourstudio.se](https://manual.ourstudio.se).

Built with [Docusaurus 3](https://docusaurus.io/) and written in Swedish.

## Content

The handbook covers HR policies, tools, benefits, and onboarding for Our Studio employees — including work environment policy, bonus system, insurance, pension, AI tools, VPN setup, and more.

## Development

```sh
yarn          # install dependencies
yarn start    # start local dev server
yarn build    # generate static site in build/
yarn serve    # serve the build locally
```

## Deployment

```sh
yarn deploy   # build and push to gh-pages branch
```

## Search

The site uses [@cmfcmf/docusaurus-search-local](https://github.com/cmfcmf/docusaurus-search-local) for client-side search in Swedish. The site is not indexed by search engines (`noIndex: true`).
