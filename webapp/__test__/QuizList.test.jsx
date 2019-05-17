import React from 'react';
import { configure, shallow, mount} from 'enzyme';
import QuizList from '../src/common/QuizList.jsx';

configure({adapter: new Adapter()});

describe('MyComponent', () => {
  const component = shallow(<QuizList />);
  it('QuizList component snapshot and props testing', () => {
    expect(wrapper).toMatchSnapshot();
  it('checking for props',()=>{
    const props={
          flag:true,
          fav:true
    }
    component = mount(<Quizlist {...props} />);
    expect((component).prop('flag')).toEqual(true);
    expect((component).prop('fav')).toEqual(true);

   it('check children prop type', () => {  
   expect(ModalTriggerComponent.prop('item').children).toBeObject();
 });
  })  
});
});