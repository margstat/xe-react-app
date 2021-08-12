import {
  FormControl, FormControlLabel, FormHelperText, RadioGroup,
} from '@material-ui/core';
import { Field } from 'react-final-form';
import { Radio } from 'final-form-material-ui';
import PropTypes from 'prop-types';
import React from 'react';
import { RequiredField } from '../../helpers/commonUtils';

/**
 * Component rendering a radio form field input
 * @param options - radio options
 * @param name - form fields name
 * @param required - boolean indicating if this is a required form field
 * @param errors - form errors
 * @returns {JSX.Element}
 * @constructor
 */
const RadioFieldComponent = ({
  options, name, required, errors,
}) => {
  const error = errors && errors[name];
  return (
    <>
      {required ? <RequiredField title={name} /> : name}
      <div>
        <FormControl component="fieldset" error={error}>
          <RadioGroup
            name="radio-buttons-group"
          >
            {options.map((el) => (
              <FormControlLabel
                key={el}
                label={el}
                control={(
                  <Field
                    name={name}
                    component={Radio}
                    type="radio"
                    value={el}
                    color="primary"
                  />
                                )}
              />
            ))}
          </RadioGroup>
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
      </div>
    </>
  );
};

RadioFieldComponent.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  required: PropTypes.bool,
  errors: PropTypes.shape({}),
};
export default RadioFieldComponent;
