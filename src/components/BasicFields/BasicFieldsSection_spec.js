import React from 'react';
import { configure, shallow } from 'enzyme';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import BasicFieldsSection from './BasicFieldsSection';
import GridSectionComponent from './GridSectionComponent';

configure({ adapter: new Adapter() });

describe('BasicFieldsSection', () => {
  it('renders the component correctly', () => {
    const wrapper = shallow(<BasicFieldsSection />);
    expect(wrapper.find(GridSectionComponent)).to.have.length(3);
  });
});
