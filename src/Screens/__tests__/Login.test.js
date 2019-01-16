import React from 'react';
import Login from '../Login';
import ShallowRenderer from 'react-test-renderer/shallow';


it('Login page renders correctly', () => {
let store;
const renderer = new ShallowRenderer();
renderer.render(<Login store={store}/>);

});