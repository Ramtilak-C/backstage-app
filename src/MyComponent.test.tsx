import React from 'react';
import { render } from '@testing-library/react';
import MyComponent from './MyComponent';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';


test('renders MyComponent', () => {
  const { getByText } = render(<MyComponent />);
  const helloElement = getByText(/hello, world/i); // Adjust the text based on your component
  expect(helloElement).toBeInTheDocument();
});
