import React from 'react';
import '../App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import history from '../helpers/history';

/**
 * Component rendering a table containing user submissions
 * @returns {JSX.Element}
 * @constructor
 */
const AdsComponent = () => {
  const retrievedProperties = localStorage.getItem('properties');
  const parsedValues = JSON.parse(retrievedProperties);
  return (
    <div>
      <button className="button-submit" type="button" onClick={() => history.push('/add-property')}>Add Property</button>
      <Paper elevation={23} style={{ overflow: 'auto' }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right"><b>TITLE</b></TableCell>
              <TableCell align="right"><b>TYPE</b></TableCell>
              <TableCell align="right"><b>PRICE&nbsp;(€)</b></TableCell>
              <TableCell align="right"><b>LIVING AREA&nbsp;(in sq.m.)</b></TableCell>
              <TableCell align="right"><b>YEAR</b></TableCell>
              <TableCell align="right"><b>FLOOR</b></TableCell>
              <TableCell align="right"><b>BUILDING</b></TableCell>
              <TableCell align="right"><b>BEDROOMS</b></TableCell>
              <TableCell align="right"><b>BATHROOMS</b></TableCell>
              <TableCell align="right"><b>FREETEXT</b></TableCell>
              <TableCell align="right"><b>AREA</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {parsedValues && parsedValues.map((row) => (
              <TableRow key={row.Title}>
                <TableCell align="right">{row.Title}</TableCell>
                <TableCell align="right">{row.Type ? row.Type.value : null}</TableCell>
                <TableCell align="right">{row.Price}</TableCell>
                <TableCell align="right">{row.Living_Area}</TableCell>
                <TableCell align="right">{row.Year}</TableCell>
                <TableCell align="right">{row.Floor ? row.Floor.value : null}</TableCell>
                <TableCell align="right">{row.Building}</TableCell>
                <TableCell align="right">{row.Bedrooms}</TableCell>
                <TableCell align="right">{row.Bathrooms}</TableCell>
                <TableCell align="right">{row.FreeText}</TableCell>
                <TableCell align="right">{row.area ? `${row.area.mainText}, ${row.area.secondaryText}` : null}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};
export default AdsComponent;
