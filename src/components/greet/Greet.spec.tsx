import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet.tsx";

// describe.skip("Greet", () => {
describe("Greet", () => {
  test("render correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  test("renders with a name", () => {
    render(<Greet name="Saqi" />);
    const textElement = screen.getByText("Hello Saqi");
    expect(textElement).toBeInTheDocument();
  });
});

// it alternative to test
// xit alternative to test.skip
// fit alternative to test.only
