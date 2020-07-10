export const getOffers = (state) => {
  return state.offers[`offers`].filter((el) => {
    return el.city.name === state.offers.currentCity;
  });
};

export const getCity = (state) => {
  return state.offers.city;
};

export const getCurrentCity = (state) => {
  return state.offers.currentCity;
};
