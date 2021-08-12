import { BasicFieldsMapper } from './commonUtils';

const validate = (values) => {
  const errors = {};
  Object.entries(BasicFieldsMapper).map((el) => el[1])
    .filter((el) => el.required).flatMap((field) => {
      if (values && !values[field.name]) {
        errors[field.name] = 'Required';
      }
      return errors;
    });
  if (values && !values.area) {
    errors.area = 'Required';
  }
  return errors;
};
export default validate;
