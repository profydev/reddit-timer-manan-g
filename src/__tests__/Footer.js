import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route } from 'react-router-dom';
import App from '../App';

const setup = (InitialPath = '/') => {
  let history;
  render(
    <MemoryRouter initialEntries={[InitialPath]}>
      <App />
      <Route
        path="*"
        render={(props) => {
          history = props.history;
          return null;
        }}
      />
    </MemoryRouter>,
  );
  return { history };
};

test('navigates to home page when logo is clicked', () => {
  setup();
  const logoLink = screen.getByRole('link', { name: /footer-logo/i });
  userEvent.click(logoLink);
  expect(screen.getByText(/No reactions to your reddit posts?/i)).toBeInTheDocument();
});

test('navigates to profy.dev when profy.dev is clicked', () => {
  setup();
  const profyLink = screen.getByRole('link', { name: /profy.dev/i });
  expect(profyLink).toHaveAttribute('href', 'https://profy.dev/employers');
});

test('navigates to terms page when terms & privacy page is clicked', () => {
  setup();
  const termsLink = screen.getByRole('link', { name: /terms & privacy/i });
  userEvent.click(termsLink);
  expect(screen.getByText(/terms-privacy/i)).toBeInTheDocument();
});
