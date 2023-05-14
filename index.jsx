(function main() {
  // Seems verbosely written but it's clearer.
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
})();
