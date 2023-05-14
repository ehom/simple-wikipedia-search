"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PageView = /*#__PURE__*/function (_React$Component) {
  _inherits(PageView, _React$Component);
  var _super = _createSuper(PageView);
  function PageView(_ref) {
    var _this;
    var dataModel = _ref.dataModel,
      onSearchRequest = _ref.onSearchRequest;
    _classCallCheck(this, PageView);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "isEnterKey", function (e) {
      return e.keyCode === keyCodes.ENTER;
    });
    _defineProperty(_assertThisInitialized(_this), "handleEnterKey", function (e) {
      console.debug("onKeyDown:", e);
      var searchInput = document.getElementById("searchinput");
      if (_this.isEnterKey(e)) {
        console.debug("Enter Key:", e);
        console.debug("value:", _this.state.searchText);
        _this.clearSearchInputField();
        console.debug("clear results view");
        _this.onSearchRequest(_this.state.searchText);
        _this.setState({
          searchText: ""
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleChangeInSearchInput", function (e) {
      console.debug("handleChangeInSearchInput:", e);
      _this.setState({
        searchText: e.target.value
      });
    });
    _this.state = {
      searchText: "",
      pages: dataModel
    };
    _this.onSearchRequest = onSearchRequest;
    return _this;
  }

  /*
  handleButtonClick = () => {
    console.debug("handleClick");
    this.onRandomPage();
  };
  */
  _createClass(PageView, [{
    key: "clearSearchInputField",
    value: function clearSearchInputField() {
      var searchInput = document.getElementById("searchinput");
      searchInput.blur();
    }
  }, {
    key: "render",
    value: function render() {
      console.debug("app view ... render pages", this.state.pages);
      return /*#__PURE__*/React.createElement("div", {
        className: "container mt-5 mb-5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-center mb-4"
      }, /*#__PURE__*/React.createElement("h2", {
        className: "text-white"
      }, "Simple Wikipedia Search"), /*#__PURE__*/React.createElement("p", {
        className: "text-white"
      }, "cLicK ", /*#__PURE__*/React.createElement("a", {
        href: "https://en.wikipedia.org/wiki/Special:Random",
        target: "_blank"
      }, "hErE"), " foR a RaNdOm pAgE \uD83D\uDE2E"), /*#__PURE__*/React.createElement(RandomPageButton, {
        label: "RaNdOm pAgE",
        onClick: this.props.onRandomPage
      })), /*#__PURE__*/React.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/React.createElement("input", {
        className: "form-control",
        id: "searchinput",
        type: "search",
        autoComplete: "on",
        value: this.state.searchText,
        placeholder: "I'm looking for ...",
        onKeyDown: this.handleEnterKey,
        onChange: this.handleChangeInSearchInput
      })), /*#__PURE__*/React.createElement("div", {
        id: "message",
        className: "mb-4 text-white"
      }), /*#__PURE__*/React.createElement("div", {
        id: "results"
      }, /*#__PURE__*/React.createElement(Summary, {
        pages: this.props.dataModel
      })));
    }
  }]);
  return PageView;
}(React.Component);