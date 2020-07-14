const initialState = {
  city: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  currentCity: `Amsterdam`,
  offersSortType: 0,
  filteredOffers: [],
  pinData: [],
  offers: [{
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/1.png`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "id": 1,
    "images": [`img/1.png`, `img/2.png`],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.5514938496378,
      "longitude": 4.1738775378,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/1.png`,
    "price": 130,
    "rating": 4.2,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  },
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/1.png`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "id": 2,
    "images": [`img/1.png`, `img/2.png`],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/1.png`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  },
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Paris`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/1.png`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "id": 3,
    "images": [`img/1.png`, `img/2.png`],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/1.png`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  }]
};

const Actions = {
  SET_CURRENT_CITY: `offer/SET_CURRENT_CITY`,
  SET_FILTERED_OFFERS: `offers/SET_FILTERED_OFFERS`,
  SET_PIN_DATA: `offers/SET_PIN_DATA`
};

export const ActionCreater = {
  setCurrentCity: (payload) => ({type: Actions.SET_CURRENT_CITY, payload}),
  setFilteredOffers: (payload) => ({type: Actions.SET_FILTERED_OFFERS, payload}),
  setPinData: (payload) => ({type: Actions.SET_PIN_DATA, payload}),
};

const offersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_CURRENT_CITY: {
      return Object.assign({},
          state,
          {currentCity: action.payload}
      );
    }
    case Actions.SET_FILTERED_OFFERS: {
      return Object.assign({},
          state,
          {filteredOffers: action.payload}
      );
    }
    case Actions.SET_PIN_DATA: {
      return Object.assign({},
          state,
          {pinData: action.payload}
      );
    }
    default: return state;
  }
};

export default offersReducer;
