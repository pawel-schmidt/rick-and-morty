Demo: [![Netlify Status](https://api.netlify.com/api/v1/badges/a10c09e2-fa1a-452e-ade6-fd76761a995c/deploy-status)](https://app.netlify.com/sites/rick-and-morty-demo/deploys)
Storybook: [![Netlify Status](https://api.netlify.com/api/v1/badges/cc12a271-8c03-439d-b30d-00e4c2b48f8f/deploy-status)](https://app.netlify.com/sites/rick-and-morty-storybook/deploys)

---

# Rick and Morty

Project built using current frontend stack.

## 🕹 Demo

Check out [the demo](https://rick-and-morty-demo.netlify.app/) and [storybook](https://rick-and-morty-storybook.netlify.app/)!

## 🔬 Tech stack

### Application:

- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [GraphQL](https://graphql.org/)
  - [Apollo](https://www.apollographql.com/)
  - [GraphQL Codegen](https://www.graphql-code-generator.com/)
- [Styled Components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)

### Code quality tools:

- [Husky](https://typicode.github.io/husky/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [Commit Lint](https://commitlint.js.org/)
- [Commitizen](https://commitizen-tools.github.io/commitizen/)

## 🛠 Development

1. Install dependencies:

   ```shell
   npm install
   ```

2. Run dev server:
   ```shell
   npm run dev
   ```

### 🦮 Suggested development workflow

1. Run dev server:

   ```shell
   npm run dev
   ```

2. Run Storybook server:
   ```shell
   npm run storybook
   ```
3. Create and checkout a branch, e.g.:
   ```shell
   git checkout -b ui/redesign-navigation
   ```
4. Make desired changes

5. Add files to Git staging:

   ```shell
   git add .
   ```

6. Commit your changes as often as you need, e.g.:

   ```shell
   git commit -m "feat: change navigation button size"
   ```

   > NOTICE:
   > The project uses Commit Lint that checks if the commit message is properly formatted.

   You may also use the following command to run Commitizen wizard:

   ```shell
   npm run commit
   ```

7. Push changes:

   ```shell
   git push -u origin/ui/redesign-navigation
   ```

8. Create pull request on GitHub.

9. If everything is ok - merge changes.

## 🚀 Build and deploy

1. Build the application:

   ```shell
   npm run build
   ```

2. Deploy `/dist` directory contents wherever you want.
   > NOTICE:
   > since the application uses React Router, make sure you redirect every path to `/index.html` on the server.

### Build and deploy Storybook

1. Build the Storybook:

   ```shell
   npm run build-storybook
   ```

2. Deploy `/storybook-static` directory contents wherever you want.

## 🗺 Roadmap

- [ ] Add logo
- [ ] Add image placeholder
- [ ] Add transitions between routes
- [ ] Add filter functionality
- [ ] Add `/locations` path
- [ ] Add `/episodes` path
- [ ] Organize files by features (eg. `characters`, `locations`, `episodes`)
- [ ] Improve accessibility
- [ ] Improve GraphQL caching

## Contribution

If you have any remarks, don't hesitate to [create an issue](https://github.com/pawel-schmidt/rick-and-morty/issues/new).
