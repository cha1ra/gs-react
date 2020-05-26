# Lecture Memo

## Reference
[https://github.com/taroosg/react-tutoriial](https://github.com/taroosg/react-tutoriial)

## Installation

```
npx create-react-app app
```

```
cd app
yarn start
```

## Library

### `react-router-dom` を使う

```
yarn add react-router-dom
```




## Directory Structure

```
app
├── node_modules
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.js
│   ├── components
│   ├── index.css
│   ├── index.js
│   ├── serviceWorker.js
│   └── setupTests.js
└── yarn.lock
```

## Material UI

https://material-ui.com/getting-started/installation/
```
yarn add @material-ui/core
```

## `.eslintrc.js` の設定

Standardで設定したい  
https://gist.github.com/dreamorosi/6fd4048beb16a00a553fb8a7b9362caf  
  
```
yarn add standard --dev
```

```
$ yarn eslint --init        
yarn run v1.22.4
$ /***/react-app/node_modules/.bin/eslint --init
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? React
? Does your project use TypeScript? No
? Where does your code run? Browser
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Standard: https://github.com/standard/standard
? What format do you want your config file to be in? JavaScript
```

## React Hook とは？

https://ja.reactjs.org/docs/hooks-overview.html
  
## `prop-types`
https://ja.reactjs.org/docs/typechecking-with-proptypes.html  
https://www.npmjs.com/package/prop-types  
```
yarn add prop-types
```

## いい感じにわかりやすいチュートリアル

https://codingthesmartway.com/getting-started-with-material-ui-for-react-material-design-for-react/

この三項演算子の書き方は読みやすい

```
{ this.state.courses ? (
    <div>
        <TextField style={{padding: 24}}
            id="searchInput"
            placeholder="Search for Courses"   
            margin="normal"
            onChange={this.onSearchInputChange}
            />
        <Grid container spacing={24} style={{padding: 24}}>
            { this.state.courses.map(currentCourse => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <Course course={currentCourse} />
                </Grid>
            ))}
        </Grid>
    </div>
) : "No courses found" }
```

