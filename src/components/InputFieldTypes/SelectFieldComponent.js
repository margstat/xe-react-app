import { FormHelperText } from '@material-ui/core';
import { Field } from 'react-final-form';
import Select from 'react-select';
import PropTypes from 'prop-types';
import React from 'react';
import { RequiredField } from '../../helpers/commonUtils';

const customStyles = {
  control: () => ({
    border: '1px solid red',
  }),
};

const SelectAdapter = ({ input, error, ...rest }) => (
  <Select {...input} {...rest} styles={error ? customStyles : {}} />
);

SelectAdapter.propTypes = {
  input: PropTypes.string,
  error: PropTypes.string,
};

/**
 * Component rendering a select form field input
 * @param options - select options
 * @param name - form fields name
 * @param required - boolean indicating if this is a required form field
 * @param errors - form errors
 * @returns {JSX.Element}
 * @constructor
 */
const SelectFieldComponent = ({
  options, name, required, errors,
}) => {
  const error = errors && errors[name];
  return (
    <div className="select-container">
      {required ? <RequiredField title={name} /> : name}
      <Field
        name={name}
        component={SelectAdapter}
        options={options.map((el) => ({ label: el, value: el }))}
        error={error}
      />
      {error && <FormHelperText style={{ color: 'red' }}>{error}</FormHelperText>}
    </div>
  );
};

SelectFieldComponent.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  required: PropTypes.bool,
  errors: PropTypes.shape({}),
};

export default SelectFieldComponent;
