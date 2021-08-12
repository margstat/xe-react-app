import React from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { FormHelperText } from '@material-ui/core';

/**
 * Component rendering an input field, material-ui TextField for text values and an error section.
 * @param setUserInput - Function handling user input
 * @param setIsSelected - Function handling user async selection
 * @param userInput - Text fields input
 * @param error - form errors concerning current input
 * @returns {JSX.Element}
 */
const InputTextField = ({
  setUserInput, setIsSelected, userInput, error,
}) => (
  <>
    <TextField
      error={error}
      id="combo-box-demo"
      fullWidth
      onChange={(event) => {
        setUserInput(event.target.value);
        setIsSelected(false);
      }}
      value={userInput}
      InputProps={{
        endAdornment: userInput
          ? <InputAdornment style={{ cursor: 'pointer' }} position="end" onClick={() => setUserInput('')}>X</InputAdornment>
          : null,
      }}
    />
    {error && <FormHelperText style={{ color: 'red' }}>{error}</FormHelperText>}
  </>
);

InputTextField.propTypes = {
  setUserInput: PropTypes.func,
  setIsSelected: PropTypes.func,
  userInput: PropTypes.string,
  error: PropTypes.string,
};

export default InputTextField;
