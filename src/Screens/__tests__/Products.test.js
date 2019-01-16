import React from 'react';
import Products from '../Products';
import ShallowRenderer from 'react-test-renderer/shallow';


it('Products page renders correctly', () => {
let store;
const renderer = new ShallowRenderer();
renderer.render(<Products store={store}/>);

});