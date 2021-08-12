import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Grid from '@material-ui/core/Grid';

const removeItem = (array, n) => array.filter((elem, i) => i !== n);

/**
 * Comonent rendering a button for uploading images and image section
 * @param changeFormValue - function changing values in form
 * @returns {JSX.Element}
 * @constructor
 */
const UploadSection = ({ changeFormValue }) => {
  const [filesArray, setFilesArray] = useState([]);
  const [filesCollection, setFilesCollection] = useState([]);
  const multiImagePreviewHandler = (e) => {
    e.preventDefault();
    const eventArray = e.target.files;
    // eslint-disable-next-line no-shadow
    setFilesArray((filesArray) => [...eventArray, ...filesArray]);
  };
  const multiUploadRemoveHandler = (index) => {
    const reducedArray = removeItem(filesArray, index);
    setFilesArray(reducedArray);
  };
  useEffect(() => {
    if (filesArray.length) {
      const arrayCollection = filesArray.map((file) => (
        URL.createObjectURL(file)
      ));
      setFilesCollection(arrayCollection);
    }
    if (filesArray.length < 1) {
      setFilesCollection([]);
    }
    changeFormValue('files', filesArray);
    changeFormValue('filesUrl', filesCollection);
  }, [filesArray]);
  return (
    <>
      <Typography variant="h6">
        Upload Image
      </Typography>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className="grid">
            <ImageList gap={10}>
              {filesCollection.map((res, index) => (
                <ImageListItem key={res} cols={1} rows={1}>
                  <button
                    type="button"
                    id="clear"
                    className="remove-image"
                    onClick={() => multiUploadRemoveHandler(index)}
                  >
                    x
                  </button>
                  <img src={res} alt="..." />
                </ImageListItem>
              ))}
            </ImageList>
            <div>
              <input
                type="file"
                className="custom-file-input"
                onChange={(e) => multiImagePreviewHandler(e)}
                multiple
                accept=".jpg,.png"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

UploadSection.propTypes = {
  changeFormValue: PropTypes.func,
};
export default UploadSection;
