import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import NotFound from "pages/NotFound";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("NotFound component", () => {
  it("should render and find the button and the text messages", async () => {
    render(<NotFound />);

    const largeMessage = screen.getByText("Ops...");
    const notFoundMessage = screen.getByText("Página não encontrada");
    const backButton = screen.getByRole("button", { name: /início/i });

    expect(largeMessage).toBeInTheDocument();
    expect(notFoundMessage).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
  });

  it("Should return to main page", async () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <NotFound />
      </Router>,
    );
    const backButton = screen.getByRole("button", { name: /início/i });
    fireEvent.click(backButton);
    expect(history.location.pathname).toBe("/");
  });
});
