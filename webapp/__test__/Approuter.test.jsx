import React from 'react';
import { Route } from 'react-router-dom';
import { configure, shallow, mount} from 'enzyme';

import Approute from '../src/route/Approuter.jsx';

configure({adapter: new Adapter()});

describe('MyComponent', () => {
  const component = shallow(<Approute />);
      it('should render correctly in "debug" mode', () => {
         expect(component.contains(
             <Link to="/" component={Home}/>
         )).toEqual(true)
        it('check for the path route',()=>{
           expect(component.children().find).toEqual(true)
        }) 
         // it('renders correct routes', () => {
//   const wrapper = shallow(<Approute />);
//   const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
//     const routeProps = route.props();
//     pathMap[routeProps.path] = routeProps.component;
//     return pathMap;
//   }, {});
//   // { 'nurse/authorization' : NurseAuthorization, ... }

//   expect(pathMap['nurse/authorization']).toBe(NurseAuthorization);
// });
        // expect(component).toMatchSnapshot();
      });
    });
// it('renders correct routes', () => {
//   const wrapper = shallow(<Approute />);
//   const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
//     const routeProps = route.props();
//     pathMap[routeProps.path] = routeProps.component;
//     return pathMap;
//   }, {});
//   // { 'nurse/authorization' : NurseAuthorization, ... }

//   expect(pathMap['nurse/authorization']).toBe(NurseAuthorization);
// });
