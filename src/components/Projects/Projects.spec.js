import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Projects from './';

configure({ adapter: new Adapter() });

describe('Projects Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Projects />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('fetches projects immediately upon mounting', () => {
    fetch.mockResponse(JSON.stringify({}));
    const wrapper = shallow(<Projects />);
    const spy = jest.spyOn(wrapper.instance(), 'fetchProjects');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
    spy.mockReset();
    spy.mockRestore();
    fetch.resetMocks();
  });
});
