import React from 'react';
import PropTypes from 'prop-types';
import { FIELD_TYPES } from '../../helpers/commonUtils';
import RadioField from './RadioFieldComponent';
import TextField from './TextFieldComponent';
import SelectFieldComponent from './SelectFieldComponent';

/**
 * Component resolving render option (one of test, checkbox, radio) based on question type
 * @param question Current question
 * @param errors   The form errors
 */
const FieldTypesComponent = ({
  type, name, options, required, normalize, errors,
}) => (
  <div className="field-container">
    {type === FIELD_TYPES.SELECT
      ? <SelectFieldComponent options={options} required={required} name={name} errors={errors} />
      : null}
    {type === FIELD_TYPES.TEXT ? (
      <TextField name={name} required={required} normalize={normalize} />
    ) : null}
    {type === FIELD_TYPES.RADIO
      ? <RadioField options={options} required={required} name={name} errors={errors} /> : null}
  </div>
);

FieldTypesComponent.propTypes = {
  type: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  errors: PropTypes.shape({}),
  normalize: PropTypes.func,
};

export default FieldTypesComponent;
