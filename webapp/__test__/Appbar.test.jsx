import React from 'react';
import { configure, shallow, mount} from 'enzyme';
import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import Appbar from '../src/Home/Appbar.jsx';
import { Link,Fragment } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

configure({adapter: new Adapter()});
describe('<Appbar>', () => {
   const clickFn = jest.fn();
   const close = jest.fn();
      const wrapper = shallow(<Appbar />);
   it('Appbar component contains Appbar', () => {
        expect(wrapper).toMatchSnapshot();
   });
   it('it contain Appbar',()=>{
       expect(wrapper.contains('.menu')).toBeDefined();
   })
  
//   it('Appbar menu')
}); // it('Should contain drawer',()=>{
   //   expect(wrapper.find(Drawer)).toBeDefined()
   // })

//    it('has route to newApp', () => {
//        const wrapper = shallow(<HomePageComponent />);
//        expect(wrapper.contains(
//            <Link to={`/newApp`} className="lnk">
//                <Typography variant="h6" color="inherit" className="grow">
//                    NewApp
//                </Typography>
//            </Link>
//        )).toEqual(true);
//    });
// })



//    it('should contain HomePageComponent', () => {
//        const wrapper = shallow(<ListUrlComponent />);
//        expect(wrapper.find(HomePageComponent)).toHaveLength(1);
//    });

//    it('drop down button is rendered', () => {
//        const wrapper = shallow(<HomePageComponent />);
//        expect(wrapper.text()).toBeDefined();
//    });

//    it('check if Card component is defined', () => {
//        const wrapper = shallow(<ListUrlComponent />);
//        expect(wrapper.find('.card')).toBeDefined();
//    });

// })