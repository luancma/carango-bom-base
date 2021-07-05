import { render } from "react-dom";

describe("Testando aaa", () => {
  it("Shoud render the app component", () => {
    render(<App />);

    expect(screen.getByRole("alert")).toHaveTextContent("alert");
  });
});
