import React from 'react';
import ImageList from './ImageList.js';
import renderer from 'react-test-renderer';



it('renders correctly', () => {
  const tree = renderer
    .create(<ImageList imagesArray = {[]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
