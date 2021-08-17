import { render, screen } from '@testing-library/react';
import Convention from './Convention';

test('renders learn react link', () => {
  render(<Convention />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
