import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './index';

it("App should be render", () => {
  const { container, getByText } = render(<App></App>);
  const element = getByText("Home");

  expect(element).toBeTruthy();
});
