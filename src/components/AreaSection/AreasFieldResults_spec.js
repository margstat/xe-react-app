import React from 'react';
import { configure, shallow } from 'enzyme';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AreasFieldResults from './AreasFieldResults';

configure({ adapter: new Adapter() });

describe('AreasFieldResults', () => {
  it('renders the component correctly', () => {
    const wrapper = shallow(<AreasFieldResults options={[
      { mainText: 'Nafplio', secondaryText: 'greece' },
      { mainText: 'Nafplio Argolis', secondaryText: 'greece' },
    ]}
    />);
    expect(wrapper.find(List)).to.have.length(1);
    expect(wrapper.find(ListItem)).to.have.length(2);
    expect(wrapper.find(ListItemText).at(0).prop('primary')).to.eql('Nafplio, greece');
    expect(wrapper.find(ListItemText).at(1).prop('primary')).to.eql('Nafplio Argolis, greece');
  });
  it('renders null', () => {
    const wrapper = shallow(<AreasFieldResults options={[]} />);
    expect(wrapper.find(List)).to.have.length(0);
  });
});
