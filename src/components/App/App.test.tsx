import App from "./App";
import { render, screen } from "@testing-library/react";

describe("Given the App function", () => {
  describe("When it receives Añade tu perezoso", () => {
    test("Then it should return a text in a heading", () => {
      const expectedText = "Añade tu perezoso";

      render(<App />);

      const title = screen.getByRole("heading", { name: expectedText });

      expect(title).toBeInTheDocument();
    });
  });
});
