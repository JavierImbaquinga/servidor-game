"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _categories = _interopRequireDefault(require("./routes/categories.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//importamos las rutas
var app = (0, _express["default"])(); //variables en express

app.set('pkg', _package["default"]);
app.use((0, _morgan["default"])('dev')); //peticiones

app.get('/', function (req, res) {
  res.json({
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  });
});
app.use('/api/categories', _categories["default"]);
var _default = app;
exports["default"] = _default;