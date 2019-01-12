import React from 'react';
import ReactDOM from 'react-dom';
import NewAccount from './NewAccount';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewAccount />, div);
  ReactDOM.unmountComponentAtNode(div);
});