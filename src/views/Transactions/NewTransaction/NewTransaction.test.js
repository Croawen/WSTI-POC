import React from 'react';
import ReactDOM from 'react-dom';
import NewTransaction from './NewTransaction';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewTransaction />, div);
  ReactDOM.unmountComponentAtNode(div);
});