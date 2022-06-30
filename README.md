# Frontend Countries
This app shows a table of countries extracted from an API. As a user, you can easily find a country by typing the name, region or subregion into search input. Another way is navigating page by page with the pagination options below the table. Sorting options are provided in table headings marked with icons. Sorting arranges iterates over ascending and descending by clicking over a heading. You can like a country by clicking Add button and add it to favourites. Dislike is also available with the Remove button into favourites right side-bar. Country’s full information can be reached by clicking its name, then you’ll navigate to its page; is also possible to like a country on this page. Finally, the theme colour can be changed with an icon in the navigation bar.

[Live version](https://lucent-moonbeam-710177.netlify.app/), [Docker image](https://hub.docker.com/r/fbalderasd/countries-ui)

## Features
- Fetch countries data with Redux-thunk
- Show a portion of countries using a custom pagination
- Search a country by its name, region or subregion
- Sort countries by name, population, area, and region
- Change themes using context hook
- Add/Remove coutries to favourites
- Show a country in detail
- Accessibility labels
## Technologies
- React
- Redux
- Bootstrap
- SASS
- React Icons
- [Countries API](https://restcountries.com/)

## Docker
```bash
# create image
docker build -t countries-ui:1.0.0 .
# start app
docker run --rm -p 3001:3000 countries-ui:1.0.0
# open link in a browser
http://localhost:3001
# Upoad image to docker hub
docker tag countries-ui:1.0.0 fbalderasd/countries-ui:1.0.0
docker push fbalderasd/countries-ui:1.0.0
```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
You should use either `npm` or `yarn` but not both. It's recommeded to use `yarn`

This template already comes with all needed packages. In case you want to install manually, check the dependencies in `package.json` file. To install, run:
```
yarn install
```

## Features
* Redux
* Redux-thunk
* Redux-saga
* React-router
* Prettier
* ESLint
* Husky & lint-staged

The template comes with ready-made code for a very simple working demo (products list). To play around with it, run:
```
yarn start
```

## Modify or add new features
Follow the file/folder structure as explained below to make necessary changes. For Redux, most of the time, you can copy existing files, modify something in there to make a new feature.

## Folder structure
* `src/components`: React components. For each component, it's better to put it in a separate folder. For example:
  ```
  src/components/Button/index.tsx
  src/components/Button/Button.scss
  src/components/Button/Button.stories.tsx
  src/components/Button/Button.test.tsx
  ```

* `src/hooks`: Custom hooks. For example:
  ```
  src/hooks/useCountries.ts
  src/hooks/useUser.ts
  ```

* `src/redux`: Everything (such as actions, reducers, sagas etc) related to Redux
  * `src/redux/actions`: For Redux actions
  * `src/redux/reducers`: For Redux reducers
  * `src/redux/sagas`: For Redux sagas
  * `src/redux/store.ts`: The Redux store

  If there are multiple un-related features, split action/reducer/saga into different files. For example:
  ```
  src/redux/actions/product.ts
  src/redux/actions/order.ts
  src/redux/actions/ui.ts
  ```
  ```
  src/redux/reducers/product.ts
  src/redux/reducers/order.ts
  src/redux/actions/ui.ts
  ```
  ```
  src/redux/sagas/product.ts
  src/redux/sagas/order.ts
  src/redux/sagas/ui.ts
  ```

* `src/pages`: Pages (or views) when using [React router](https://reacttraining.com/react-router/web/guides/quick-start). For example:
  ```
  src/pages/Home.tsx
  src/pages/Product.tsx
  ```
  If there are more files than just page's `*.tsx`, a folder structure can be used. For example:
  ```
  src/pages/Home/index.tsx
  src/pages/Home/Home.scss
  ```

* `src/types.ts`: TypeScript's type definitions. For small apps, you can put definitions of all types, interfaces etc and even Redux's actions, action creators, states here.

* `src/Routes.tsx`: Defines all the React router routes to different pages.

This template is suitable for rather small apps. For bigger apps, a better & more organized way is to split the folder structure into features, something like:
  ```
  sr/feature1
  --components
  --redux
  ----action.ts
  ----reducer.ts
  ----saga.ts

  src/feature2
  --components
  --redux
  ----action.ts
  ----reducer.ts
  ----saga.ts

  src/redux
  --action.ts
  --reducer.ts
  --saga.ts
  --store.ts
  ```
