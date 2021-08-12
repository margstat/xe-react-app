import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getAreas } from '../../helpers/services';
import InputTextField from './InputTextField';
import AreasFieldResults from './AreasFieldResults';
import { RequiredField } from '../../helpers/commonUtils';

/**
 * Component rendering and handling functionality for area selection.
 * It renders:
 * 1) an input field
 * 2) a section to display area options
 * It handles:
 * a) request to specific api on user changes
 * b) option update
 * c) select and update userInput ang form value
 * d) request errors
 * @param changeFormValue - function responsible for updating form values
 * @param errors - form errors
 * @returns {JSX.Element}
 */
const AreaSection = ({ changeFormValue, errors }) => {
  const [userInput, setUserInput] = useState('');
  const [options, setOptions] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [requestError, setRequestError] = useState(null);
  useEffect(() => {
    if (!userInput || userInput.length < 3) {
      setOptions([]);
      setRequestError(null);
    }
    if (userInput && userInput.length > 2 && !isSelected) {
      setRequestError(null);
      getAreas(userInput, setOptions, setRequestError);
    }
  }, [userInput]);
  return (
    <>
      <Typography variant="h6">
        <RequiredField title="Select Area" />
      </Typography>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className="grid">
            <InputTextField
              setUserInput={setUserInput}
              setIsSelected={setIsSelected}
              userInput={userInput}
              error={errors && errors.area}
            />
            <div style={{ color: 'red' }}>{requestError}</div>
            {!requestError && userInput && userInput.length > 2 && !isSelected && !options.length
              ? <CircularProgress disableShrink color="primary" /> : null}
            <AreasFieldResults
              options={options}
              changeFormValue={changeFormValue}
              setIsSelected={setIsSelected}
              setOptions={setOptions}
              setUserInput={setUserInput}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

AreaSection.propTypes = {
  changeFormValue: PropTypes.func,
  errors: PropTypes.shape(),
};

export default AreaSection;
