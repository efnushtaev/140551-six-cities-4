export const getOffers = (state) => {
  return state.offers.offers;
};
export const getCitysList = (state) => {
  return state.offers.city;
};
export const getCurrentCity = (state) => {
  return state.offers.currentCity;
};
export const getFilteredOffers = (state) => {
  return state.offers.filteredOffers;
};
export const getPinData = (state) => {
  return state.offers.pinData;
};
export const getCurrentCityLocation = (state) => {
  return state.offers.currentCityLocation;
};
export const getCityZoom = (state) => {
  return state.offers.cityZoom;
};