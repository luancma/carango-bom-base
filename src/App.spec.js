import { screen, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import App from "./App";

describe("Testando aaa", () => {
  it("Shoud render the app component", () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <App />
      </Router>
    );

    const element = screen.getByTestId("test");

    expect(element).toBeInTheDocument();
  });
});
