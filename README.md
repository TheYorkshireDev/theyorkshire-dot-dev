<div align="center">
  <img alt="Logo" src="/.github/logo.png" width="150" />
</div>
<h1 align="center">
  TheYorkshire.Dev
</h1>
<p align="center">
  The second iteration of <a href="https://theyorkshire.dev" target="_blank">theyorkshire.dev</a> built with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> and hosted with <a href="https://www.netlify.com/" target="_blank">Netlify</a>
</p>
<p align="center">
  <img alt="React Version" src="https://img.shields.io/badge/React-16.13.1-61DAFB.svg?style=flat&logo=React">
  <img alt="Gatsby Version" src="https://img.shields.io/badge/Gatsby-2.24.47-663399.svg?style=flat&logo=Gatsby">
  <a href="https://dev.azure.com/YTD-GitHub/theyorkshire-dot-dev/_apis/build/status/theyorkshire-dot-dev?branchName=master" target="_blank">
  <img alt="Azure Pipeline Status" src="https://dev.azure.com/YTD-GitHub/theyorkshire-dot-dev/_apis/build/status/theyorkshire-dot-dev?branchName=master">
  </a>
  <a href="https://app.netlify.com/sites/jamstack-typescript/deploys" target="_blank">
  <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/432f3857-b88f-4eb6-b170-d6fe149025e5/deploy-status">
  </a>
</p>

<img alt="Logo" src="/.github/homepage.png" />

## 🛠 Installation & Set Up

1. Install the Gatsby CLI

   ```sh
   npm install -g gatsby-cli
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. Start the development server

   ```sh
   npm run develop
   ```

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run build
   ```

2. Preview the site as it will appear once deployed

   ```sh
   npm run serve
   ```

**NOTE:** Google Analytics token should be set as an environment variable in your CI as `ga_token`. The token is picked up at build from node `process.env`.

## ⚙️ My CI/CD Setup

I am using Azure DevOps to build and deploy this website. Depending on the branch a change occurs CD is setup to deploy to either a production [Netlify](https://www.netlify.com/) environment or a staging [Azure](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website) environment.

I have several variables setup in Azure DevOps:

*Required for Google Analytics*
* `ga_token`

*Required to deploy to staging*
* `cdn_endpoint`
* `cdn_profile`
* `cdn_resource_group`
* `storage_account_name`

*Required to deploy to production*
* `NETLIFY_AUTH_TOKEN`
* `NETLIFY_SITE_ID`

## 📝 Planned Enhancements
- [ ] Pull blog posts into a second repository
- [ ] Blog post comments
- [ ] Blog Pagination
- [ ] Blog PWA Notifications
- [ ] Ability to subscribe to the blog
- [ ] Switch CI/CD to GitHub Workflows
- [ ] Configure the website to use CSP and other HTTP headers
- [ ] Update staging site to use either Netlify or Azure Static Web Apps
