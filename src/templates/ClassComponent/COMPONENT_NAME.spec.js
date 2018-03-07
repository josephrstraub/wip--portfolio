import React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import COMPONENT_NAME from './';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<COMPONENT_NAME />, div);
  ReactDOM.unmountComponentAtNode(div);
});
