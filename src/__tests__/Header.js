import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  setup('/search/javascript');
  const logoLink = screen.getByRole('link', { name: /header-logo/i });
  userEvent.click(logoLink);
  expect(screen.getByText(/No reactions to your reddit posts?/i)).toBeInTheDocument();
});

test('navigates to search page when search link is clicked', () => {
  setup();
  const searchLink = screen.getByRole('link', { name: /search/i });
  userEvent.click(searchLink);
  expect(screen.getByText(/reddit/i)).toBeInTheDocument();
});

test.each([
  ['How it works', 'how-it-works'],
  ['About', 'about'],
])('navigates to the %s when %s link is clicked', async (hashLink, hash) => {
  // const { history } = setup('/search/javascript');
  setup();
  const regularEx = new RegExp(hashLink, 'i');
  const hLink = screen.getByRole('link', { name: regularEx });
  expect(hLink).toHaveAttribute('href', `/#${hash}`);
});
