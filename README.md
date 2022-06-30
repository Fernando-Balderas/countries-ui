# Countries UI
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
