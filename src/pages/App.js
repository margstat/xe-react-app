import React from 'react';
import { Form } from 'react-final-form';
import '../App.css';
import Paper from '@material-ui/core/Paper';
import history from '../helpers/history';
import BasicFieldsSection from '../components/BasicFields/BasicFieldsSection';
import UploadSection from '../components/UploadSection';
import validate from '../helpers/validate';
import AreaSection from '../components/AreaSection/AreaSection';

const onSubmit = async (values) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(300);
  const retrievedProperties = localStorage.getItem('properties');
  const parsedValues = JSON.parse(retrievedProperties);
  const propertiesArray = [values];
  const newPropertiesArray = parsedValues
  && parsedValues.length ? [...parsedValues, ...propertiesArray] : propertiesArray;
  localStorage.setItem('properties', JSON.stringify(newPropertiesArray));
  history.push('/ads');
};

/**
 * App Component containing a form for adding an ad
 * @returns {JSX.Element}
 */
const App = () => (
  <Form
    onSubmit={(data) => onSubmit(data)}
    validate={(values) => validate(values)}
    mutators={{
      setValue: ([field, value], state, { changeValue }) => {
        changeValue(state, field, () => value);
      },
    }}
    render={({
      form, handleSubmit, errors, submitFailed, values,
    }) => (
      <form onSubmit={handleSubmit}>
        <Paper elevation={23}>
          <BasicFieldsSection errors={submitFailed && errors} />
          <AreaSection
            changeFormValue={form.mutators.setValue}
            values={values}
            errors={submitFailed && errors}
          />
          <UploadSection changeFormValue={form.mutators.setValue} />
        </Paper>
        <button className="button-submit" type="submit">Submit</button>
      </form>
    )}
  />
);

export default App;
