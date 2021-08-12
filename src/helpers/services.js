/**
 * Function responsible to perform an http request to https://xegr-geography.herokuapp.com/places/autocomplete
 * on every user change
 * @param userInput - user input fro request param
 * @param setOptions - function setting api response options
 * @param setRequestError - function setting api response error
 */
// eslint-disable-next-line import/prefer-default-export
export function getAreas(userInput, setOptions, setRequestError) {
  fetch(`http://localhost:8080/https://xegr-geography.herokuapp.com/places/autocomplete?input=${userInput}`)
  // eslint-disable-next-line consistent-return
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      // eslint-disable-next-line no-unused-expressions
      response && response.json().then((data) => {
        setOptions(data);
      });
    })
    .catch((error) => {
      setRequestError(error.toString());
    });
}
