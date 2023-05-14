"use strict";

var TopicCard = function TopicCard(props) {
  var key = props.key,
    id = props.id,
    title = props.title,
    desc = props.desc,
    extract = props.extract,
    image = props.image;
  var url = "https://en.wikipedia.org/?curid=".concat(id);
  return /*#__PURE__*/React.createElement("div", {
    className: "card mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-title"
  }, /*#__PURE__*/React.createElement("a", {
    href: url,
    rel: "noopener noreferrer"
  }, title)), /*#__PURE__*/React.createElement("h6", {
    className: "card-subtitle mb-2 text-body-secondary"
  }, desc), /*#__PURE__*/React.createElement("div", {
    className: "card-text"
  }, extract)));
};