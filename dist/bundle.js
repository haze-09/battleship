/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  box-sizing: border-box;
}

body {
  padding: 20px;
  height: 100vh;
}

#title {
  height: 10%;
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
}

#container {
  height: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.startImg {
  height: 50vh;
  transition: 0.2s ease-out;
}

.startImg:hover {
  height: 60vh;
}
.border {
  padding: 20px;
  transition: 0.2s ease-out;
}

.border:hover {
  border: 10px solid;
  border-radius: 25px;
}

.cell {
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s;
}

.cell:hover{
  border: 3px solid;
}

.grid {
  border: 5px solid;
  border-radius: 27px;
  height: 60vh;
  width: 60vh;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
}

#left {
  display: flex;
  flex-direction: column;
  align-items: center;
}

div[data-location="00"] {
  border-top-left-radius: 22px;
}

div[data-location="09"] {
  border-top-right-radius: 22px;
}

div[data-location="90"] {
  border-bottom-left-radius: 22px;
}

div[data-location="99"] {
  border-bottom-right-radius: 22px;
}

.ships {
  display: flex;
  flex-direction: column;
  gap: 5vh;
  justify-content: space-between;
}
.ship {
  padding: 10px;
  font-size: 2rem;
  text-align: center;
  transition: 0.2s;
  border-radius: 10px;
}
.ship:hover {
  background-color: #00abbe;
}

.highlight {
  background-color: #00abbe4d;
}

#confirm {
  margin-top: 20px;
  display: flex;
  gap: 50px;
}

.invisible{
  opacity: 0;
}

button {
  border: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  background: none;
  width: 6rem;
}

.green,
.blue,
.red {
  transition: 0.2s;
}
.green:hover {
  background-color: #60ca7f;
}

.blue:hover {
  background-color: #00abbe4d;
}

.red:hover {
  background-color: #e74848;
}

.placed{
  background-color: #00abbe;
}

.playerName{
  margin-bottom: 20px;
}

.playerNameBottom{
  margin-top: 20px;
  text-align: center;
}

.miss{

}

.hit{
  color: #ff0000;
}

.winner{
  margin-top: 30px;
  font-size: larger;
  text-align: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,kCAAkC;EAClC,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,aAAa;AACf;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;;AAEA;;;EAGE,gBAAgB;AAClB;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;;AAEA;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\r\n\r\n* {\r\n  font-family: \"Poppins\", sans-serif;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  padding: 20px;\r\n  height: 100vh;\r\n}\r\n\r\n#title {\r\n  height: 10%;\r\n  font-size: 3rem;\r\n  text-align: center;\r\n  font-weight: 600;\r\n}\r\n\r\n#container {\r\n  height: 90%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.startImg {\r\n  height: 50vh;\r\n  transition: 0.2s ease-out;\r\n}\r\n\r\n.startImg:hover {\r\n  height: 60vh;\r\n}\r\n.border {\r\n  padding: 20px;\r\n  transition: 0.2s ease-out;\r\n}\r\n\r\n.border:hover {\r\n  border: 10px solid;\r\n  border-radius: 25px;\r\n}\r\n\r\n.cell {\r\n  border: 1px solid;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: 0.1s;\r\n}\r\n\r\n.cell:hover{\r\n  border: 3px solid;\r\n}\r\n\r\n.grid {\r\n  border: 5px solid;\r\n  border-radius: 27px;\r\n  height: 60vh;\r\n  width: 60vh;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n#left {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\ndiv[data-location=\"00\"] {\r\n  border-top-left-radius: 22px;\r\n}\r\n\r\ndiv[data-location=\"09\"] {\r\n  border-top-right-radius: 22px;\r\n}\r\n\r\ndiv[data-location=\"90\"] {\r\n  border-bottom-left-radius: 22px;\r\n}\r\n\r\ndiv[data-location=\"99\"] {\r\n  border-bottom-right-radius: 22px;\r\n}\r\n\r\n.ships {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5vh;\r\n  justify-content: space-between;\r\n}\r\n.ship {\r\n  padding: 10px;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  transition: 0.2s;\r\n  border-radius: 10px;\r\n}\r\n.ship:hover {\r\n  background-color: #00abbe;\r\n}\r\n\r\n.highlight {\r\n  background-color: #00abbe4d;\r\n}\r\n\r\n#confirm {\r\n  margin-top: 20px;\r\n  display: flex;\r\n  gap: 50px;\r\n}\r\n\r\n.invisible{\r\n  opacity: 0;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  font-size: 18px;\r\n  background: none;\r\n  width: 6rem;\r\n}\r\n\r\n.green,\r\n.blue,\r\n.red {\r\n  transition: 0.2s;\r\n}\r\n.green:hover {\r\n  background-color: #60ca7f;\r\n}\r\n\r\n.blue:hover {\r\n  background-color: #00abbe4d;\r\n}\r\n\r\n.red:hover {\r\n  background-color: #e74848;\r\n}\r\n\r\n.placed{\r\n  background-color: #00abbe;\r\n}\r\n\r\n.playerName{\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.playerNameBottom{\r\n  margin-top: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.miss{\r\n\r\n}\r\n\r\n.hit{\r\n  color: #ff0000;\r\n}\r\n\r\n.winner{\r\n  margin-top: 30px;\r\n  font-size: larger;\r\n  text-align: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boardBuilder: () => (/* binding */ boardBuilder),
/* harmony export */   homePage: () => (/* binding */ homePage),
/* harmony export */   playArea: () => (/* binding */ playArea),
/* harmony export */   playAreaPvc: () => (/* binding */ playAreaPvc)
/* harmony export */ });
/* harmony import */ var _assets_pvp_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/pvp.png */ "./src/assets/pvp.png");
/* harmony import */ var _assets_pvc_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/pvc.png */ "./src/assets/pvc.png");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameBoard.js */ "./src/gameBoard.js");
/* harmony import */ var _gameLogic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameLogic.js */ "./src/gameLogic.js");






let left = document.querySelector("#left");
let right = document.querySelector("#right");

function homePage() {
  let left = document.querySelector("#left");
  let right = document.querySelector("#right");

  left.innerHTML = "";
  right.innerHTML = "";

  let leftImage = new Image();
  leftImage.src = _assets_pvp_png__WEBPACK_IMPORTED_MODULE_0__;
  leftImage.classList.add("startImg");
  left.appendChild(leftImage);

  let rightImage = new Image();
  rightImage.src = _assets_pvc_png__WEBPACK_IMPORTED_MODULE_1__;
  rightImage.classList.add("startImg");
  right.appendChild(rightImage);

  function leftClickHandler() {
    removeHomePageListeners();
    (0,_gameLogic_js__WEBPACK_IMPORTED_MODULE_4__.boardSetup)("pvp");
  }

  function rightClickHandler() {
    removeHomePageListeners();
    (0,_gameLogic_js__WEBPACK_IMPORTED_MODULE_4__.boardSetup)("pvc");
  }

  left.addEventListener("click", leftClickHandler);
  right.addEventListener("click", rightClickHandler);

  homePage.listeners = {
    left: { element: left, listener: leftClickHandler },
    right: { element: right, listener: rightClickHandler },
  };
}

function removeHomePageListeners() {
  if (homePage.listeners) {
    homePage.listeners.left.element.removeEventListener(
      "click",
      homePage.listeners.left.listener
    );
    homePage.listeners.right.element.removeEventListener(
      "click",
      homePage.listeners.right.listener
    );
    homePage.listeners = null;
  }
}

function appendShips(ships) {
  const shipData = [
    { name: "Carrier", length: 5 },
    { name: "Battleship", length: 4 },
    { name: "Cruiser", length: 3 },
    { name: "Submarine", length: 3 },
    { name: "Destroyer", length: 2 },
  ];
  shipData.forEach((ship) => {
    const shipElement = document.createElement("p");
    shipElement.classList.add("ship");
    shipElement.id = ship.name;
    shipElement.dataset.length = ship.length;
    shipElement.textContent = ship.name;
    ships.appendChild(shipElement);
  });
}

const dragnDrop = (function () {
  let ships;
  let cells;
  let validCoordinates;
  let placedCoordinates = [];
  let currentDirection;
  let currentLength;
  let currentShip;
  let noOfShips = 5;
  let head;
  let player1Setup = false;
  let confirmClickHandler;
  let rotateClickHandler;
  let cancelClickHandler;

  const enable = (board, type) => {
    ships = document.querySelectorAll(".ship");
    cells = document.querySelectorAll(".cell");

    ships.forEach((ship) => {
      ship.setAttribute("draggable", "true");
      ship.addEventListener("dragstart", dragStart);
      ship.addEventListener("dragend", dragEnd);
    });

    cells.forEach((cell) => {
      cell.addEventListener("dragenter", dragEnter);
      cell.addEventListener("dragover", dragOver);
      cell.addEventListener("drop", (e) => {
        drop(e, board, type);
      });
    });
  };

  const dragStart = (e) => {
    e.dataTransfer.setData("name", e.target.id);
    currentShip = e.target;
    currentLength = currentShip.dataset.length;
    e.dataTransfer.effectAllowed = "move";
    currentShip.style.opacity = "0";

    const img = new Image();
    img.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    e.dataTransfer.setDragImage(img, 0, 0);
  };

  const dragEnd = () => {
    currentShip.style.opacity = "1";
  };

  const dragEnter = (e) => {
    e.preventDefault();
    clearHighlight();
  };

  const dragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";

    head = e.target.dataset.location.split("").map(Number);
    let length = parseInt(currentLength);
    directions(length);
    if (validCoordinates && validCoordinates.length > 0) {
      placeCells(validCoordinates[0].coordinates, "highlight");
    }
  };

  const drop = (e, board, type) => {
    e.preventDefault();
    ships.forEach((ship) => ship.setAttribute("draggable", "false"));
    enableButtons(board,type);
  };

  const enableButtons = (board, type) => {
    let buttonDiv = document.querySelector("#confirm");
    buttonDiv.classList.remove("invisible");

    let confirmButton = document.querySelector(".green");
    let rotateButton = document.querySelector(".blue");
    let cancelButton = document.querySelector(".red");

    confirmClickHandler = () => {
      confirmPlacement(board, type);
    };

    rotateClickHandler = () => {
      rotate();
    };

    cancelClickHandler = () => {
      cancel();
    };

    confirmButton.addEventListener("click", confirmClickHandler, {
      once: true,
    });
    rotateButton.addEventListener("click", rotateClickHandler);
    cancelButton.addEventListener("click", cancelClickHandler);
  };

  const confirmPlacement = (board, type) => {
    noOfShips--;
    clearHighlight();
    placeCells(currentDirection.coordinates, "placed");
    let buttonDiv = document.querySelector("#confirm");
    buttonDiv.classList.add("invisible");
    placedCoordinates.push(...currentDirection.coordinates);
    board.placeShip(currentShip.id, head, currentDirection.direction);
    currentShip.remove();
    ships.forEach((ship) => ship.setAttribute("draggable", "true"));
    removeListeners();

    if (noOfShips <= 0) {
      if (type === "pvc") {
        (0,_gameLogic_js__WEBPACK_IMPORTED_MODULE_4__.gameStartPvc)();
      } else {
        if (player1Setup === false) {
          noOfShips = 5;
          player1Setup = true;
          placedCoordinates = [];
          boardBuilder("Player 2", _player_js__WEBPACK_IMPORTED_MODULE_2__.player2.board);
        } else {
          (0,_gameLogic_js__WEBPACK_IMPORTED_MODULE_4__.gameStart)();
        }
      }
    }
  };

  const rotate = () => {
    let currentDirectionIndex = validCoordinates.findIndex(
      (coord) => coord.direction === currentDirection.direction
    );

    currentDirectionIndex =
      (currentDirectionIndex + 1) % validCoordinates.length;
    currentDirection = validCoordinates[currentDirectionIndex];

    clearHighlight();
    placeCells(currentDirection.coordinates, "highlight");
  };

  const cancel = () => {
    clearHighlight();
    let buttonDiv = document.querySelector("#confirm");
    buttonDiv.classList.add("invisible");
    ships.forEach((ship) => ship.setAttribute("draggable", "true"));
    removeListeners();
  };

  const removeListeners = () => {
    document
      .querySelector(".green")
      .removeEventListener("click", confirmClickHandler);
    document
      .querySelector(".blue")
      .removeEventListener("click", rotateClickHandler);
    document
      .querySelector(".red")
      .removeEventListener("click", cancelClickHandler);
  };

  const directions = (length) => {
    let directions = [
      {
        coordinates: (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_3__.coordinatesCalculator)(head, length, "right"),
        direction: "right",
      },
      {
        coordinates: (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_3__.coordinatesCalculator)(head, length, "down"),
        direction: "down",
      },
      {
        coordinates: (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_3__.coordinatesCalculator)(head, length, "left"),
        direction: "left",
      },
      {
        coordinates: (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_3__.coordinatesCalculator)(head, length, "up"),
        direction: "up",
      },
    ];

    const hasOverlap = (coords) => {
      return coords.some((coord) =>
        placedCoordinates.some(
          (placed) => placed[0] === coord[0] && placed[1] === coord[1]
        )
      );
    };

    validCoordinates = directions.filter(
      (value) =>
        value.coordinates != undefined && !hasOverlap(value.coordinates)
    );

    currentDirection = validCoordinates[0];
  };

  const placeCells = (coordinates, chosenClass) => {
    coordinates.forEach((coordinate) => {
      let cell = document.querySelector(
        `.cell[data-location='${coordinate[0]}${coordinate[1]}']`
      );
      if (cell) {
        cell.classList.add(chosenClass);
      }
    });
  };

  const clearHighlight = () => {
    cells.forEach((cell) => cell.classList.remove("highlight"));
  };

  return {
    enable,
    clearHighlight,
    placeCells,
    get validCoordinates() {
      return validCoordinates;
    },
  };
})();

function confirm(div) {
  let confirmButton = document.createElement("button");
  confirmButton.textContent = "Confirm";
  confirmButton.classList.add("green");
  div.appendChild(confirmButton);

  let rotateButton = document.createElement("button");
  rotateButton.textContent = "Rotate";
  rotateButton.classList.add("blue");
  div.appendChild(rotateButton);

  let cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.classList.add("red");
  div.appendChild(cancelButton);
}

function boardBuilder(player, board, type) {
  left.classList.remove("border");
  right.classList.remove("border");
  left.innerHTML = "";
  right.innerHTML = "";

  let playerName = document.createElement("p");
  playerName.classList.add("playerName");
  playerName.textContent = player;
  left.appendChild(playerName);

  let yourBoardDiv = document.createElement("div");
  let ships = document.createElement("div");
  ships.classList.add("ships");
  appendShips(ships);
  left.appendChild(yourBoardDiv);
  right.appendChild(ships);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.location = `${i}${j}`;
      yourBoardDiv.classList.add("grid");
      yourBoardDiv.appendChild(cell);
    }
  }
  let buttonDiv = document.createElement("div");
  buttonDiv.classList.add("invisible");
  buttonDiv.id = "confirm";
  confirm(buttonDiv);
  left.appendChild(buttonDiv);
  dragnDrop.enable(board, type);
}

function playArea(
  player1Board,
  player2Board,
  currentPlayer = "Player 1",
  opponent = "Player 2"
) {
  left.innerHTML = "";
  right.innerHTML = "";

  let yourBoardDiv = document.createElement("div");
  left.appendChild(yourBoardDiv);

  let currentPlayerName = document.createElement("p");
  currentPlayerName.textContent = currentPlayer;
  currentPlayerName.classList.add("playerNameBottom");
  left.appendChild(currentPlayerName);

  for (let [rowIndex, row] of player1Board.board.entries()) {
    for (let [colIndex, item] of row.entries()) {
      let cell = document.createElement("div");
      cell.dataset.location = `${rowIndex}${colIndex}`;
      cell.classList.add("cell");
      if (item.missed === true) {
        cell.textContent = "o";
      }
      if (item.ship === true) {
        cell.classList.add("placed");
      }
      if (item.hit === true) {
        cell.textContent = "X";
        cell.classList.add("hit");
      }
      yourBoardDiv.classList.add("grid");
      yourBoardDiv.appendChild(cell);
    }
  }

  let opponentBoardDiv = document.createElement("div");
  right.appendChild(opponentBoardDiv);

  let opponentName = document.createElement("p");
  opponentName.textContent = opponent;
  opponentName.classList.add("playerNameBottom");
  right.appendChild(opponentName);

  for (let [rowIndex, row] of player2Board.board.entries()) {
    for (let [colIndex, item] of row.entries()) {
      let cell = document.createElement("div");
      cell.dataset.location = `${rowIndex}${colIndex}`;
      cell.classList.add("cell");
      if (item.missed === true) {
        cell.textContent = "o";
      }
      if (item.hit === true) {
        cell.textContent = "X";
        cell.classList.add("hit");
      }

      cell.addEventListener("click", (e) => {
        let coordinate = e.target.dataset.location.split("").map(Number);
        player2Board.receiveAttack(coordinate);
        console.log(player2Board.lose());
        if (player2Board.lose() === true) {
          left.innerHTML = "";
          right.innerHTML = "";

          let winMessage = `${currentPlayer} has won!`;
          let winner = document.createElement("p");
          winner.textContent = winMessage;
          winner.classList.add("winner");

          let title = document.querySelector("#title");

          title.after(winner);
        } else {
          playArea(player2Board, player1Board, opponent, currentPlayer);
        }
      });

      opponentBoardDiv.classList.add("grid");
      opponentBoardDiv.appendChild(cell);
    }
  }
}

function playAreaPvc(player1Board, computerBoard) {
  left.innerHTML = "";
  right.innerHTML = "";

  let yourBoardDiv = document.createElement("div");
  left.appendChild(yourBoardDiv);

  let playerName = document.createElement("p");
  playerName.textContent = "Player";
  playerName.classList.add("playerNameBottom");
  left.appendChild(playerName);

  for (let [rowIndex, row] of player1Board.board.entries()) {
    for (let [colIndex, item] of row.entries()) {
      let cell = document.createElement("div");
      cell.dataset.location = `${rowIndex}${colIndex}`;
      cell.classList.add("cell");
      if (item.missed === true) {
        cell.textContent = "o";
      }
      if (item.ship === true) {
        cell.classList.add("placed");
      }
      if (item.hit === true) {
        cell.textContent = "X";
        cell.classList.add("hit");
      }
      yourBoardDiv.classList.add("grid");
      yourBoardDiv.appendChild(cell);
    }
  }

  let computerBoardDiv = document.createElement("div");
  right.appendChild(computerBoardDiv);

  let computerName = document.createElement("p");
  computerName.textContent = "Computer";
  computerName.classList.add("playerNameBottom");
  right.appendChild(computerName);

  for (let [rowIndex, row] of computerBoard.board.entries()) {
    for (let [colIndex, item] of row.entries()) {
      let cell = document.createElement("div");
      cell.dataset.location = `${rowIndex}${colIndex}`;
      cell.classList.add("cell");
      if (item.missed === true) {
        cell.textContent = "o";
      }
      if (item.hit === true) {
        cell.textContent = "X";
        cell.classList.add("hit");
      }

      cell.addEventListener("click", (e) => {
        let coordinate = e.target.dataset.location.split("").map(Number);
        computerBoard.receiveAttack(coordinate);
        console.log(computerBoard.lose());
        if (computerBoard.lose() === true) {
          winner("Player");
        } else {
          player1Board.receiveAttack((0,_player_js__WEBPACK_IMPORTED_MODULE_2__.getRandomCoordinate)());
          if (player1Board.lose() === true) {
            winner("Computer");
          } else {
            playAreaPvc(player1Board, computerBoard);
          }
        }
      });

      computerBoardDiv.classList.add("grid");
      computerBoardDiv.appendChild(cell);
    }
  }
}

const winner = (player) => {
  left.innerHTML = "";
  right.innerHTML = "";

  let winMessage = `${player} has won!`;
  let winner = document.createElement("p");
  winner.textContent = winMessage;
  winner.classList.add("winner");

  let title = document.querySelector("#title");

  title.after(winner);
};




/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coordinatesCalculator: () => (/* binding */ coordinatesCalculator),
/* harmony export */   gameBoard: () => (/* binding */ gameBoard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");


function cell() {
  let missed = false;
  let ship = false;
  let hit = false;
  let shipObj;

  return { missed, hit, ship, shipObj };
}

function coordinatesCalculator(head, length, direction) {
  let coordinates = [];

  switch (direction) {
    case "left":
      if (head[1] - length + 1 >= 0) {
        for (let i = 0; i < length; i++) {
          coordinates.push([head[0], head[1] - i]);
        }
      }
      break;

    case "right":
      if (head[1] + length - 1 <= 9) {
        for (let i = 0; i < length; i++) {
          coordinates.push([head[0], head[1] + i]);
        }
      }
      break;

    case "up":
      if (head[0] - length + 1 >= 0) {
        for (let i = 0; i < length; i++) {
          coordinates.push([head[0] - i, head[1]]);
        }
      }
      break;

    case "down":
      if (head[0] + length - 1 <= 9) {
        for (let i = 0; i < length; i++) {
          coordinates.push([head[0] + i, head[1]]);
        }
      }
      break;
    default:
      break;
  }

  return coordinates.length ? coordinates : undefined;
}

function gameBoard() {
  let board = [];
  for (let i = 0; i < 10; i++) {
    board[i] = [];
    for (let j = 0; j < 10; j++) {
      let newCell = cell();
      board[i].push(newCell);
    }
  }
  let carrier = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(5);
  let battleship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(4);
  let cruiser = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(3);
  let submarine = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(3);
  let destroyer = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2);
  let noOfShips = 5;

  const shipPlacer = (head, ship, direction) => {
    console.log("shipPlacer", head);
    let coordinates = coordinatesCalculator(head, ship.length, direction);

    if (!coordinates) {
      throw new Error("Invalid placement: Out of bounds.");
    }
    for (let coordinate of coordinates) {
      if (board[coordinate[0]][coordinate[1]].ship === true) {
        throw new Error("Invalid placement: Overlapping ships.");
      }
    }

    for (let coordinate of coordinates) {
      board[coordinate[0]][coordinate[1]].ship = true;
      board[coordinate[0]][coordinate[1]].shipObj = ship;
    }

    noOfShips--;
  };

  const placeShip = (shipType, head, direction) => {
    console.log("placeShip", head);
    if (noOfShips <= 0) {
      return "out of ships";
    }
    switch (shipType) {
      case "Carrier":
        shipPlacer(head, carrier, direction);
        break;

      case "Battleship":
        shipPlacer(head, battleship, direction);
        break;

      case "Cruiser":
        shipPlacer(head, cruiser, direction);
        break;

      case "Submarine":
        shipPlacer(head, submarine, direction);
        break;

      case "Destroyer":
        shipPlacer(head, destroyer, direction);
        break;

      default:
        throw new Error("invalid ship name");
    }
  };

  let sunkCounter = 0;

  const receiveAttack = (coordinate) => {
    let cell = board[coordinate[0]][coordinate[1]];

    if (!cell.missed && !cell.hit) {
      if (!cell.ship) {
        cell.missed = true;
      } else {
        cell.hit = true;
        cell.shipObj.hit();
        if (cell.shipObj.sunk) {
          sunkCounter++;
        }
      }
    }
  };

  const lose = () => {
    return sunkCounter >= 5;
  };

  return {
    get board() {
      return board;
    },
    placeShip,
    receiveAttack,
    lose,
  };
}




/***/ }),

/***/ "./src/gameLogic.js":
/*!**************************!*\
  !*** ./src/gameLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boardSetup: () => (/* binding */ boardSetup),
/* harmony export */   gameStart: () => (/* binding */ gameStart),
/* harmony export */   gameStartPvc: () => (/* binding */ gameStartPvc)
/* harmony export */ });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");



function boardSetup(type) {
  switch (type) {
    case "pvp":
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.boardBuilder)("Player 1", _player_js__WEBPACK_IMPORTED_MODULE_0__.player1.board);
      break;

    case "pvc":
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.boardBuilder)("Player 1", _player_js__WEBPACK_IMPORTED_MODULE_0__.player1.board, "pvc");
      break;

    default:
      break;
  }
}

function gameStart() {
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.playArea)(_player_js__WEBPACK_IMPORTED_MODULE_0__.player1.board, _player_js__WEBPACK_IMPORTED_MODULE_0__.player2.board);
}

function gameStartPvc() {
  (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.placeAllShips)();
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.playAreaPvc)(_player_js__WEBPACK_IMPORTED_MODULE_0__.player1.board, _player_js__WEBPACK_IMPORTED_MODULE_0__.computer.board);
}




/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computer: () => (/* binding */ computer),
/* harmony export */   getRandomCoordinate: () => (/* binding */ getRandomCoordinate),
/* harmony export */   placeAllShips: () => (/* binding */ placeAllShips),
/* harmony export */   player1: () => (/* binding */ player1),
/* harmony export */   player2: () => (/* binding */ player2)
/* harmony export */ });
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard.js */ "./src/gameBoard.js");


function player(type) {
  let board = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_0__.gameBoard)();
  return { type, board };
}

let player1 = player("player");
let player2 = player("player");
let computer = player("computer");


function getRandomCoordinate() {
  return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
}

function getRandomDirection() {
  const directions = ["left", "right", "up", "down"];
  return directions[Math.floor(Math.random() * directions.length)];
}

function placeAllShips(gameBoard) {
  const ships = [
    { type: "Carrier", length: 5 },
    { type: "Battleship", length: 4 },
    { type: "Cruiser", length: 3 },
    { type: "Submarine", length: 3 },
    { type: "Destroyer", length: 2 },
  ];

  for (const ship of ships) {
    let placed = false;
    while (!placed) {
      const head = getRandomCoordinate();
      const direction = getRandomDirection();
      try {
        computer.board.placeShip(ship.type, head, direction);
        placed = true;
      } catch (error) {
        console.log(`Failed to place ${ship.type}. Trying a new position.`);
      }
    }
  }
}







/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ship)
/* harmony export */ });
function ship(length) {
  let hits = 0;
  let sunk = false;

  const hit = () => {
    hits++;
    setSunk();
  };

  const setSunk = () => {
    if (hits >= length) {
      sunk = true;
    }
  };

  return {
    hit,
    setSunk,
    get sunk() {
      return sunk;
    },
    get length(){
      return length;
    }
  };
}


/***/ }),

/***/ "./src/assets/pvc.png":
/*!****************************!*\
  !*** ./src/assets/pvc.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a06b88da0bcf5c58ba3.png";

/***/ }),

/***/ "./src/assets/pvp.png":
/*!****************************!*\
  !*** ./src/assets/pvp.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bdf30d4b6d11350f5793.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");



(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.homePage)();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsdUhBQXVILE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQzNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSx5R0FBeUcsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFN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QUFNLDRCQUE0QjtBQUNsQyxNQUFNLCtCQUErQjtBQUNyQyxNQUFNLDRCQUE0QjtBQUNsQyxNQUFNLDhCQUE4QjtBQUNwQyxNQUFNLDhCQUE4QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsMkRBQVk7QUFDcEIsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLCtDQUFPO0FBQzFDLFVBQVU7QUFDVixVQUFVLHdEQUFTO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2U7O0FBRXBDLGlEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVMb2dpYy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiN0aXRsZSB7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDkwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGFydEltZyB7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5zdGFydEltZzpob3ZlciB7XHJcbiAgaGVpZ2h0OiA2MHZoO1xyXG59XHJcbi5ib3JkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcclxufVxyXG5cclxuLmJvcmRlcjpob3ZlciB7XHJcbiAgYm9yZGVyOiAxMHB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi5jZWxsIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4xcztcclxufVxyXG5cclxuLmNlbGw6aG92ZXJ7XHJcbiAgYm9yZGVyOiAzcHggc29saWQ7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICBib3JkZXI6IDVweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAyN3B4O1xyXG4gIGhlaWdodDogNjB2aDtcclxuICB3aWR0aDogNjB2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xyXG59XHJcblxyXG4jbGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdltkYXRhLWxvY2F0aW9uPVwiMDBcIl0ge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIycHg7XHJcbn1cclxuXHJcbmRpdltkYXRhLWxvY2F0aW9uPVwiMDlcIl0ge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMnB4O1xyXG59XHJcblxyXG5kaXZbZGF0YS1sb2NhdGlvbj1cIjkwXCJdIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMnB4O1xyXG59XHJcblxyXG5kaXZbZGF0YS1sb2NhdGlvbj1cIjk5XCJdIHtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjJweDtcclxufVxyXG5cclxuLnNoaXBzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA1dmg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5zaGlwIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5zaGlwOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYmJlO1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYmJlNGQ7XHJcbn1cclxuXHJcbiNjb25maXJtIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA1MHB4O1xyXG59XHJcblxyXG4uaW52aXNpYmxle1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICB3aWR0aDogNnJlbTtcclxufVxyXG5cclxuLmdyZWVuLFxyXG4uYmx1ZSxcclxuLnJlZCB7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG4uZ3JlZW46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MGNhN2Y7XHJcbn1cclxuXHJcbi5ibHVlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYmJlNGQ7XHJcbn1cclxuXHJcbi5yZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzQ4NDg7XHJcbn1cclxuXHJcbi5wbGFjZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWJiZTtcclxufVxyXG5cclxuLnBsYXllck5hbWV7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnBsYXllck5hbWVCb3R0b217XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5taXNze1xyXG5cclxufVxyXG5cclxuLmhpdHtcclxuICBjb2xvcjogI2ZmMDAwMDtcclxufVxyXG5cclxuLndpbm5lcntcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBOztBQUVBOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZSB7XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnRJbWcge1xcclxcbiAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0SW1nOmhvdmVyIHtcXHJcXG4gIGhlaWdodDogNjB2aDtcXHJcXG59XFxyXFxuLmJvcmRlciB7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlcjpob3ZlciB7XFxyXFxuICBib3JkZXI6IDEwcHggc29saWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbDpob3ZlcntcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI3cHg7XFxyXFxuICBoZWlnaHQ6IDYwdmg7XFxyXFxuICB3aWR0aDogNjB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmRpdltkYXRhLWxvY2F0aW9uPVxcXCIwMFxcXCJdIHtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIycHg7XFxyXFxufVxcclxcblxcclxcbmRpdltkYXRhLWxvY2F0aW9uPVxcXCIwOVxcXCJdIHtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXZbZGF0YS1sb2NhdGlvbj1cXFwiOTBcXFwiXSB7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXZbZGF0YS1sb2NhdGlvbj1cXFwiOTlcXFwiXSB7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA1dmg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5zaGlwIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLnNoaXA6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWJiZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hsaWdodCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYmJlNGQ7XFxyXFxufVxcclxcblxcclxcbiNjb25maXJtIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW52aXNpYmxle1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIHdpZHRoOiA2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JlZW4sXFxyXFxuLmJsdWUsXFxyXFxuLnJlZCB7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG4uZ3JlZW46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwY2E3ZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJsdWU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWJiZTRkO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzQ4NDg7XFxyXFxufVxcclxcblxcclxcbi5wbGFjZWR7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYmJlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyTmFtZXtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJOYW1lQm90dG9te1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3N7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5oaXR7XFxyXFxuICBjb2xvcjogI2ZmMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lcntcXHJcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHZQIGZyb20gXCIuL2Fzc2V0cy9wdnAucG5nXCI7XG5pbXBvcnQgUHZDIGZyb20gXCIuL2Fzc2V0cy9wdmMucG5nXCI7XG5pbXBvcnQgeyBwbGF5ZXIyLCBnZXRSYW5kb21Db29yZGluYXRlIH0gZnJvbSBcIi4vcGxheWVyLmpzXCI7XG5pbXBvcnQgeyBjb29yZGluYXRlc0NhbGN1bGF0b3IgfSBmcm9tIFwiLi9nYW1lQm9hcmQuanNcIjtcbmltcG9ydCB7IGJvYXJkU2V0dXAsIGdhbWVTdGFydCwgZ2FtZVN0YXJ0UHZjIH0gZnJvbSBcIi4vZ2FtZUxvZ2ljLmpzXCI7XG5cbmxldCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZWZ0XCIpO1xubGV0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyaWdodFwiKTtcblxuZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG4gIGxldCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZWZ0XCIpO1xuICBsZXQgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpZ2h0XCIpO1xuXG4gIGxlZnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgcmlnaHQuaW5uZXJIVE1MID0gXCJcIjtcblxuICBsZXQgbGVmdEltYWdlID0gbmV3IEltYWdlKCk7XG4gIGxlZnRJbWFnZS5zcmMgPSBQdlA7XG4gIGxlZnRJbWFnZS5jbGFzc0xpc3QuYWRkKFwic3RhcnRJbWdcIik7XG4gIGxlZnQuYXBwZW5kQ2hpbGQobGVmdEltYWdlKTtcblxuICBsZXQgcmlnaHRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICByaWdodEltYWdlLnNyYyA9IFB2QztcbiAgcmlnaHRJbWFnZS5jbGFzc0xpc3QuYWRkKFwic3RhcnRJbWdcIik7XG4gIHJpZ2h0LmFwcGVuZENoaWxkKHJpZ2h0SW1hZ2UpO1xuXG4gIGZ1bmN0aW9uIGxlZnRDbGlja0hhbmRsZXIoKSB7XG4gICAgcmVtb3ZlSG9tZVBhZ2VMaXN0ZW5lcnMoKTtcbiAgICBib2FyZFNldHVwKFwicHZwXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmlnaHRDbGlja0hhbmRsZXIoKSB7XG4gICAgcmVtb3ZlSG9tZVBhZ2VMaXN0ZW5lcnMoKTtcbiAgICBib2FyZFNldHVwKFwicHZjXCIpO1xuICB9XG5cbiAgbGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGVmdENsaWNrSGFuZGxlcik7XG4gIHJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByaWdodENsaWNrSGFuZGxlcik7XG5cbiAgaG9tZVBhZ2UubGlzdGVuZXJzID0ge1xuICAgIGxlZnQ6IHsgZWxlbWVudDogbGVmdCwgbGlzdGVuZXI6IGxlZnRDbGlja0hhbmRsZXIgfSxcbiAgICByaWdodDogeyBlbGVtZW50OiByaWdodCwgbGlzdGVuZXI6IHJpZ2h0Q2xpY2tIYW5kbGVyIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhvbWVQYWdlTGlzdGVuZXJzKCkge1xuICBpZiAoaG9tZVBhZ2UubGlzdGVuZXJzKSB7XG4gICAgaG9tZVBhZ2UubGlzdGVuZXJzLmxlZnQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgaG9tZVBhZ2UubGlzdGVuZXJzLmxlZnQubGlzdGVuZXJcbiAgICApO1xuICAgIGhvbWVQYWdlLmxpc3RlbmVycy5yaWdodC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBob21lUGFnZS5saXN0ZW5lcnMucmlnaHQubGlzdGVuZXJcbiAgICApO1xuICAgIGhvbWVQYWdlLmxpc3RlbmVycyA9IG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kU2hpcHMoc2hpcHMpIHtcbiAgY29uc3Qgc2hpcERhdGEgPSBbXG4gICAgeyBuYW1lOiBcIkNhcnJpZXJcIiwgbGVuZ3RoOiA1IH0sXG4gICAgeyBuYW1lOiBcIkJhdHRsZXNoaXBcIiwgbGVuZ3RoOiA0IH0sXG4gICAgeyBuYW1lOiBcIkNydWlzZXJcIiwgbGVuZ3RoOiAzIH0sXG4gICAgeyBuYW1lOiBcIlN1Ym1hcmluZVwiLCBsZW5ndGg6IDMgfSxcbiAgICB7IG5hbWU6IFwiRGVzdHJveWVyXCIsIGxlbmd0aDogMiB9LFxuICBdO1xuICBzaGlwRGF0YS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgY29uc3Qgc2hpcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICBzaGlwRWxlbWVudC5pZCA9IHNoaXAubmFtZTtcbiAgICBzaGlwRWxlbWVudC5kYXRhc2V0Lmxlbmd0aCA9IHNoaXAubGVuZ3RoO1xuICAgIHNoaXBFbGVtZW50LnRleHRDb250ZW50ID0gc2hpcC5uYW1lO1xuICAgIHNoaXBzLmFwcGVuZENoaWxkKHNoaXBFbGVtZW50KTtcbiAgfSk7XG59XG5cbmNvbnN0IGRyYWduRHJvcCA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBzaGlwcztcbiAgbGV0IGNlbGxzO1xuICBsZXQgdmFsaWRDb29yZGluYXRlcztcbiAgbGV0IHBsYWNlZENvb3JkaW5hdGVzID0gW107XG4gIGxldCBjdXJyZW50RGlyZWN0aW9uO1xuICBsZXQgY3VycmVudExlbmd0aDtcbiAgbGV0IGN1cnJlbnRTaGlwO1xuICBsZXQgbm9PZlNoaXBzID0gNTtcbiAgbGV0IGhlYWQ7XG4gIGxldCBwbGF5ZXIxU2V0dXAgPSBmYWxzZTtcbiAgbGV0IGNvbmZpcm1DbGlja0hhbmRsZXI7XG4gIGxldCByb3RhdGVDbGlja0hhbmRsZXI7XG4gIGxldCBjYW5jZWxDbGlja0hhbmRsZXI7XG5cbiAgY29uc3QgZW5hYmxlID0gKGJvYXJkLCB0eXBlKSA9PiB7XG4gICAgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIik7XG4gICAgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGxcIik7XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XG4gICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ1N0YXJ0KTtcbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgZHJhZ0VuZCk7XG4gICAgfSk7XG5cbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgZHJhZ0VudGVyKTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdPdmVyKTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGUpID0+IHtcbiAgICAgICAgZHJvcChlLCBib2FyZCwgdHlwZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkcmFnU3RhcnQgPSAoZSkgPT4ge1xuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJuYW1lXCIsIGUudGFyZ2V0LmlkKTtcbiAgICBjdXJyZW50U2hpcCA9IGUudGFyZ2V0O1xuICAgIGN1cnJlbnRMZW5ndGggPSBjdXJyZW50U2hpcC5kYXRhc2V0Lmxlbmd0aDtcbiAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCI7XG4gICAgY3VycmVudFNoaXAuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9XG4gICAgICBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veXdBQUFBQUFRQUJBQUFDQVV3QU93PT1cIjtcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoaW1nLCAwLCAwKTtcbiAgfTtcblxuICBjb25zdCBkcmFnRW5kID0gKCkgPT4ge1xuICAgIGN1cnJlbnRTaGlwLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgfTtcblxuICBjb25zdCBkcmFnRW50ZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjbGVhckhpZ2hsaWdodCgpO1xuICB9O1xuXG4gIGNvbnN0IGRyYWdPdmVyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xuXG4gICAgaGVhZCA9IGUudGFyZ2V0LmRhdGFzZXQubG9jYXRpb24uc3BsaXQoXCJcIikubWFwKE51bWJlcik7XG4gICAgbGV0IGxlbmd0aCA9IHBhcnNlSW50KGN1cnJlbnRMZW5ndGgpO1xuICAgIGRpcmVjdGlvbnMobGVuZ3RoKTtcbiAgICBpZiAodmFsaWRDb29yZGluYXRlcyAmJiB2YWxpZENvb3JkaW5hdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHBsYWNlQ2VsbHModmFsaWRDb29yZGluYXRlc1swXS5jb29yZGluYXRlcywgXCJoaWdobGlnaHRcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRyb3AgPSAoZSwgYm9hcmQsIHR5cGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJmYWxzZVwiKSk7XG4gICAgZW5hYmxlQnV0dG9ucyhib2FyZCx0eXBlKTtcbiAgfTtcblxuICBjb25zdCBlbmFibGVCdXR0b25zID0gKGJvYXJkLCB0eXBlKSA9PiB7XG4gICAgbGV0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybVwiKTtcbiAgICBidXR0b25EaXYuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcblxuICAgIGxldCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmVlblwiKTtcbiAgICBsZXQgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibHVlXCIpO1xuICAgIGxldCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZFwiKTtcblxuICAgIGNvbmZpcm1DbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBjb25maXJtUGxhY2VtZW50KGJvYXJkLCB0eXBlKTtcbiAgICB9O1xuXG4gICAgcm90YXRlQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgcm90YXRlKCk7XG4gICAgfTtcblxuICAgIGNhbmNlbENsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGNhbmNlbCgpO1xuICAgIH07XG5cbiAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maXJtQ2xpY2tIYW5kbGVyLCB7XG4gICAgICBvbmNlOiB0cnVlLFxuICAgIH0pO1xuICAgIHJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcm90YXRlQ2xpY2tIYW5kbGVyKTtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbENsaWNrSGFuZGxlcik7XG4gIH07XG5cbiAgY29uc3QgY29uZmlybVBsYWNlbWVudCA9IChib2FyZCwgdHlwZSkgPT4ge1xuICAgIG5vT2ZTaGlwcy0tO1xuICAgIGNsZWFySGlnaGxpZ2h0KCk7XG4gICAgcGxhY2VDZWxscyhjdXJyZW50RGlyZWN0aW9uLmNvb3JkaW5hdGVzLCBcInBsYWNlZFwiKTtcbiAgICBsZXQgYnV0dG9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25maXJtXCIpO1xuICAgIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgIHBsYWNlZENvb3JkaW5hdGVzLnB1c2goLi4uY3VycmVudERpcmVjdGlvbi5jb29yZGluYXRlcyk7XG4gICAgYm9hcmQucGxhY2VTaGlwKGN1cnJlbnRTaGlwLmlkLCBoZWFkLCBjdXJyZW50RGlyZWN0aW9uLmRpcmVjdGlvbik7XG4gICAgY3VycmVudFNoaXAucmVtb3ZlKCk7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpKTtcbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcblxuICAgIGlmIChub09mU2hpcHMgPD0gMCkge1xuICAgICAgaWYgKHR5cGUgPT09IFwicHZjXCIpIHtcbiAgICAgICAgZ2FtZVN0YXJ0UHZjKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGxheWVyMVNldHVwID09PSBmYWxzZSkge1xuICAgICAgICAgIG5vT2ZTaGlwcyA9IDU7XG4gICAgICAgICAgcGxheWVyMVNldHVwID0gdHJ1ZTtcbiAgICAgICAgICBwbGFjZWRDb29yZGluYXRlcyA9IFtdO1xuICAgICAgICAgIGJvYXJkQnVpbGRlcihcIlBsYXllciAyXCIsIHBsYXllcjIuYm9hcmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdhbWVTdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJvdGF0ZSA9ICgpID0+IHtcbiAgICBsZXQgY3VycmVudERpcmVjdGlvbkluZGV4ID0gdmFsaWRDb29yZGluYXRlcy5maW5kSW5kZXgoXG4gICAgICAoY29vcmQpID0+IGNvb3JkLmRpcmVjdGlvbiA9PT0gY3VycmVudERpcmVjdGlvbi5kaXJlY3Rpb25cbiAgICApO1xuXG4gICAgY3VycmVudERpcmVjdGlvbkluZGV4ID1cbiAgICAgIChjdXJyZW50RGlyZWN0aW9uSW5kZXggKyAxKSAlIHZhbGlkQ29vcmRpbmF0ZXMubGVuZ3RoO1xuICAgIGN1cnJlbnREaXJlY3Rpb24gPSB2YWxpZENvb3JkaW5hdGVzW2N1cnJlbnREaXJlY3Rpb25JbmRleF07XG5cbiAgICBjbGVhckhpZ2hsaWdodCgpO1xuICAgIHBsYWNlQ2VsbHMoY3VycmVudERpcmVjdGlvbi5jb29yZGluYXRlcywgXCJoaWdobGlnaHRcIik7XG4gIH07XG5cbiAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgIGNsZWFySGlnaGxpZ2h0KCk7XG4gICAgbGV0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybVwiKTtcbiAgICBidXR0b25EaXYuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiBzaGlwLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIikpO1xuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUxpc3RlbmVycyA9ICgpID0+IHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZ3JlZW5cIilcbiAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29uZmlybUNsaWNrSGFuZGxlcik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmJsdWVcIilcbiAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcm90YXRlQ2xpY2tIYW5kbGVyKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIucmVkXCIpXG4gICAgICAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbENsaWNrSGFuZGxlcik7XG4gIH07XG5cbiAgY29uc3QgZGlyZWN0aW9ucyA9IChsZW5ndGgpID0+IHtcbiAgICBsZXQgZGlyZWN0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzQ2FsY3VsYXRvcihoZWFkLCBsZW5ndGgsIFwicmlnaHRcIiksXG4gICAgICAgIGRpcmVjdGlvbjogXCJyaWdodFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzQ2FsY3VsYXRvcihoZWFkLCBsZW5ndGgsIFwiZG93blwiKSxcbiAgICAgICAgZGlyZWN0aW9uOiBcImRvd25cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvb3JkaW5hdGVzOiBjb29yZGluYXRlc0NhbGN1bGF0b3IoaGVhZCwgbGVuZ3RoLCBcImxlZnRcIiksXG4gICAgICAgIGRpcmVjdGlvbjogXCJsZWZ0XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb29yZGluYXRlczogY29vcmRpbmF0ZXNDYWxjdWxhdG9yKGhlYWQsIGxlbmd0aCwgXCJ1cFwiKSxcbiAgICAgICAgZGlyZWN0aW9uOiBcInVwXCIsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdCBoYXNPdmVybGFwID0gKGNvb3JkcykgPT4ge1xuICAgICAgcmV0dXJuIGNvb3Jkcy5zb21lKChjb29yZCkgPT5cbiAgICAgICAgcGxhY2VkQ29vcmRpbmF0ZXMuc29tZShcbiAgICAgICAgICAocGxhY2VkKSA9PiBwbGFjZWRbMF0gPT09IGNvb3JkWzBdICYmIHBsYWNlZFsxXSA9PT0gY29vcmRbMV1cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgdmFsaWRDb29yZGluYXRlcyA9IGRpcmVjdGlvbnMuZmlsdGVyKFxuICAgICAgKHZhbHVlKSA9PlxuICAgICAgICB2YWx1ZS5jb29yZGluYXRlcyAhPSB1bmRlZmluZWQgJiYgIWhhc092ZXJsYXAodmFsdWUuY29vcmRpbmF0ZXMpXG4gICAgKTtcblxuICAgIGN1cnJlbnREaXJlY3Rpb24gPSB2YWxpZENvb3JkaW5hdGVzWzBdO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlQ2VsbHMgPSAoY29vcmRpbmF0ZXMsIGNob3NlbkNsYXNzKSA9PiB7XG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLmNlbGxbZGF0YS1sb2NhdGlvbj0nJHtjb29yZGluYXRlWzBdfSR7Y29vcmRpbmF0ZVsxXX0nXWBcbiAgICAgICk7XG4gICAgICBpZiAoY2VsbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoY2hvc2VuQ2xhc3MpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFySGlnaGxpZ2h0ID0gKCkgPT4ge1xuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hsaWdodFwiKSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBlbmFibGUsXG4gICAgY2xlYXJIaWdobGlnaHQsXG4gICAgcGxhY2VDZWxscyxcbiAgICBnZXQgdmFsaWRDb29yZGluYXRlcygpIHtcbiAgICAgIHJldHVybiB2YWxpZENvb3JkaW5hdGVzO1xuICAgIH0sXG4gIH07XG59KSgpO1xuXG5mdW5jdGlvbiBjb25maXJtKGRpdikge1xuICBsZXQgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbmZpcm1cIjtcbiAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZ3JlZW5cIik7XG4gIGRpdi5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKTtcblxuICBsZXQgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcm90YXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJSb3RhdGVcIjtcbiAgcm90YXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJibHVlXCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQocm90YXRlQnV0dG9uKTtcblxuICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBib2FyZEJ1aWxkZXIocGxheWVyLCBib2FyZCwgdHlwZSkge1xuICBsZWZ0LmNsYXNzTGlzdC5yZW1vdmUoXCJib3JkZXJcIik7XG4gIHJpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoXCJib3JkZXJcIik7XG4gIGxlZnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgcmlnaHQuaW5uZXJIVE1MID0gXCJcIjtcblxuICBsZXQgcGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwbGF5ZXJOYW1lLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJOYW1lXCIpO1xuICBwbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gcGxheWVyO1xuICBsZWZ0LmFwcGVuZENoaWxkKHBsYXllck5hbWUpO1xuXG4gIGxldCB5b3VyQm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgc2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaGlwcy5jbGFzc0xpc3QuYWRkKFwic2hpcHNcIik7XG4gIGFwcGVuZFNoaXBzKHNoaXBzKTtcbiAgbGVmdC5hcHBlbmRDaGlsZCh5b3VyQm9hcmREaXYpO1xuICByaWdodC5hcHBlbmRDaGlsZChzaGlwcyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgY2VsbC5kYXRhc2V0LmxvY2F0aW9uID0gYCR7aX0ke2p9YDtcbiAgICAgIHlvdXJCb2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgICAgIHlvdXJCb2FyZERpdi5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gIH1cbiAgbGV0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICBidXR0b25EaXYuaWQgPSBcImNvbmZpcm1cIjtcbiAgY29uZmlybShidXR0b25EaXYpO1xuICBsZWZ0LmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XG4gIGRyYWduRHJvcC5lbmFibGUoYm9hcmQsIHR5cGUpO1xufVxuXG5mdW5jdGlvbiBwbGF5QXJlYShcbiAgcGxheWVyMUJvYXJkLFxuICBwbGF5ZXIyQm9hcmQsXG4gIGN1cnJlbnRQbGF5ZXIgPSBcIlBsYXllciAxXCIsXG4gIG9wcG9uZW50ID0gXCJQbGF5ZXIgMlwiXG4pIHtcbiAgbGVmdC5pbm5lckhUTUwgPSBcIlwiO1xuICByaWdodC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGxldCB5b3VyQm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0LmFwcGVuZENoaWxkKHlvdXJCb2FyZERpdik7XG5cbiAgbGV0IGN1cnJlbnRQbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGN1cnJlbnRQbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gY3VycmVudFBsYXllcjtcbiAgY3VycmVudFBsYXllck5hbWUuY2xhc3NMaXN0LmFkZChcInBsYXllck5hbWVCb3R0b21cIik7XG4gIGxlZnQuYXBwZW5kQ2hpbGQoY3VycmVudFBsYXllck5hbWUpO1xuXG4gIGZvciAobGV0IFtyb3dJbmRleCwgcm93XSBvZiBwbGF5ZXIxQm9hcmQuYm9hcmQuZW50cmllcygpKSB7XG4gICAgZm9yIChsZXQgW2NvbEluZGV4LCBpdGVtXSBvZiByb3cuZW50cmllcygpKSB7XG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjZWxsLmRhdGFzZXQubG9jYXRpb24gPSBgJHtyb3dJbmRleH0ke2NvbEluZGV4fWA7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgaWYgKGl0ZW0ubWlzc2VkID09PSB0cnVlKSB7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIm9cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLnNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicGxhY2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0uaGl0ID09PSB0cnVlKSB7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgfVxuICAgICAgeW91ckJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICAgICAgeW91ckJvYXJkRGl2LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgfVxuXG4gIGxldCBvcHBvbmVudEJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmlnaHQuYXBwZW5kQ2hpbGQob3Bwb25lbnRCb2FyZERpdik7XG5cbiAgbGV0IG9wcG9uZW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBvcHBvbmVudE5hbWUudGV4dENvbnRlbnQgPSBvcHBvbmVudDtcbiAgb3Bwb25lbnROYW1lLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJOYW1lQm90dG9tXCIpO1xuICByaWdodC5hcHBlbmRDaGlsZChvcHBvbmVudE5hbWUpO1xuXG4gIGZvciAobGV0IFtyb3dJbmRleCwgcm93XSBvZiBwbGF5ZXIyQm9hcmQuYm9hcmQuZW50cmllcygpKSB7XG4gICAgZm9yIChsZXQgW2NvbEluZGV4LCBpdGVtXSBvZiByb3cuZW50cmllcygpKSB7XG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjZWxsLmRhdGFzZXQubG9jYXRpb24gPSBgJHtyb3dJbmRleH0ke2NvbEluZGV4fWA7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgaWYgKGl0ZW0ubWlzc2VkID09PSB0cnVlKSB7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIm9cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgIH1cblxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSBlLnRhcmdldC5kYXRhc2V0LmxvY2F0aW9uLnNwbGl0KFwiXCIpLm1hcChOdW1iZXIpO1xuICAgICAgICBwbGF5ZXIyQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyMkJvYXJkLmxvc2UoKSk7XG4gICAgICAgIGlmIChwbGF5ZXIyQm9hcmQubG9zZSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgbGVmdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgIHJpZ2h0LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgICBsZXQgd2luTWVzc2FnZSA9IGAke2N1cnJlbnRQbGF5ZXJ9IGhhcyB3b24hYDtcbiAgICAgICAgICBsZXQgd2lubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgd2lubmVyLnRleHRDb250ZW50ID0gd2luTWVzc2FnZTtcbiAgICAgICAgICB3aW5uZXIuY2xhc3NMaXN0LmFkZChcIndpbm5lclwiKTtcblxuICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG5cbiAgICAgICAgICB0aXRsZS5hZnRlcih3aW5uZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXlBcmVhKHBsYXllcjJCb2FyZCwgcGxheWVyMUJvYXJkLCBvcHBvbmVudCwgY3VycmVudFBsYXllcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBvcHBvbmVudEJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICAgICAgb3Bwb25lbnRCb2FyZERpdi5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcGxheUFyZWFQdmMocGxheWVyMUJvYXJkLCBjb21wdXRlckJvYXJkKSB7XG4gIGxlZnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgcmlnaHQuaW5uZXJIVE1MID0gXCJcIjtcblxuICBsZXQgeW91ckJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVmdC5hcHBlbmRDaGlsZCh5b3VyQm9hcmREaXYpO1xuXG4gIGxldCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBsYXllck5hbWUudGV4dENvbnRlbnQgPSBcIlBsYXllclwiO1xuICBwbGF5ZXJOYW1lLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJOYW1lQm90dG9tXCIpO1xuICBsZWZ0LmFwcGVuZENoaWxkKHBsYXllck5hbWUpO1xuXG4gIGZvciAobGV0IFtyb3dJbmRleCwgcm93XSBvZiBwbGF5ZXIxQm9hcmQuYm9hcmQuZW50cmllcygpKSB7XG4gICAgZm9yIChsZXQgW2NvbEluZGV4LCBpdGVtXSBvZiByb3cuZW50cmllcygpKSB7XG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjZWxsLmRhdGFzZXQubG9jYXRpb24gPSBgJHtyb3dJbmRleH0ke2NvbEluZGV4fWA7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgaWYgKGl0ZW0ubWlzc2VkID09PSB0cnVlKSB7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIm9cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLnNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicGxhY2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0uaGl0ID09PSB0cnVlKSB7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgfVxuICAgICAgeW91ckJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICAgICAgeW91ckJvYXJkRGl2LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgfVxuXG4gIGxldCBjb21wdXRlckJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmlnaHQuYXBwZW5kQ2hpbGQoY29tcHV0ZXJCb2FyZERpdik7XG5cbiAgbGV0IGNvbXB1dGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb21wdXRlck5hbWUudGV4dENvbnRlbnQgPSBcIkNvbXB1dGVyXCI7XG4gIGNvbXB1dGVyTmFtZS5jbGFzc0xpc3QuYWRkKFwicGxheWVyTmFtZUJvdHRvbVwiKTtcbiAgcmlnaHQuYXBwZW5kQ2hpbGQoY29tcHV0ZXJOYW1lKTtcblxuICBmb3IgKGxldCBbcm93SW5kZXgsIHJvd10gb2YgY29tcHV0ZXJCb2FyZC5ib2FyZC5lbnRyaWVzKCkpIHtcbiAgICBmb3IgKGxldCBbY29sSW5kZXgsIGl0ZW1dIG9mIHJvdy5lbnRyaWVzKCkpIHtcbiAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNlbGwuZGF0YXNldC5sb2NhdGlvbiA9IGAke3Jvd0luZGV4fSR7Y29sSW5kZXh9YDtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICBpZiAoaXRlbS5taXNzZWQgPT09IHRydWUpIHtcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IFwib1wiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0uaGl0ID09PSB0cnVlKSB7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgfVxuXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZSA9IGUudGFyZ2V0LmRhdGFzZXQubG9jYXRpb24uc3BsaXQoXCJcIikubWFwKE51bWJlcik7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcbiAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJCb2FyZC5sb3NlKCkpO1xuICAgICAgICBpZiAoY29tcHV0ZXJCb2FyZC5sb3NlKCkgPT09IHRydWUpIHtcbiAgICAgICAgICB3aW5uZXIoXCJQbGF5ZXJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxheWVyMUJvYXJkLnJlY2VpdmVBdHRhY2soZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpKTtcbiAgICAgICAgICBpZiAocGxheWVyMUJvYXJkLmxvc2UoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgd2lubmVyKFwiQ29tcHV0ZXJcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBsYXlBcmVhUHZjKHBsYXllcjFCb2FyZCwgY29tcHV0ZXJCb2FyZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29tcHV0ZXJCb2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgICAgIGNvbXB1dGVyQm9hcmREaXYuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHdpbm5lciA9IChwbGF5ZXIpID0+IHtcbiAgbGVmdC5pbm5lckhUTUwgPSBcIlwiO1xuICByaWdodC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGxldCB3aW5NZXNzYWdlID0gYCR7cGxheWVyfSBoYXMgd29uIWA7XG4gIGxldCB3aW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgd2lubmVyLnRleHRDb250ZW50ID0gd2luTWVzc2FnZTtcbiAgd2lubmVyLmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXJcIik7XG5cbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcblxuICB0aXRsZS5hZnRlcih3aW5uZXIpO1xufTtcblxuZXhwb3J0IHsgaG9tZVBhZ2UsIGJvYXJkQnVpbGRlciwgcGxheUFyZWEsIHBsYXlBcmVhUHZjIH07XG4iLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwLmpzXCI7XG5cbmZ1bmN0aW9uIGNlbGwoKSB7XG4gIGxldCBtaXNzZWQgPSBmYWxzZTtcbiAgbGV0IHNoaXAgPSBmYWxzZTtcbiAgbGV0IGhpdCA9IGZhbHNlO1xuICBsZXQgc2hpcE9iajtcblxuICByZXR1cm4geyBtaXNzZWQsIGhpdCwgc2hpcCwgc2hpcE9iaiB9O1xufVxuXG5mdW5jdGlvbiBjb29yZGluYXRlc0NhbGN1bGF0b3IoaGVhZCwgbGVuZ3RoLCBkaXJlY3Rpb24pIHtcbiAgbGV0IGNvb3JkaW5hdGVzID0gW107XG5cbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgaWYgKGhlYWRbMV0gLSBsZW5ndGggKyAxID49IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW2hlYWRbMF0sIGhlYWRbMV0gLSBpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICBpZiAoaGVhZFsxXSArIGxlbmd0aCAtIDEgPD0gOSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbaGVhZFswXSwgaGVhZFsxXSArIGldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwidXBcIjpcbiAgICAgIGlmIChoZWFkWzBdIC0gbGVuZ3RoICsgMSA+PSAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKFtoZWFkWzBdIC0gaSwgaGVhZFsxXV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICBpZiAoaGVhZFswXSArIGxlbmd0aCAtIDEgPD0gOSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbaGVhZFswXSArIGksIGhlYWRbMV1dKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGNvb3JkaW5hdGVzLmxlbmd0aCA/IGNvb3JkaW5hdGVzIDogdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBnYW1lQm9hcmQoKSB7XG4gIGxldCBib2FyZCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBib2FyZFtpXSA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgbGV0IG5ld0NlbGwgPSBjZWxsKCk7XG4gICAgICBib2FyZFtpXS5wdXNoKG5ld0NlbGwpO1xuICAgIH1cbiAgfVxuICBsZXQgY2FycmllciA9IHNoaXAoNSk7XG4gIGxldCBiYXR0bGVzaGlwID0gc2hpcCg0KTtcbiAgbGV0IGNydWlzZXIgPSBzaGlwKDMpO1xuICBsZXQgc3VibWFyaW5lID0gc2hpcCgzKTtcbiAgbGV0IGRlc3Ryb3llciA9IHNoaXAoMik7XG4gIGxldCBub09mU2hpcHMgPSA1O1xuXG4gIGNvbnN0IHNoaXBQbGFjZXIgPSAoaGVhZCwgc2hpcCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzaGlwUGxhY2VyXCIsIGhlYWQpO1xuICAgIGxldCBjb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzQ2FsY3VsYXRvcihoZWFkLCBzaGlwLmxlbmd0aCwgZGlyZWN0aW9uKTtcblxuICAgIGlmICghY29vcmRpbmF0ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGxhY2VtZW50OiBPdXQgb2YgYm91bmRzLlwiKTtcbiAgICB9XG4gICAgZm9yIChsZXQgY29vcmRpbmF0ZSBvZiBjb29yZGluYXRlcykge1xuICAgICAgaWYgKGJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dLnNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwbGFjZW1lbnQ6IE92ZXJsYXBwaW5nIHNoaXBzLlwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBjb29yZGluYXRlIG9mIGNvb3JkaW5hdGVzKSB7XG4gICAgICBib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXS5zaGlwID0gdHJ1ZTtcbiAgICAgIGJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dLnNoaXBPYmogPSBzaGlwO1xuICAgIH1cblxuICAgIG5vT2ZTaGlwcy0tO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwVHlwZSwgaGVhZCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJwbGFjZVNoaXBcIiwgaGVhZCk7XG4gICAgaWYgKG5vT2ZTaGlwcyA8PSAwKSB7XG4gICAgICByZXR1cm4gXCJvdXQgb2Ygc2hpcHNcIjtcbiAgICB9XG4gICAgc3dpdGNoIChzaGlwVHlwZSkge1xuICAgICAgY2FzZSBcIkNhcnJpZXJcIjpcbiAgICAgICAgc2hpcFBsYWNlcihoZWFkLCBjYXJyaWVyLCBkaXJlY3Rpb24pO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIkJhdHRsZXNoaXBcIjpcbiAgICAgICAgc2hpcFBsYWNlcihoZWFkLCBiYXR0bGVzaGlwLCBkaXJlY3Rpb24pO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIkNydWlzZXJcIjpcbiAgICAgICAgc2hpcFBsYWNlcihoZWFkLCBjcnVpc2VyLCBkaXJlY3Rpb24pO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIlN1Ym1hcmluZVwiOlxuICAgICAgICBzaGlwUGxhY2VyKGhlYWQsIHN1Ym1hcmluZSwgZGlyZWN0aW9uKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJEZXN0cm95ZXJcIjpcbiAgICAgICAgc2hpcFBsYWNlcihoZWFkLCBkZXN0cm95ZXIsIGRpcmVjdGlvbik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIHNoaXAgbmFtZVwiKTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IHN1bmtDb3VudGVyID0gMDtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICBsZXQgY2VsbCA9IGJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dO1xuXG4gICAgaWYgKCFjZWxsLm1pc3NlZCAmJiAhY2VsbC5oaXQpIHtcbiAgICAgIGlmICghY2VsbC5zaGlwKSB7XG4gICAgICAgIGNlbGwubWlzc2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNlbGwuaGl0ID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5zaGlwT2JqLmhpdCgpO1xuICAgICAgICBpZiAoY2VsbC5zaGlwT2JqLnN1bmspIHtcbiAgICAgICAgICBzdW5rQ291bnRlcisrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvc2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHN1bmtDb3VudGVyID49IDU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfSxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBsb3NlLFxuICB9O1xufVxuXG5leHBvcnQgeyBnYW1lQm9hcmQsIGNvb3JkaW5hdGVzQ2FsY3VsYXRvciB9O1xuIiwiaW1wb3J0IHsgcGxheWVyMSwgcGxheWVyMiwgY29tcHV0ZXIsIHBsYWNlQWxsU2hpcHMgfSBmcm9tIFwiLi9wbGF5ZXIuanNcIjtcbmltcG9ydCB7IGJvYXJkQnVpbGRlciwgcGxheUFyZWEsIHBsYXlBcmVhUHZjIH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5cbmZ1bmN0aW9uIGJvYXJkU2V0dXAodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwicHZwXCI6XG4gICAgICBib2FyZEJ1aWxkZXIoXCJQbGF5ZXIgMVwiLCBwbGF5ZXIxLmJvYXJkKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcInB2Y1wiOlxuICAgICAgYm9hcmRCdWlsZGVyKFwiUGxheWVyIDFcIiwgcGxheWVyMS5ib2FyZCwgXCJwdmNcIik7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBnYW1lU3RhcnQoKSB7XG4gIHBsYXlBcmVhKHBsYXllcjEuYm9hcmQsIHBsYXllcjIuYm9hcmQpO1xufVxuXG5mdW5jdGlvbiBnYW1lU3RhcnRQdmMoKSB7XG4gIHBsYWNlQWxsU2hpcHMoKTtcbiAgcGxheUFyZWFQdmMocGxheWVyMS5ib2FyZCwgY29tcHV0ZXIuYm9hcmQpO1xufVxuXG5leHBvcnQgeyBib2FyZFNldHVwLCBnYW1lU3RhcnQsIGdhbWVTdGFydFB2YyB9O1xuIiwiaW1wb3J0IHsgZ2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkLmpzXCI7XG5cbmZ1bmN0aW9uIHBsYXllcih0eXBlKSB7XG4gIGxldCBib2FyZCA9IGdhbWVCb2FyZCgpO1xuICByZXR1cm4geyB0eXBlLCBib2FyZCB9O1xufVxuXG5sZXQgcGxheWVyMSA9IHBsYXllcihcInBsYXllclwiKTtcbmxldCBwbGF5ZXIyID0gcGxheWVyKFwicGxheWVyXCIpO1xubGV0IGNvbXB1dGVyID0gcGxheWVyKFwiY29tcHV0ZXJcIik7XG5cblxuZnVuY3Rpb24gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpIHtcbiAgcmV0dXJuIFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbURpcmVjdGlvbigpIHtcbiAgY29uc3QgZGlyZWN0aW9ucyA9IFtcImxlZnRcIiwgXCJyaWdodFwiLCBcInVwXCIsIFwiZG93blwiXTtcbiAgcmV0dXJuIGRpcmVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGlyZWN0aW9ucy5sZW5ndGgpXTtcbn1cblxuZnVuY3Rpb24gcGxhY2VBbGxTaGlwcyhnYW1lQm9hcmQpIHtcbiAgY29uc3Qgc2hpcHMgPSBbXG4gICAgeyB0eXBlOiBcIkNhcnJpZXJcIiwgbGVuZ3RoOiA1IH0sXG4gICAgeyB0eXBlOiBcIkJhdHRsZXNoaXBcIiwgbGVuZ3RoOiA0IH0sXG4gICAgeyB0eXBlOiBcIkNydWlzZXJcIiwgbGVuZ3RoOiAzIH0sXG4gICAgeyB0eXBlOiBcIlN1Ym1hcmluZVwiLCBsZW5ndGg6IDMgfSxcbiAgICB7IHR5cGU6IFwiRGVzdHJveWVyXCIsIGxlbmd0aDogMiB9LFxuICBdO1xuXG4gIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICB3aGlsZSAoIXBsYWNlZCkge1xuICAgICAgY29uc3QgaGVhZCA9IGdldFJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGdldFJhbmRvbURpcmVjdGlvbigpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29tcHV0ZXIuYm9hcmQucGxhY2VTaGlwKHNoaXAudHlwZSwgaGVhZCwgZGlyZWN0aW9uKTtcbiAgICAgICAgcGxhY2VkID0gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBGYWlsZWQgdG8gcGxhY2UgJHtzaGlwLnR5cGV9LiBUcnlpbmcgYSBuZXcgcG9zaXRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cbmV4cG9ydCB7IHBsYXllcjEsIHBsYXllcjIsIGNvbXB1dGVyLCBwbGFjZUFsbFNoaXBzICxnZXRSYW5kb21Db29yZGluYXRlfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoaXAobGVuZ3RoKSB7XG4gIGxldCBoaXRzID0gMDtcbiAgbGV0IHN1bmsgPSBmYWxzZTtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cysrO1xuICAgIHNldFN1bmsoKTtcbiAgfTtcblxuICBjb25zdCBzZXRTdW5rID0gKCkgPT4ge1xuICAgIGlmIChoaXRzID49IGxlbmd0aCkge1xuICAgICAgc3VuayA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaGl0LFxuICAgIHNldFN1bmssXG4gICAgZ2V0IHN1bmsoKSB7XG4gICAgICByZXR1cm4gc3VuaztcbiAgICB9LFxuICAgIGdldCBsZW5ndGgoKXtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tIFwiLi9kb20uanNcIjtcblxuaG9tZVBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==