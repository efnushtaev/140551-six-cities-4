export const getCurrentOffer = (state) => {
  return state.offers.offers.filter((el) => {
    return el.id === state.offers.currentOfferId;
  })[0];
}
export const getCurrentOfferId = (state) => {
  return state.offers.currentOfferId;
}
export const getComments = (state) => {
  return state.property.comments;
}
export const getNearby = (state) => {
  return state.property.nearbyOffers;
}
export const getPinDataNearby = (state) => {
  const offers = getNearby(state);
  return offers != null
    ? offers.map((el) => ({
      id: el.id,
      locationPair: [el.location.latitude, el.location.longitude],
    }))
    : null;
};
export const getCurrentCityLocationNearby = (state) => {
  const offers = getNearby(state);
  return offers != null
    ? [offers[0].city.location.latitude, offers[0].city.location.longitude]
    : null;
};
export const getCityZoomNearby = (state) => {
  const offers = getNearby(state);
  return offers != null
    ? offers[0].city.location.zoom
    : null;
};
