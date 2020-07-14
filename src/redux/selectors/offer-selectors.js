export const getOffers = (state) => {
  const offers = state.offers[`offers`];
  return offers.filter((el) => {
    return el.city.name === state.offers.currentCity;
  });
};

export const getCity = (state) => {
  return state.offers.city;
};

export const getCurrentCity = (state) => {
  return state.offers.currentCity;
};

export const getCityLocation = (state) => {
  const curentOffers = getOffers(state);
  if (curentOffers.length > 0) {
    const cityCords = getOffers(state)[0].city.location;
    let locationPair = [cityCords.latitude, cityCords.longitude];
    return locationPair;
  } return null;
};

export const getPinData = (state) => {
  const curentOffersCount = getOffers(state).length;
  if (curentOffersCount > 0) {
    return getOffers(state).map((e) => {
      let objectInstance = {
        id: e.id,
        locationPair: [e.location.latitude, e.location.longitude],
      };
      return objectInstance;
    });
  } return null;
};

export const getCityZoom = (state) => {
  const curentOffersCount = getOffers(state).length;
  if (curentOffersCount > 0) {
    return getOffers(state)[0].city.location.zoom;
  } return null;
}
