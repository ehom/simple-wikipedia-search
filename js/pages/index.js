"use strict";

(function main() {
  // Seems verbosely written but it's clearer.
  var container = document.getElementById("root");
  var root = ReactDOM.createRoot(container);
  root.render( /*#__PURE__*/React.createElement(App, null));
})();