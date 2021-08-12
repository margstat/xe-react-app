import React from 'react';
import { shallow, configure } from 'enzyme';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import InputTextField from './InputTextField';

configure({ adapter: new Adapter() });

describe('InputTextField', () => {
  it('renders the component correctly', () => {
    const wrapper = shallow(<InputTextField userInput="userInput" />);
    expect(wrapper.find(TextField)).to.have.length(1);
    expect(wrapper.find(TextField).props().value).to.eql('userInput');
    expect(wrapper.find(FormHelperText)).to.have.length(0);
  });
  it('renders the component and the error section', () => {
    const inputProps = { userInput: 'inputInput', error: 'error' };
    const wrapper = shallow(<InputTextField {...inputProps} />);
    expect(wrapper.find(TextField)).to.have.length(1);
    expect(wrapper.find(TextField).prop('value')).to.eql('inputInput');
    expect(wrapper.find(FormHelperText)).to.have.length(1);
  });
});
