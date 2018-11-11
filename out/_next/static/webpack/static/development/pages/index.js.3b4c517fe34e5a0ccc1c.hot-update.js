webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/room/MoreRooms.js":
/*!**************************************!*\
  !*** ./components/room/MoreRooms.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/razwan/Documents/Workspace/WestSands2/components/room/MoreRooms.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var roomsDesc = [{
  id: 1,
  title: "Suites & Premium Suites",
  description: "Our favorite suites, with balconies, garden and sea view",
  photoUrl: "/static/images/lightbox-2.jpeg"
}, {
  id: 2,
  title: "Apartments & Family Suites",
  description: "Our favorite suites, with balconies, garden and sea view",
  photoUrl: "/static/images/lightbox-2.jpeg"
}, {
  id: 3,
  title: "Standard Deluxe Rooms",
  description: "Our favorite suites, with balconies, garden and sea view",
  photoUrl: "/static/images/lightbox-2.jpeg"
}, {
  id: 4,
  title: "Grand Jacuzzi Suite",
  description: "Our favorite suites, with balconies, garden and sea view",
  photoUrl: "/static/images/lightbox-2.jpeg"
}];
var carouselSettings = {
  arrows: true,
  dots: true,
  infinite: false,
  slidesToScroll: 1,
  slidesToShow: 3
};

var MoreRooms = function MoreRooms() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section-more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "header-2 header-2--section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "More rooms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "more-rooms more-rooms--desktop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, carouselSettings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), roomsDesc.map(function (roomDesc) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: roomDesc.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: roomDesc.photoUrl,
      alt: roomDesc.title,
      className: "more-rooms__img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "more-rooms__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, roomDesc.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, roomDesc.description));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MoreRooms);

/***/ })

})
//# sourceMappingURL=index.js.3b4c517fe34e5a0ccc1c.hot-update.js.map