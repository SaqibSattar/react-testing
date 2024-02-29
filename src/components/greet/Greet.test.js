import React from 'react';
import { render, screen } from '@testing-library/react';
import { Greet } from './Greet.tsx';

test('Greet render correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("Greet renders with a name", () => {
    render(<Greet name="Saqi" />);
    const textElement = screen.getByText("Hello Saqi");
    expect(textElement).toBeInTheDocument();
  });