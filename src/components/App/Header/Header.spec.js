import React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount } from 'enzyme';
import { Link, MemoryRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import Header from './';

configure({ adapter: new Adapter() });

describe('Header Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><Header /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  describe('navigation', () => {
    it('has navigation links for home', () => {
      const wrapper = mount(<MemoryRouter><Header /></MemoryRouter>);
      const link = wrapper.findWhere(n => n.type() === Link && n.text() === 'Home');
      expect(link.props().to).toBe('/');
    });
    it('has navigation links for about', () => {
      const wrapper = mount(<MemoryRouter><Header /></MemoryRouter>);
      const link = wrapper.findWhere(n => n.type() === Link && n.text() === 'About');
      expect(link.props().to).toBe('/about');
    });
    it('has navigation links for projects', () => {
      const wrapper = mount(<MemoryRouter><Header /></MemoryRouter>);
      const link = wrapper.findWhere(n => n.type() === Link && n.text() === 'Projects');
      expect(link.props().to).toBe('/projects');
    });
    it('has navigation links for contact', () => {
      const wrapper = mount(<MemoryRouter><Header /></MemoryRouter>);
      const link = wrapper.findWhere(n => n.type() === Link && n.text() === 'Contact');
      expect(link.props().to).toBe('/contact');
    });
  });
});
