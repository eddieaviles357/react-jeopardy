import { render } from '@testing-library/react';
import App from './App';

test('does not crash', () => {
  render(<App />);
});

test('matches snapshot', () => {
  const app = render(<App />);
  expect(app.asFragment()).toMatchSnapshot();
});