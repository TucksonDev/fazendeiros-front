# Fazendeiros DAO Web
Public web of Fazendeiros DAO

# Technical specifications
- Base technologies for this project are: Vue 3 + Vite + Typescript, using the standard Vite scaffolding tool. More info [here](https://vitejs.dev/guide/).
- Bootstrap has been added as a standalone library, and not as a vue module
- Vue-router is used to handle routing
- Vue i18n is used to handle localization
- Pinia is used as a store manager
- Sass is used as the CSS Preprocessor
- To handle web3 interactions, the project uses web3modal (to handle wallet connection) and ethers (to handle blockchain-related operations).
- Environment variables are set in .env for all environments and .env.production for overriding variables on production. When running `npm run build` variables in .env.production will override variables in .env .
- Google Analytics can be activated by setting the environment variable VITE_GA_ID

# CLI instructions
- `npm install` : To install all dependencies
- `npm run dev` : To initialize the web server daemon for development
- `npm run lint` : To view linting and formatting problems on the project
- `npm run lint:fix` : To fix linting and formatting problems on the project
- `npm run build` : To generate and pack production files

# References
- Vite: https://vitejs.dev/guide/
- Vue 3: https://vuejs.org/guide/quick-start.html
- Bootstrap: https://getbootstrap.com/docs/5.2/getting-started/introduction/
- Vue-router: https://router.vuejs.org/guide/
- Vue-i18n: https://vue-i18n.intlify.dev/
- Pinia: https://pinia.vuejs.org/introduction.html
- Sass: https://sass-lang.com/documentation/
- Web3Modal: https://github.com/Web3Modal/web3modal
- Ethers: https://docs.ethers.io/v5/
