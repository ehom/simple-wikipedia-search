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
// Unicode Emojis

var Emojis = {
  RED_QUESTION_MARK: "\u2753",
  REPEATABLE: "\uD83D\uDD04",
  MAGNIFYING_GLASS: "\uD83D\uDD0D"
};
var fisherYates = function fisherYates(array) {
  var swapElementsAt = function swapElementsAt(i, j) {
    var k = array[i];
    array[i] = array[j];
    array[j] = k;
  };
  for (var i = array.length - 1; i > 0; i--) {
    var j = getRandomNumber(i);
    swapElementsAt(i, j);
  }
  return array;
};
var getRandomNumber = function getRandomNumber(maximum) {
  return Math.floor(Math.random() * maximum);
};
var shuffle = function shuffle(array) {
  var shuffleImplementation = fisherYates;
  shuffleImplementation(array);
  return array;
};
var PageView = /*#__PURE__*/function (_React$Component) {
  _inherits(PageView, _React$Component);
  var _super = _createSuper(PageView);
  function PageView(props) {
    var _this;
    _classCallCheck(this, PageView);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "scrambleTopics", function () {
      shuffle(_this.props.topics);
      var currentTopics = _this.props.topics.slice(0, 10);
      _this.setState({
        topics: currentTopics
      });
    });
    _defineProperty(_assertThisInitialized(_this), "clearSearchInputField", function () {
      var searchInput = document.getElementById("searchinput");
      searchInput.blur();
    });
    _defineProperty(_assertThisInitialized(_this), "handleChangeInSearchInput", function (e) {
      console.debug("handleChangeInSearchInput:", e);
      _this.setState({
        searchText: e.target.value
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleTopicButtons", function (e) {
      console.debug("topic button:", e.target.name);
      var topic = e.target.name;
      _this.props.onSearchRequest(topic);
      _this.setState({
        searchText: ""
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleRefreshTopics", function (e) {
      _this.scrambleTopics();
    });
    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      // Prevent default form submission behavior
      e.preventDefault();
      var searchText = _this.state.searchText;
      var onSearchRequest = _this.props.onSearchRequest;
      console.debug("handleSubmit: ", e);
      console.debug("submitting search text:", searchText);
      searchText.length && onSearchRequest(searchText);
      _this.setState({
        searchText: ""
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      // Prevent default form submission behavior
      e.preventDefault();
      var searchText = _this.state.searchText;
      var onSearchRequest = _this.props.onSearchRequest;
      console.debug("handleSubmit: ", e);
      console.debug("submitting search text:", searchText);
      searchText.length && onSearchRequest(searchText);
      _this.setState({
        searchText: ""
      });
    });
    var dataModel = props.dataModel,
      topics = props.topics,
      _onSearchRequest = props.onSearchRequest,
      onRandomPage = props.onRandomPage;
    _this.state = {
      searchText: "",
      topics: []
    };
    return _this;
  }
  _createClass(PageView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.debug("componentDidMount();");
      this.scrambleTopics();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        dataModel = _this$props.dataModel,
        onRandomPage = _this$props.onRandomPage;
      var searchText = this.state.searchText;
      console.debug("app view ... render pages", dataModel);
      var buttons = this.state.topics.map(function (topic, index) {
        return /*#__PURE__*/React.createElement(TopicButton, {
          key: index,
          name: topic,
          onClick: _this2.handleTopicButtons
        });
      });
      return /*#__PURE__*/React.createElement("div", {
        className: "container mt-5 mb-5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-center mb-4"
      }, /*#__PURE__*/React.createElement("h2", {
        className: "header-text-color"
      }, "Simple Wikipedia Search ".concat(Emojis.MAGNIFYING_GLASS))), /*#__PURE__*/React.createElement(SearchInputForm, {
        searchText: searchText,
        onSubmit: this.handleSubmit,
        onChange: this.handleChangeInSearchInput
      }), /*#__PURE__*/React.createElement("div", {
        id: "message",
        className: "mb-4 text-white"
      }, /*#__PURE__*/React.createElement(TopicButton, {
        name: Emojis.REPEATABLE,
        onClick: this.handleRefreshTopics
      }), buttons, /*#__PURE__*/React.createElement(TopicButton, {
        name: Emojis.RED_QUESTION_MARK,
        onClick: onRandomPage
      })), /*#__PURE__*/React.createElement("div", {
        id: "results"
      }, /*#__PURE__*/React.createElement(Summary, {
        pages: this.props.dataModel
      })));
    }
  }]);
  return PageView;
}(React.Component);
_defineProperty(PageView, "defaultProps", {
  dataModel: [],
  topics: [],
  onSearchRequest: function onSearchRequest() {},
  onRandomPage: function onRandomPage() {}
});
;