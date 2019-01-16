import React from 'react';
import Support from '../Support';
import ShallowRenderer from 'react-test-renderer/shallow';


it('Products page renders correctly', () => {
let store;
const renderer = new ShallowRenderer();
renderer.render(<Support store={store}/>);

});