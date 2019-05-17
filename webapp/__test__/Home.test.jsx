import React from 'react';
import { Route } from 'react-router-dom';
import { configure, shallow, mount} from 'enzyme';
import Home from '../src/Home/Home.jsx';

configure({adapter: new Adapter()});

describe('MyComponent', () => {
  const component = shallow(<Home />);
  it('Appbar component contains Appbar', () => {
    expect(wrapper).toMatchSnapshot();
});
    //   it('should render correctly in "debug" mode', () => {
    //      expect(component.contains(
    //          <Link to="/" component={Home}/>
    //      )).toEqual(true)
    //     it('check for the path route',()=>{
    //        expect(component.children().find).toEqual(true)
    //     }) 
     // });
    });
