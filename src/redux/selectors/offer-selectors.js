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
  const filteredOffers = getFilteredOffers(state);
  return filteredOffers != null
    ? filteredOffers.map((el) => ({
      id: el.id,
      locationPair: [el.location.latitude, el.location.longitude],
    }))
    : null;
};
export const getCurrentCityLocation = (state) => {
  const filteredOffers = getFilteredOffers(state);
  return filteredOffers != null
    ? [filteredOffers[0].city.location.latitude, filteredOffers[0].city.location.longitude]
    : null;
};
export const getCityZoom = (state) => {
  const filteredOffers = getFilteredOffers(state);
  return filteredOffers != null
    ? filteredOffers[0].city.location.zoom
    : null;
};
