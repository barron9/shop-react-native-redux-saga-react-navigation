import React from 'react';
import Profile from '../Profile';
import ShallowRenderer from 'react-test-renderer/shallow';


it('Products page renders correctly', () => {
let store;
const renderer = new ShallowRenderer();
renderer.render(<Profile store={store}/>);

});