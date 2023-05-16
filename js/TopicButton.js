"use strict";

var TopicButton = function TopicButton(_ref) {
  var name = _ref.name,
    onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-light m-1",
    onClick: onClick,
    name: name
  }, name);
};