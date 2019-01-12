import React from 'react';
import ReactDOM from 'react-dom';
import PasswordReset from './PasswordReset';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PasswordReset />, div);
  ReactDOM.unmountComponentAtNode(div);
});
