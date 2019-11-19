# Repository_management
A web application using VueJS has the following functions
- List the first 30 repositories name of any github user (after entering the exact name of the user into a textfield)
- If the user has more than 30 repositories, you can load the next 30 repos by clicking the "Load more" button at the bottom of the list.
- Do not show the "Load more" button if all user repos have been loaded
- Display the number of public repos that user has, and the number of repos loaded under textfield
- Display the number of stargazers for each repo next to the name of the repo, with the button "Load stargazers" for each repo.
- List the first 30 stargazers when clicking the "Load stargazers" button, if the repo has more than 30 stargazers, display the "Load more stargazers" button at the bottom of the stargazers list.
- Can view stargazers of more than 1 repo at a time
- Disable the "Load more" and "Load more stargazers" buttons while loading data, re-enable after successful load or failure
- Display the "Loading" indicator in the "Load more" and "Load more stargazers" buttons after pressing the button and not yet loaded

## My Enviroment
```
node : 10.16.1
@vue/cli : 4.0.5
```

## Project setup
### 1. Setup dependencies for projects
```
npm install
```

### 2. Compiles and hot-reloads for development
```
npm run serve
```


