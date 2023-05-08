import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Hello from "./Hello";

describe("Hello Component..", () => {
  test('renders "Hello World" as a text', () => {
    // Arrange
    render(<Hello />);
    // Act
    // ... nothing
    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see" you if the button was NOT clicked', () => {
    // Arrange
    render(<Hello />);

    // Assert
    const outputElement = screen.getByText("It's good to see you!");
    expect(outputElement).toBeInTheDocument();
  });
});
