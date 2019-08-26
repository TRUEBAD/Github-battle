(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./app/components/Card.js":
/*!********************************!*\
  !*** ./app/components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Card; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/theme */ \"./app/contexts/theme.js\");\n\n\n\nfunction Card(_ref) {\n  var header = _ref.header,\n      subheader = _ref.subheader,\n      avatar = _ref.avatar,\n      href = _ref.href,\n      name = _ref.name,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_theme__WEBPACK_IMPORTED_MODULE_2__[\"ThemeConsumer\"], null, function (_ref2) {\n    var theme = _ref2.theme;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card bg-\".concat(theme)\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n      className: \"header-lg center-text\"\n    }, header), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      className: \"avatar\",\n      src: avatar,\n      alt: \"Avatar for \".concat(name)\n    }), subheader && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n      className: \"center-text\"\n    }, subheader), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n      className: \"center-text\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      className: \"link\",\n      href: href\n    }, name)), children);\n  });\n}\nCard.propTypes = {\n  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  subheader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  avatar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n\n//# sourceURL=webpack:///./app/components/Card.js?");

/***/ }),

/***/ "./app/components/Hover.js":
/*!*********************************!*\
  !*** ./app/components/Hover.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hover; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Hover =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Hover, _React$Component);\n\n  function Hover() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Hover);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Hover)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      hovering: false\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"mouseOver\", function () {\n      return _this.setState({\n        hovering: true\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"mouseOut\", function () {\n      return _this.setState({\n        hovering: false\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(Hover, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onMouseOver: this.mouseOver,\n        onMouseOut: this.mouseOut\n      }, this.props.children(this.state.hovering));\n    }\n  }]);\n\n  return Hover;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./app/components/Hover.js?");

/***/ }),

/***/ "./app/components/Results.js":
/*!***********************************!*\
  !*** ./app/components/Results.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Results; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/api */ \"./app/utils/api.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ \"./app/components/Card.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loading */ \"./app/components/Loading.js\");\n/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tooltip */ \"./app/components/Tooltip.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\nfunction ProfileList(_ref) {\n  var profile = _ref.profile;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"card-list\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaUser\"], {\n    color: \"rgb(239,115,115)\",\n    size: 22\n  }), profile.name), profile.location && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    text: \"User's location\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaCompass\"], {\n    color: \"rgb(144,115,255)\",\n    size: 22\n  }), profile.location)), profile.company && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    text: \"User's company\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaBriefcase\"], {\n    color: \"#795548\",\n    size: 22\n  }), profile.company)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaUsers\"], {\n    color: \"rgb(129,195,245)\",\n    size: 22\n  }), profile.followers.toLocaleString(), \" followers\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaUserFriends\"], {\n    color: \"rgb(64,183,95)\",\n    size: 22\n  }), profile.following.toLocaleString(), \" following\"));\n}\n\nProfileList.propTypes = {\n  profile: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired\n};\n\nvar Results =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Results, _React$Component);\n\n  function Results() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Results);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Results)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      winner: null,\n      loser: null,\n      error: null,\n      loading: true\n    });\n\n    return _this;\n  }\n\n  _createClass(Results, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var _queryString$parse = query_string__WEBPACK_IMPORTED_MODULE_7___default.a.parse(this.props.location.search),\n          playerOne = _queryString$parse.playerOne,\n          playerTwo = _queryString$parse.playerTwo;\n\n      Object(_utils_api__WEBPACK_IMPORTED_MODULE_1__[\"battle\"])([playerOne, playerTwo]).then(function (players) {\n        _this2.setState({\n          winner: players[0],\n          loser: players[1],\n          error: null,\n          loading: false\n        });\n      })[\"catch\"](function (_ref2) {\n        var message = _ref2.message;\n\n        _this2.setState({\n          error: message,\n          loading: false\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          winner = _this$state.winner,\n          loser = _this$state.loser,\n          error = _this$state.error,\n          loading = _this$state.loading;\n\n      if (loading === true) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          text: \"Battling\"\n        });\n      }\n\n      if (error) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n          className: \"center-text error\"\n        }, error);\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"grid space-around container-sm\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        header: winner.score === loser.score ? 'Tie' : 'Winner',\n        subheader: \"Score: \".concat(winner.score.toLocaleString()),\n        avatar: winner.profile.avatar_url,\n        href: winner.profile.html_url,\n        name: winner.profile.login\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProfileList, {\n        profile: winner.profile\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        header: winner.score === loser.score ? 'Tie' : 'Loser',\n        subheader: \"Score: \".concat(loser.score.toLocaleString()),\n        avatar: loser.profile.avatar_url,\n        name: loser.profile.login,\n        href: loser.profile.html_url\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProfileList, {\n        profile: loser.profile\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Link\"], {\n        to: \"/battle\",\n        className: \"btn dark-btn btn-space\"\n      }, \"Reset\"));\n    }\n  }]);\n\n  return Results;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./app/components/Results.js?");

/***/ }),

/***/ "./app/components/Tooltip.js":
/*!***********************************!*\
  !*** ./app/components/Tooltip.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tooltip; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Hover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hover */ \"./app/components/Hover.js\");\n\n\n\nvar styles = {\n  container: {\n    position: 'relative',\n    display: 'flex'\n  },\n  tooltip: {\n    boxSizing: 'border-box',\n    position: 'absolute',\n    width: '160px',\n    bottom: '100%',\n    left: '50%',\n    marginLeft: '-80px',\n    borderRadius: '3px',\n    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',\n    padding: '7px',\n    marginBottom: '5px',\n    color: '#fff',\n    textAlign: 'center',\n    fontSize: '14px'\n  }\n};\nfunction Tooltip(_ref) {\n  var text = _ref.text,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hover__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, function (hovering) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: styles.container\n    }, hovering === true && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: styles.tooltip\n    }, text), children);\n  });\n}\nTooltip.propTypes = {\n  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n\n//# sourceURL=webpack:///./app/components/Tooltip.js?");

/***/ }),

/***/ "./app/utils/api.js":
/*!**************************!*\
  !*** ./app/utils/api.js ***!
  \**************************/
/*! exports provided: battle, fetchPopularRepos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"battle\", function() { return battle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPopularRepos\", function() { return fetchPopularRepos; });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction getErrorMsg(message, username) {\n  if (message === 'Not Found') {\n    return \"\".concat(username, \" doesn't exist\");\n  }\n\n  return message;\n}\n\nfunction getProfile(username) {\n  return fetch(\"https://api.github.com/users/\".concat(username)).then(function (res) {\n    return res.json();\n  }).then(function (profile) {\n    if (profile.message) {\n      throw new Error(getErrorMsg(profile.message, username));\n    }\n\n    return profile;\n  });\n}\n\nfunction getRepos(username) {\n  return fetch(\"https://api.github.com/users/\".concat(username, \"/repos\")).then(function (res) {\n    return res.json();\n  }).then(function (repos) {\n    if (repos.message) {\n      throw new Error(getErrorMsg(repos.message, username));\n    }\n\n    return repos;\n  });\n}\n\nfunction getStarCount(repos) {\n  return repos.reduce(function (count, _ref) {\n    var stargazers_count = _ref.stargazers_count;\n    return count + stargazers_count;\n  }, 0);\n}\n\nfunction calculateScore(followers, repos) {\n  return followers * 3 + getStarCount(repos);\n}\n\nfunction getUserData(player) {\n  return Promise.all([getProfile(player), getRepos(player)]).then(function (_ref2) {\n    var _ref3 = _slicedToArray(_ref2, 2),\n        profile = _ref3[0],\n        repos = _ref3[1];\n\n    return {\n      profile: profile,\n      score: calculateScore(profile.followers, repos)\n    };\n  });\n}\n\nfunction sortPlayers(players) {\n  return players.sort(function (a, b) {\n    return b.score - a.score;\n  });\n}\n\nfunction battle(players) {\n  return Promise.all([getUserData(players[0]), getUserData(players[1])]).then(function (results) {\n    return sortPlayers(results);\n  });\n}\nfunction fetchPopularRepos(language) {\n  var endpoint = window.encodeURI(\"https://api.github.com/search/repositories?q=stars:>1+language:\".concat(language, \"&sort=stars&order=desc&type=Repositories\"));\n  return fetch(endpoint).then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    if (!data.items) {\n      throw new Error(data.message);\n    }\n\n    return data.items;\n  });\n}\n\n//# sourceURL=webpack:///./app/utils/api.js?");

/***/ }),

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar token = '%[a-f0-9]{2}';\nvar singleMatcher = new RegExp(token, 'gi');\nvar multiMatcher = new RegExp('(' + token + ')+', 'gi');\n\nfunction decodeComponents(components, split) {\n  try {\n    // Try to decode the entire string first\n    return decodeURIComponent(components.join(''));\n  } catch (err) {// Do nothing\n  }\n\n  if (components.length === 1) {\n    return components;\n  }\n\n  split = split || 1; // Split the array in 2 parts\n\n  var left = components.slice(0, split);\n  var right = components.slice(split);\n  return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));\n}\n\nfunction decode(input) {\n  try {\n    return decodeURIComponent(input);\n  } catch (err) {\n    var tokens = input.match(singleMatcher);\n\n    for (var i = 1; i < tokens.length; i++) {\n      input = decodeComponents(tokens, i).join('');\n      tokens = input.match(singleMatcher);\n    }\n\n    return input;\n  }\n}\n\nfunction customDecodeURIComponent(input) {\n  // Keep track of all the replacements and prefill the map with the `BOM`\n  var replaceMap = {\n    '%FE%FF': '\\uFFFD\\uFFFD',\n    '%FF%FE': '\\uFFFD\\uFFFD'\n  };\n  var match = multiMatcher.exec(input);\n\n  while (match) {\n    try {\n      // Decode as big chunks as possible\n      replaceMap[match[0]] = decodeURIComponent(match[0]);\n    } catch (err) {\n      var result = decode(match[0]);\n\n      if (result !== match[0]) {\n        replaceMap[match[0]] = result;\n      }\n    }\n\n    match = multiMatcher.exec(input);\n  } // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else\n\n\n  replaceMap['%C2'] = '\\uFFFD';\n  var entries = Object.keys(replaceMap);\n\n  for (var i = 0; i < entries.length; i++) {\n    // Replace all decoded components\n    var key = entries[i];\n    input = input.replace(new RegExp(key, 'g'), replaceMap[key]);\n  }\n\n  return input;\n}\n\nmodule.exports = function (encodedURI) {\n  if (typeof encodedURI !== 'string') {\n    throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');\n  }\n\n  try {\n    encodedURI = encodedURI.replace(/\\+/g, ' '); // Try the built in decoder first\n\n    return decodeURIComponent(encodedURI);\n  } catch (err) {\n    // Fallback to a more advanced decoder\n    return customDecodeURIComponent(encodedURI);\n  }\n};\n\n//# sourceURL=webpack:///./node_modules/decode-uri-component/index.js?");

/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst strictUriEncode = __webpack_require__(/*! strict-uri-encode */ \"./node_modules/strict-uri-encode/index.js\");\n\nconst decodeComponent = __webpack_require__(/*! decode-uri-component */ \"./node_modules/decode-uri-component/index.js\");\n\nconst splitOnFirst = __webpack_require__(/*! split-on-first */ \"./node_modules/split-on-first/index.js\");\n\nfunction encoderForArrayFormat(options) {\n  switch (options.arrayFormat) {\n    case 'index':\n      return key => (result, value) => {\n        const index = result.length;\n\n        if (value === undefined) {\n          return result;\n        }\n\n        if (value === null) {\n          return [...result, [encode(key, options), '[', index, ']'].join('')];\n        }\n\n        return [...result, [encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')];\n      };\n\n    case 'bracket':\n      return key => (result, value) => {\n        if (value === undefined) {\n          return result;\n        }\n\n        if (value === null) {\n          return [...result, [encode(key, options), '[]'].join('')];\n        }\n\n        return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];\n      };\n\n    case 'comma':\n      return key => (result, value, index) => {\n        if (value === null || value === undefined || value.length === 0) {\n          return result;\n        }\n\n        if (index === 0) {\n          return [[encode(key, options), '=', encode(value, options)].join('')];\n        }\n\n        return [[result, encode(value, options)].join(',')];\n      };\n\n    default:\n      return key => (result, value) => {\n        if (value === undefined) {\n          return result;\n        }\n\n        if (value === null) {\n          return [...result, encode(key, options)];\n        }\n\n        return [...result, [encode(key, options), '=', encode(value, options)].join('')];\n      };\n  }\n}\n\nfunction parserForArrayFormat(options) {\n  let result;\n\n  switch (options.arrayFormat) {\n    case 'index':\n      return (key, value, accumulator) => {\n        result = /\\[(\\d*)\\]$/.exec(key);\n        key = key.replace(/\\[\\d*\\]$/, '');\n\n        if (!result) {\n          accumulator[key] = value;\n          return;\n        }\n\n        if (accumulator[key] === undefined) {\n          accumulator[key] = {};\n        }\n\n        accumulator[key][result[1]] = value;\n      };\n\n    case 'bracket':\n      return (key, value, accumulator) => {\n        result = /(\\[\\])$/.exec(key);\n        key = key.replace(/\\[\\]$/, '');\n\n        if (!result) {\n          accumulator[key] = value;\n          return;\n        }\n\n        if (accumulator[key] === undefined) {\n          accumulator[key] = [value];\n          return;\n        }\n\n        accumulator[key] = [].concat(accumulator[key], value);\n      };\n\n    case 'comma':\n      return (key, value, accumulator) => {\n        const isArray = typeof value === 'string' && value.split('').indexOf(',') > -1;\n        const newValue = isArray ? value.split(',') : value;\n        accumulator[key] = newValue;\n      };\n\n    default:\n      return (key, value, accumulator) => {\n        if (accumulator[key] === undefined) {\n          accumulator[key] = value;\n          return;\n        }\n\n        accumulator[key] = [].concat(accumulator[key], value);\n      };\n  }\n}\n\nfunction encode(value, options) {\n  if (options.encode) {\n    return options.strict ? strictUriEncode(value) : encodeURIComponent(value);\n  }\n\n  return value;\n}\n\nfunction decode(value, options) {\n  if (options.decode) {\n    return decodeComponent(value);\n  }\n\n  return value;\n}\n\nfunction keysSorter(input) {\n  if (Array.isArray(input)) {\n    return input.sort();\n  }\n\n  if (typeof input === 'object') {\n    return keysSorter(Object.keys(input)).sort((a, b) => Number(a) - Number(b)).map(key => input[key]);\n  }\n\n  return input;\n}\n\nfunction removeHash(input) {\n  const hashStart = input.indexOf('#');\n\n  if (hashStart !== -1) {\n    input = input.slice(0, hashStart);\n  }\n\n  return input;\n}\n\nfunction extract(input) {\n  input = removeHash(input);\n  const queryStart = input.indexOf('?');\n\n  if (queryStart === -1) {\n    return '';\n  }\n\n  return input.slice(queryStart + 1);\n}\n\nfunction parse(input, options) {\n  options = Object.assign({\n    decode: true,\n    sort: true,\n    arrayFormat: 'none',\n    parseNumbers: false,\n    parseBooleans: false\n  }, options);\n  const formatter = parserForArrayFormat(options); // Create an object with no prototype\n\n  const ret = Object.create(null);\n\n  if (typeof input !== 'string') {\n    return ret;\n  }\n\n  input = input.trim().replace(/^[?#&]/, '');\n\n  if (!input) {\n    return ret;\n  }\n\n  for (const param of input.split('&')) {\n    let [key, value] = splitOnFirst(param.replace(/\\+/g, ' '), '='); // Missing `=` should be `null`:\n    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters\n\n    value = value === undefined ? null : decode(value, options);\n\n    if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {\n      value = Number(value);\n    } else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {\n      value = value.toLowerCase() === 'true';\n    }\n\n    formatter(decode(key, options), value, ret);\n  }\n\n  if (options.sort === false) {\n    return ret;\n  }\n\n  return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {\n    const value = ret[key];\n\n    if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {\n      // Sort object keys, not values\n      result[key] = keysSorter(value);\n    } else {\n      result[key] = value;\n    }\n\n    return result;\n  }, Object.create(null));\n}\n\nexports.extract = extract;\nexports.parse = parse;\n\nexports.stringify = (object, options) => {\n  if (!object) {\n    return '';\n  }\n\n  options = Object.assign({\n    encode: true,\n    strict: true,\n    arrayFormat: 'none'\n  }, options);\n  const formatter = encoderForArrayFormat(options);\n  const keys = Object.keys(object);\n\n  if (options.sort !== false) {\n    keys.sort(options.sort);\n  }\n\n  return keys.map(key => {\n    const value = object[key];\n\n    if (value === undefined) {\n      return '';\n    }\n\n    if (value === null) {\n      return encode(key, options);\n    }\n\n    if (Array.isArray(value)) {\n      return value.reduce(formatter(key), []).join('&');\n    }\n\n    return encode(key, options) + '=' + encode(value, options);\n  }).filter(x => x.length > 0).join('&');\n};\n\nexports.parseUrl = (input, options) => {\n  return {\n    url: removeHash(input).split('?')[0] || '',\n    query: parse(extract(input), options)\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/query-string/index.js?");

/***/ }),

/***/ "./node_modules/split-on-first/index.js":
/*!**********************************************!*\
  !*** ./node_modules/split-on-first/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = (string, separator) => {\n  if (!(typeof string === 'string' && typeof separator === 'string')) {\n    throw new TypeError('Expected the arguments to be of type `string`');\n  }\n\n  if (separator === '') {\n    return [string];\n  }\n\n  const separatorIndex = string.indexOf(separator);\n\n  if (separatorIndex === -1) {\n    return [string];\n  }\n\n  return [string.slice(0, separatorIndex), string.slice(separatorIndex + separator.length)];\n};\n\n//# sourceURL=webpack:///./node_modules/split-on-first/index.js?");

/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);\n\n//# sourceURL=webpack:///./node_modules/strict-uri-encode/index.js?");

/***/ })

}]);