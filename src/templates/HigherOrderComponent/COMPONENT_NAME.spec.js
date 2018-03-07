import React from 'react';
import ReactDOM from 'react-dom';
import COMPONENT_NAME from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const StubComponent = () => <div />;
  ReactDOM.render(COMPONENT_NAME(StubComponent), div);
  ReactDOM.unmountComponentAtNode(div);
});
