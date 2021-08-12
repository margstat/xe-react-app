import React from 'react';

/**
 * Available field types
 * @type {{RADIO: string, TEXT: string, SELECT: string}}
 */
export const FIELD_TYPES = {
  SELECT: 'SELECT',
  TEXT: 'TEXT',
  RADIO: 'RADIO',
};

/**
 * Function normalizing input value to accept only numbers
 * @param value - input value
 */
const onlyNumbersNormalizer = (value) => {
  if (!value) return value;
  return value.replace(/^(\d{0,4}\.\d{0,5}|\d{0,9}|\.\d{0,8}).*/, '$1');
};

/**
 * Function limiting input value up to 155 characters
 * @param value - input value
 */
const maxCharacterLength = (value) => {
  if (!value) return value;
  const maxChars = 155;
  if (value.length > maxChars) {
    return value.substr(0, maxChars);
  }
  return value;
};

/**
 * Object holding form fields and its characteristics
 */
export const BasicFieldsMapper = {
  TITLE: {
    name: 'Title', type: FIELD_TYPES.TEXT, normalize: maxCharacterLength, required: true,
  },
  TYPE: {
    name: 'Type', required: true, type: FIELD_TYPES.SELECT, options: ['rent', 'buy', 'exchange', 'donation'],
  },
  PRICE: {
    name: 'Price', required: true, type: FIELD_TYPES.TEXT, normalize: onlyNumbersNormalizer,
  },
  LIVING_AREA: {
    name: 'Living_Area', required: true, type: FIELD_TYPES.TEXT, normalize: onlyNumbersNormalizer,
  },
  BUILDING_TYPE: {
    name: 'Building', type: FIELD_TYPES.RADIO, required: true, options: ['apartment', 'building', 'detached house', 'duplex apartment'],
  },
  FLOOR: {
    name: 'Floor', type: FIELD_TYPES.SELECT, required: true, options: ['ground floor', '1st', '2nd', '3rd', '4th', '5th', '6th'],
  },
  FREE_TEXT: { name: 'FreeText', type: FIELD_TYPES.TEXT },
  YEAR: {
    name: 'Year', type: FIELD_TYPES.TEXT, required: true, normalize: onlyNumbersNormalizer,
  },
  BEDROOMS: {
    name: 'Bedrooms', type: FIELD_TYPES.TEXT, required: true, normalize: onlyNumbersNormalizer,
  },
  BATHROOMS: {
    name: 'Bathrooms', type: FIELD_TYPES.TEXT, required: true, normalize: onlyNumbersNormalizer,
  },
};

// eslint-disable-next-line react/prop-types
export const RequiredField = ({ title }) => (
  <>
    {title}
    <span style={{ color: 'red' }}>*</span>
  </>
);
