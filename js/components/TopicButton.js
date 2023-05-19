"use strict";

var TopicButton = function TopicButton(_ref) {
  var name = _ref.name,
    title = _ref.title,
    onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-sm btn-light m-1",
    onClick: onClick,
    name: name,
    title: title
  }, name);
};
TopicButton.defaultProps = {
  title: ""
};