"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var topics = ["Fermi Paradox", "Byzantine Empire", "Cognitive Bias", "Ancient Egypt", "Game Theory", "Linguistics", "Dark Matter", "Renaissance", "Evolutionary Psychology", "World War II", "Artificial Intelligence", "Climate Change", "Psychology", "Cryptography", "Human migration", "Great Emu War", "Temporal paradoxes", "Stonehenge", "Cleopatra", "Kowloon Walled City"];
var App = function App() {
  var model = new AppModel();
  var _React$useState = React.useState({}),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    pages = _React$useState2[0],
    setPages = _React$useState2[1];
  console.debug("App render, state:", pages);
  React.useEffect(function () {
    console.log("Component mounted");
    return function () {
      console.log("Component unmounted");
    };
  }, []);
  React.useEffect(function () {
    console.debug("pages updated");
  }, [pages]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageView, {
    dataModel: pages,
    topics: topics,
    onSearchRequest: function onSearchRequest(text) {
      return handleSearchRequest(model, setPages, text);
    },
    onRandomPage: function onRandomPage() {
      return handleRandomPageRequest(model, setPages);
    }
  }));
};
var handleRandomPageRequest = function handleRandomPageRequest(model, setPages) {
  console.debug("view requests random page");
  model.fetchRandom().then(function (data) {
    console.debug("fetched random page:", data.query.pages);
    setPages(data.query.pages);
  });
};
var handleSearchRequest = function handleSearchRequest(model, setPages, text) {
  console.debug("handle Search Request:", text);
  model.searchWikipedia(text).then(function (data) {
    console.debug("fetched articles:", data);
    if (data.query) {
      setPages(data.query.pages);
    } else {
      var pages = {
        0: {
          pageid: "0",
          title: "",
          extract: "Can't find anything on \"".concat(text, "\"")
        }
      };
      setPages(pages);
    }
  });
};