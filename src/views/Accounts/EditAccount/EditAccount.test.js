import React from 'react';
import ReactDOM from 'react-dom';
import EditAccount from './EditAccount';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditAccount />, div);
  ReactDOM.unmountComponentAtNode(div);
});