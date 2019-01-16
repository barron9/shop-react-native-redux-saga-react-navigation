import React from 'react';
import LanguageSelector from '../LanguageSelector';
import ShallowRenderer from 'react-test-renderer/shallow';


it('Language Selector page renders correctly', () => {
let store;
const renderer = new ShallowRenderer();
renderer.render(<LanguageSelector store={store}/>);

});