# Recipe Book

Recipe Book is a simple project that lets the user maintain their recipes. It's built using React, amongst other things!

### Getting started
```sh
git clone git@bitbucket.org:mania_dev/recipe-book.git
cd recipe-book/
yarn run build
yarn run dev-server
```
Once the server does it's job, open your browser and hit: http://localhost:8080

### Main tech
- React
- Redux
- Webpack
- Yarn
- SCSS

### Introduction
Recipe book has been initialised with four recipes. Recipes can be added by clicking on the "Add New" button. Once added, the new recipe will show up in the list on the home page. The full recipe can be accessed by clicking the title listed in the home page. 

The recipes are persisted in the browser. Recipes can be removed by clicking on the accompanying remove button for each recipe. Recipes can also be searched by performing a lookup against the title or the ingredients mentioned in the recipe.

### Possible improvements
* Form validation for adding new recipe
    - Image size limit
    - Mandatory fields