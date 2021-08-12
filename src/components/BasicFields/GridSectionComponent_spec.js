import React from 'react';
import { configure, shallow } from 'enzyme';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import ListItem from '@material-ui/core/ListItem';
import GridSectionComponent from './GridSectionComponent';

configure({ adapter: new Adapter() });

describe('GridSectionComponent', () => {
  it('renders the component correctly', () => {
    const fieldsArray = [{ title: 'title' }, { price: 'price' }, { name: 'name' }];
    const wrapper = shallow(<GridSectionComponent fieldsArray={fieldsArray} />);
    expect(wrapper.find(ListItem)).to.have.length(3);
  });
});
