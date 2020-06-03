const ZOMATO_USER_KEY = "7f899a00ed70e95dd8dbda4c78c3b426";

// Define a method to call Zomato Cities API
// refer https://developers.zomato.com/api
// It takes userLocation as input and returns the response object
// from the api.
export const getRestaurants = async (
  userLocation,
  cuisine,
  offset,
  sortBy = "rating",
  order = "desc"
) => {
  //https://developers.zomato.com/api/v2.1/search?q=${cuisine}&lat=${userLocation.coords.latitude}&lon=${userLocation.coords.longitude}&radius=5000000
  try {
    const url = `https://developers.zomato.com/api/v2.1/search?q=${cuisine}&start=${offset}&count=10&lat=${userLocation.coords.latitude}&lon=${userLocation.coords.longitude}&sort=${sortBy}&order=${order} `;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "user-key": ZOMATO_USER_KEY,
      },
    });
    const responseJson = await response.json();
    const restaurants = responseJson.restaurants;
    return restaurants;
  } catch (error) {
    console.error(error);
  }
};
