import React from 'react';
import { render, screen } from '@testing-library/react';
import { Greet } from './Greet.tsx';

test('Greet render correctly', () => {
    render(<Greet />);
    const greetText = screen.getByText(/greet/i);
    expect(greetText).toBeInTheDocument();
  });