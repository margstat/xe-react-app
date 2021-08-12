import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FieldTypesComponent from '../InputFieldTypes/FieldTypesComponent';

/**
 * Component rendering a grid section of fields
 * @param fieldsArray - array containing fields to render
 * @param errors - form errors
 * @returns {JSX.Element}
 */
const GridSectionComponent = ({ fieldsArray, errors }) => (
  <Grid item xs={12} md={4}>
    <div className="grid">
      <List>
        {fieldsArray.map((field) => (
          <ListItem key={field.name}>
            <FieldTypesComponent {...field} errors={errors} />
          </ListItem>
        ))}
      </List>
    </div>
  </Grid>
);

GridSectionComponent.propTypes = {
  fieldsArray: PropTypes.arrayOf(PropTypes.shape({})),
  errors: PropTypes.shape({}),
};

export default GridSectionComponent;
