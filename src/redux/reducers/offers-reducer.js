const initialState = {
  city: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  currentOfferId: null,
  offers: null,
  currentCity: `Amsterdam`,
  filteredOffers: null,
  pinData: null,
  currentCityLocation: null,
  cityZoom: null,
  offersSortType: 0
};

const Actions = {
  SET_OFFERS: `offers/SET_OFFERS`,
  SET_CURRENT_CITY: `offer/SET_CURRENT_CITY`,
  SET_CURRENT_CITY_DATA: `offers/SET_CURRENT_CITY_DATA`,
  SET_CURRENT_OFFER_ID: `offers/SET_CURRENT_OFFER_ID`,
};

export const ActionCreaterOffers = {
  setOffers: (payload) => ({type: Actions.SET_OFFERS, payload}),
  setCurrentCity: (payload) => ({type: Actions.SET_CURRENT_CITY, payload}),
  setCurrentCityData: () => ({type: Actions.SET_CURRENT_CITY_DATA}),
  setCurrentOfferId: (payload) => ({type: Actions.SET_CURRENT_OFFER_ID, payload}),
};

export const OperationsOffers = {
  loadingOffers: () => async (dispatch, getState, api) => {
    let response = await api.get(`/hotels`)
    dispatch(ActionCreaterOffers.setOffers(response.data))
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_OFFERS: {
      return Object.assign({},
          state,
          {offers: action.payload}
      );
    }
    case Actions.SET_CURRENT_CITY: {
      return Object.assign({},
          state,
          {currentCity: action.payload}
      );
    }
    case Actions.SET_CURRENT_OFFER_ID: {
      return Object.assign({},
        state,
        {currentOfferId: action.payload}
        );
    }
    case Actions.SET_CURRENT_CITY_DATA: {
      function getFilteredOffers(offers) {
        return offers.filter((el) => {
          return el.city.name === state.currentCity;
        })
      }
      function getCityZoom(filteredOffers) {
        return filteredOffers.length > 0
          ? filteredOffers[0].city.location.zoom
          : null
      }
      function getCityLocation(filteredOffers) {
        const cityCords = filteredOffers[0].city.location;
        return filteredOffers.length > 0
          ? [cityCords.latitude, cityCords.longitude]
          : null;
      }
      function getPinData(filteredOffers) {
        return filteredOffers.length > 0
          ? filteredOffers.map((el) => ({
                id: el.id,
                locationPair: [el.location.latitude, el.location.longitude],
            }))
          : null
      }
      return Object.assign({},
        state,
        { filteredOffers: getFilteredOffers(state.offers),
          pinData: getPinData(getFilteredOffers(state.offers)),
          currentCityLocation: getCityLocation(getFilteredOffers(state.offers)),
          cityZoom: getCityZoom(getFilteredOffers(state.offers))
        }
      );
    }
    default: return state;
  }
};

export default authReducer;
