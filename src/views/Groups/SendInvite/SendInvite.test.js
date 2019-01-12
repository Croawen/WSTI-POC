import React from 'react';
import ReactDOM from 'react-dom';
import SendInvite from './SendInvite';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SendInvite />, div);
  ReactDOM.unmountComponentAtNode(div);
});