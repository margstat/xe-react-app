import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

/**
 * Component rendering all area options in a list item.
 * @param options - area options
 * @param changeFormValue - function responsible for setting selected are in form
 * @param setUserInput - function responsible for setting selected are in text field
 * @param setOptions - function responsible for setting options
 * @param setIsSelected - function responsible for setting that an option is selected
 * @returns {JSX.Element|null}
 */
const AreasFieldResults = ({
  options, changeFormValue, setUserInput, setOptions, setIsSelected,
}) => (
  options && options.length
    ? (
      <List component="nav" aria-label="secondary mailbox folders">
        {options.map((option) => (
          <ListItem
            key={`${option.mainText}, ${option.secondaryText}`}
            button
            onClick={() => {
              changeFormValue('area', option);
              setUserInput(`${option.mainText}, ${option.secondaryText}`);
              setOptions([]);
              setIsSelected(true);
            }}
          >
            <ListItemText primary={`${option.mainText}, ${option.secondaryText}`} />
          </ListItem>
        ))}
      </List>
    )
    : null
);

AreasFieldResults.propTypes = {
  changeFormValue: PropTypes.func,
  setUserInput: PropTypes.func,
  setOptions: PropTypes.func,
  setIsSelected: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    mainText: PropTypes.string,
    secondaryText: PropTypes.string,
    placeId: PropTypes.string,
  })),
};

export default AreasFieldResults;
