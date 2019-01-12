import React from 'react';
import ReactDOM from 'react-dom';
import EditGroup from './EditGroup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});