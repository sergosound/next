const React = require("react");
const { render, fireEvent, cleanup } = require("@testing-library/react");
const App = require("./index").default;

it("App should be render", () => {
  const { container, getByText } = render(<App></App>);
  const element = getByText("Home");

  expect(element).toBeTruthy();
});
