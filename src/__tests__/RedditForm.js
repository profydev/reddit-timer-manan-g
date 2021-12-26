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

test('default value in input is javascript', () => {
  setup();
  const searchLink = screen.getByRole('link', { name: /search/i });
  userEvent.click(searchLink);
  const input = screen.getByRole('textbox');
  expect(input).toHaveValue('javascript');
});

test('location changes when a query is done', async () => {
  const { history } = setup('/search/javascript');
  const input = screen.getByRole('textbox');
  userEvent.clear(input);
  userEvent.type(input, 'react');
  const button = screen.getByRole('button', { name: /search/i });
  userEvent.click(button);
  expect(history.location.pathname).toEqual('/search/react');
});
