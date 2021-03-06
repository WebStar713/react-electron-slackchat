# Stack Chat

![](https://img.shields.io/badge/language-JavaScript-yellow.svg)
![](https://img.shields.io/badge/category-learning-blue.svg)
[![](https://img.shields.io/badge/blog-@dejavudwh-red.svg)](https://dejavudwh.cn/)
![](http://progressed.io/bar/82?title=done)

> A multi-person chat collaborative desktop program using *Electron* and *React*

## Screenshots

![](https://github.com/dejavudwh/StackChat/blob/master/screenshots.png?raw=true)

## Dependencies

- Electron
- React
- Material-UI
- React-Router
- Redux
- Express
- Socket.io
- MongoDB

*As a learning purpose, subsequent function implementation is based on the same method[ (blog) ](https://dejavudwh.cn/StackChat/Node.js实现PC端类微信聊天软件（五）.html), so not all functions have been completed, only the basic functions have been completed*

## Installation

```JavaScript
npm install

//Server start
cd server
node app.js

//Client start
//To start hot deployment to run the project
npm start
npm run main
```

```JavaScript
//After the build
npm run build

//in main.js

+ win.loadURL(url.format({ pathname: path.join(__dirname, './build/index.html'), protocol: 'file:', slashes: true }))

- win.loadURL('http://localhost:3000')

npm run main

```