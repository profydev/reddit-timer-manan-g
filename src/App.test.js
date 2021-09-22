import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
});
