const { render, fireEvent, cleanup } = require("@testing-library/react");
const App = require("./index");

it("App should be render", () => {
  const { container, getByText } = render(App);

  console.log(container);

  expect(getByText("Index")).toBeInTheDocument();
});
