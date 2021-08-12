import React from 'react';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';
import { TextField } from 'final-form-material-ui';
import { RequiredField } from '../../helpers/commonUtils';

/**
 * Component rendering a form input field
 * @param name - the name of the form field
 * @param required - boolean indicating if the value is required
 * @param normalize - field normalizer
 * @returns {JSX.Element}
 */
const TextFieldComponent = ({ name, required, normalize }) => (
  <>
    {required ? <RequiredField title={name} /> : name}
    <Field
      fullWidth
      name={name}
      component={TextField}
      parse={normalize}
      multiline
    />
  </>
);
TextFieldComponent.propTypes = {
  name: PropTypes.string,
  normalize: PropTypes.func,
  required: PropTypes.bool,
};
export default TextFieldComponent;
