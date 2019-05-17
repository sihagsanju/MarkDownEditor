import React from 'react';
import { configure, shallow, mount} from 'enzyme';
import CardListitem from '../src/common/CardListItem.jsx';

configure({adapter: new Adapter()});

describe('MyComponent', () => {
  const component = shallow(<CardListitem />);
  it('card component snapshot and props testing', () => {
    expect(wrapper).toMatchSnapshot();
  it('checking for props',()=>{
    const props={
          item:{id:1,title:'quiz'},
          flag:true,
          fav:true
    }
    component = mount(<CardListitem {...props} />);
    expect((component).prop('flag')).toEqual(true);
    expect((component).prop('fav')).toEqual(true);
    expect((component).prop('item')).toMatchObject({id:1,title:'quiz'});
  })  
});
});