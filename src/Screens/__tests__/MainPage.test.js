import React from 'react';
import MainPage from '../MainPage';
import ShallowRenderer from 'react-test-renderer/shallow';


it('MainPage page renders correctly', () => {
let store;
const renderer = new ShallowRenderer();
renderer.render(<MainPage store={store}/>);

});