/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var App;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! ./user/user */ \"./src/user/user.js\"),\n    User = _require.User;\n\nmodule.exports = {\n  run: function run(elementId) {\n    var elm = document.getElementById(elementId);\n    var user = new User();\n    user.loadUser(1).then(function (result) {\n      elm.innerHTML = \"User is \".concat(user.id);\n    });\n  }\n};\n\n//# sourceURL=webpack://App/./src/index.js?");

/***/ }),

/***/ "./src/user/post.js":
/*!**************************!*\
  !*** ./src/user/post.js ***!
  \**************************/
/***/ (() => {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n// hardcoded user id \nfunction fetchPost() {\n  return _fetchPost.apply(this, arguments);\n}\n\nfunction _fetchPost() {\n  _fetchPost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var res;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch(\"https://jsonplaceholder.typicode.com/users/2/posts\");\n\n          case 3:\n            res = _context.sent;\n\n            if (res.ok) {\n              _context.next = 6;\n              break;\n            }\n\n            throw new Error(\"Failed to fetch posts: \".concat(res.status));\n\n          case 6:\n            _context.next = 8;\n            return res.json();\n\n          case 8:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 11]]);\n  }));\n  return _fetchPost.apply(this, arguments);\n}\n\nfunction listPosts(postContainerElementId) {\n  // map through user's posts and call postElement for each element\n  var postContainerElement = document.getElementById(postContainerElementId);\n  fetchPost().then(function (posts) {\n    if (!posts) {\n      postContainerElement.innerHTML = 'No posts from this user';\n      return;\n    }\n\n    posts.map(function (post) {\n      return postContainerElement.appendChild(postElement(post));\n    });\n  })[\"catch\"](function (e) {\n    console.log(e);\n  });\n}\n\nfunction postElement(post) {\n  // for each post, create html element\n  var liElement = document.createElement('li');\n  liElement.innerHTML = post.title;\n  var postTitleElement = document.createElement('h4');\n  postTitleElement.appendChild(liElement);\n  return postTitleElement;\n}\n\n//# sourceURL=webpack://App/./src/user/post.js?");

/***/ }),

/***/ "./src/user/user.js":
/*!**************************!*\
  !*** ./src/user/user.js ***!
  \**************************/
/***/ ((module) => {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nmodule.exports.User = /*#__PURE__*/function () {\n  function User() {\n    _classCallCheck(this, User);\n\n    _defineProperty(this, \"id\", void 0);\n\n    _defineProperty(this, \"name\", void 0);\n\n    _defineProperty(this, \"email\", void 0);\n  }\n\n  _createClass(User, [{\n    key: \"loadUser\",\n    value: function loadUser(id) {\n      var _this = this;\n\n      return fetch(\"https://jsonplaceholder.typicode.com/users/\".concat(id)).then(function (result) {\n        return result.json();\n      }).then(function (result) {\n        _this.id = result.id;\n        _this.name = result.name;\n        _this.email = result.email;\n        return {\n          id: _this.id,\n          name: _this.name,\n          email: _this.email\n        };\n      })[\"catch\"](function (err) {\n        throw err;\n      });\n    }\n  }]);\n\n  return User;\n}();\n\nfunction loadUsers(_x) {\n  return _loadUsers.apply(this, arguments);\n}\n\nfunction _loadUsers() {\n  _loadUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userId) {\n    var response;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch(\"https://jsonplaceholder.typicode.com/users/\".concat(userId));\n\n          case 3:\n            response = _context.sent;\n\n            if (response.ok) {\n              _context.next = 6;\n              break;\n            }\n\n            throw new Error(\"Failed to fetch user detail: \".concat(response.status));\n\n          case 6:\n            _context.next = 8;\n            return response.json();\n\n          case 8:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 11]]);\n  }));\n  return _loadUsers.apply(this, arguments);\n}\n\nfunction getUserById(elmId, userId) {\n  //map users details\n  var userContainerElement = document.getElementById(elmId);\n  loadUsers(userId).then(function (user) {\n    if (!user) {\n      userContainerElement.innerHTML = \"No user with this ID\";\n      return;\n    }\n\n    userContainerElement.appendChild(userElement(user));\n  })[\"catch\"](function (e) {\n    console.log(e);\n  });\n}\n\nfunction userElement(user) {\n  var userElm = document.createElement('p');\n  userElm.innerHTML = user.name;\n  return userElm;\n}\n\n//# sourceURL=webpack://App/./src/user/user.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/user/post.js");
/******/ 	App = __webpack_exports__;
/******/ 	
/******/ })()
;