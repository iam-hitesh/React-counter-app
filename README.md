## Counter application

##### Dependencies that was added to the app
(A React-Redux based application)
- React
- Redux


### Quick Start
Follow these steps to run the application

```
npm install 

(For installing dependencies needed for the project)
```

```
npm start 

(Runs the app in the development mode.)
```

```
visit http://localhost:8080 to view it in the browser.
```

- Find live version at https://suspicious-curie-911e91.netlify.app/

### Folder Structure
```
attainu
├── README.md
├── build
│   ├── bundle.js
│   └── index.html
├── package-lock.json
├── package.json
├── src
│   ├── actions
│   │   └── counter.js
│   ├── components
│   │   ├── counter
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   ├── counters
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   ├── index.js
│   │   └── navbar
│   │       ├── index.js
│   │       └── styles.js
│   ├── index.html
│   ├── index.js
│   ├── reducers
│   │   ├── counter.js
│   │   └── index.js
│   ├── store.js
│   └── styles
│       ├── index.js
│       ├── media.js
│       └── theme.js
└── webpack.config.js
```

`# actions and reducers directory contains all actions and reducers required by redux setup.`