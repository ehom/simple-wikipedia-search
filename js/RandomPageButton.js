"use strict";

var RandomPageButton = function RandomPageButton(_ref) {
  var label = _ref.label,
    onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("input", {
    type: "button",
    className: "btn btn-warning",
    value: label,
    onClick: onClick
  });
};