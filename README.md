![example workflow](https://github.com/mkremnev/weather-show/actions/workflows/check-and-deploy.yml/badge.svg?branch=master)

# Проект "Календарь Погоды"

See project.
[https://mkremnev.github.io/weather-show/](https://mkremnev.github.io/weather-show/)

### Clone repo

```bash
# clone the repo
$ git clone https://github.com/mkremnev/weather-show.git

# go into app's directory
$ cd weather-show

# checkout stable version
$ git checkout master

# install app's dependencies
$ npm install
```

### Basic usage

```bash
# dev server with hot reload at http://localhost:3000
$ npm run start
```

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
weather-show#v1.0.0
│
├── public/
│     ├── index.html       #html template
│     │
│     │
│     └── assets           #static files
│        │
│        ├──fonts          # fonts files
│        └──img            # image files
│
├── src/                   # project root
│    ├── api/              # api methods
│    ├── components/       # components
│    ├── observer/         # observer methods
│    ├── styles/           # styles scss
│    ├── app.js            # app project
│    └── index.js          # index project
│
└── package.json
```

## Creators

**Maxim Kremnev**
