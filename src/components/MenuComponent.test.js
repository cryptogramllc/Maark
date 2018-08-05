import React from 'react';
import { shallow, mount, render } from 'enzyme';
import MenuComponent from './MenuComponent';

describe('<MenuComponent />', () => {
  const wrapper = shallow(<MenuComponent />);

 it('should render player info container', () => {
   expect(wrapper.find('div.menu_cont').exists()).toBe(true)
 });

 it('should update this.state.selectedItem on click', () => {
    wrapper.find('.menu_cont ul li').at(1).simulate('click');
    expect(wrapper.state('selectedItem')).toEqual(1);
 });

 it('should update class of selected anchor', () => {
    wrapper.find('.menu_cont ul li').at(1).simulate('click');
    expect(wrapper.find('.menu_cont ul li').at(1).find('a').hasClass('selected')).toEqual(true);
 });



});
