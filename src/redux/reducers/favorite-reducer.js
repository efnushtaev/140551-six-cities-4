import {ResponsedStatus} from '../../constants/const.js'

const initialState = {
  favoriteList: null
};

const Actions = {
  SET_FAVORITE: `favorite/SET_FAVORITE`,
  UPDATE_FAVORITE_LIST: `favorite/UPDATE_FAVORITE_LIST`
};

export const ActionCreaterFavorite = {
  setFavorite: (payload) => ({type: Actions.SET_FAVORITE, payload}),
  updateFavoriteList: (payload) => ({type: Actions.UPDATE_FAVORITE_LIST, payload})
};

export const OperationFavorite = {
  loadingFavorite: () => async (dispatch, getState, api) => {
    try {
      let response = await api.get(`/favorite`)
      if (response.status === ResponsedStatus.SUCCESS) {
        dispatch(ActionCreaterFavorite.setFavorite(response.data))
      }
    } catch(err) {
      console.log(`favorite_get: ${err}`)
    }
  },
  postFavorite: (offerId, status) => async (dispatch, getState, api) => {
    try {
      let response = await api.post(`/favorite/${offerId}/${Number(status)}`, {})
      if (response.status === ResponsedStatus.SUCCESS) {
        dispatch(OperationFavorite.loadingFavorite(response.data))
      }
    } catch(err) {
      console.log(`favorite_post: ${err}`)
    }
  }
}

const reducerFavorite = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_FAVORITE: {
      return Object.assign({},
        state,
        {favoriteList: action.payload}
      );
    }
    case Actions.UPDATE_FAVORITE_LIST: {
      return Object.assign({},
        state,
        {favoriteList: [...state.favoriteList.filter((el) => el !== action.payload)]}
      );
    }
    default: return state;
  }
};

export default reducerFavorite;
