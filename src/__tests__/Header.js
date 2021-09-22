import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app';

const setup = (InitialPath = "/") => {
  let history;
  render(<MemoryRouter initialEntries={[InitialPath]}>
    <App />
    <Route 
      path="*"
      render = {(props) => {
        history = props.history;
        return null;
      }}
    />
  </MemoryRouter>,);
  return {history};
}

test('navigates to home page when logo is clicked',()=>{
  setup("/search/javascript");
  const logoLink = screen.getByRole('link', {name: /logo/i});
  userEvent.click(logoLink);
  expect(screen.getByText(/home page/i)).toBeInTheDocument();
});

test('navigates to search page when search link is clicked', ()=>{
  setup();
  const searchLink = screen.getByRole('link', {name: /search/i});
  userEvent.click(searchLink);
  expect(screen.getByText(/reddit/i)).toBeInTheDocument();
});

test.each([['how it works', 'how-it-works'],['about', 'about']])
("navigates to the %s when %s link is clicked", (hashLink, hash)=>{
  const {history} = setup("/search/javascript");
  const reg_Ex = new RegExp(hashLink, "i");
  const h_Link = screen.getByRole('link', {name: reg_Ex});
  userEvent.click(h_Link);
  expect(screen.getByText(/home page/i)).toBeInTheDocument();
  expect(history.location.hash).toBe(`#${hash}`);
})