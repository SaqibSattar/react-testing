import { render, screen } from "@testing-library/react";
import { Greet } from "../components/greet/Greet.tsx";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("renders a name", () => {
    render(<Greet name="Saqi" />);
    const textElement = screen.getByText("Hello Saqi");
    expect(textElement).toBeInTheDocument();
  });
});