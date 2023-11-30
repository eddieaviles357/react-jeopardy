import { render, screen } from '@testing-library/react';
import App from './App';

test('does not crash', () => {
  render(<App />);
});

test('matches snapshot', () => {
  const app = render(<App />);
  expect(app.asFragment()).toMatchSnapshot();
});

describe('Component rendered test', () => {
  it('should render button', () => {
    render(<App />);
    const btn = screen.getByText(/Play/i);
    expect(btn.textContent).toBe('Play');
    expect(btn.className).toBe('Play-btn btn')
  });

})