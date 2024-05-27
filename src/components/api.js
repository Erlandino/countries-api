// Async function to call for the countries api
async function countriesApiCall() {
  try {
    // Api call
    const res = await fetch("https://restcountries.com/v3.1/all");

    // Handles the data received from api call and stores it in countries state
    const data = await res.json();

    return data;

    // Gives error message in console when there is an error
  } catch (error) {
    console.error(`Could not retrieve country data: ${error}`);
  }
}
export { countriesApiCall };
