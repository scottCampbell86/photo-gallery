import React from 'react';
//import { render } from '@testing-library/react';
import App from './App.js';
import Header from './Header.js';
import ImageItem from './ImageItem.js';
import ImageList from './ImageList.js';


//import Link from '../Link.react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Header />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<ImageList />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<ImageItem />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
