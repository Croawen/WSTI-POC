import React from 'react';
import ReactDOM from 'react-dom';
import Groups from './Groups';

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
  Polar: () => null,
  Pie: () => null,
  Radar: () => null,
  Bar: () => null,
  Doughnut: () => null,
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Groups />, div);
  ReactDOM.unmountComponentAtNode(div);
});