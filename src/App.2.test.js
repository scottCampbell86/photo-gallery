import React from 'react';
import ImageItem from './ImageItem.js';
import renderer from 'react-test-renderer';


it('renders correctly', () => {
  const tree = renderer
    .create(<ImageItem image={[]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
