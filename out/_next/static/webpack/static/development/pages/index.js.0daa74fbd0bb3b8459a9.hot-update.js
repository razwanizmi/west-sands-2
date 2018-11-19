webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/shared/QuoteForm.js":
/*!****************************************!*\
  !*** ./components/shared/QuoteForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/es/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
var _jsxFileName = "/Users/razwan/Documents/Workspace/WestSands2/components/shared/QuoteForm.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var options = [{
  value: 1,
  label: "1 guest"
}, {
  value: 2,
  label: "2 guests"
}, {
  value: 3,
  label: "3 guests"
}, {
  value: 4,
  label: "4 guests"
}, {
  value: 5,
  label: "5 guests"
}, {
  value: 6,
  label: "6 guests"
}, {
  value: 7,
  label: "7 guests"
}, {
  value: 8,
  label: "8 guests"
}, {
  value: 9,
  label: "9 guests"
}, {
  value: 10,
  label: "10 guests"
}, {
  value: 11,
  label: "11 guests"
}, {
  value: 12,
  label: "12 guests"
}, {
  value: 13,
  label: "13 guests"
}, {
  value: 14,
  label: "14 guests"
}, {
  value: 15,
  label: "15 guests"
}, {
  value: 16,
  label: "16 guests"
}];

var QuoteForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(QuoteForm, _React$Component);

  function QuoteForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, QuoteForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(QuoteForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      startDate: new Date(),
      endDate: new Date(),
      guests: {
        value: 1,
        label: "1 guest"
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEndDateChange", function (endDate) {
      _this.setState(function () {
        return {
          endDate: endDate
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleGuestsSelect", function (guests) {
      _this.setState(function () {
        return {
          guests: guests
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleStartDateChange", function (startDate) {
      _this.setState(function () {
        return {
          startDate: startDate
        };
      });
    });

    return _this;
  }

  _createClass(QuoteForm, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          startDate = _this$state.startDate,
          endDate = _this$state.endDate,
          guests = _this$state.guests;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "side-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "side-form__header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Get a quote"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "side-form__group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "side-form__label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Dates"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "side-form__dates",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, typeof window !== "undefined" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
        selected: startDate,
        onChange: this.handleStartDateChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-arrow-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), typeof window !== "undefined" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
        selected: endDate,
        onChange: this.handleEndDateChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "side-form__group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "side-form__label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Guests"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: guests,
        onChange: this.handleGuestsSelect,
        options: options,
        placeholder: "Guests",
        clearable: false,
        searchable: false,
        className: "side-form__select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })));
    }
  }]);

  return QuoteForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (QuoteForm);

/***/ })

})
//# sourceMappingURL=index.js.0daa74fbd0bb3b8459a9.hot-update.js.map