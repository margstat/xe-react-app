import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GridSectionComponent from './GridSectionComponent';
import { BasicFieldsMapper } from '../../helpers/commonUtils';

/**
 * Component rendering fields for basic ad characteristics
 * @param errors - form errors
 * @returns {JSX.Element}
 */
const BasicFieldsSection = ({ errors }) => (
  <>
    <Typography variant="h6">
      Basic Characteristics
    </Typography>
    <Grid container>
      <GridSectionComponent
        fieldsArray={
            [BasicFieldsMapper.TITLE,
              BasicFieldsMapper.TYPE,
              BasicFieldsMapper.PRICE,
              BasicFieldsMapper.LIVING_AREA]
        }
        errors={errors}
      />
      <GridSectionComponent
        fieldsArray={
            [BasicFieldsMapper.YEAR, BasicFieldsMapper.FLOOR, BasicFieldsMapper.BUILDING_TYPE]
        }
        errors={errors}
      />
      <GridSectionComponent
        fieldsArray={
            [BasicFieldsMapper.BEDROOMS, BasicFieldsMapper.BATHROOMS, BasicFieldsMapper.FREE_TEXT]
        }
        errors={errors}
      />
    </Grid>
  </>
);

BasicFieldsSection.propTypes = {
  errors: PropTypes.shape({}),
};

export default BasicFieldsSection;
