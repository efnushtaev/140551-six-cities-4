import {ResponsedStatus} from './../../constants/const.js'

const initialState = {
  comments: null,
  isReviewFormDisabled: false
};

const Actions = {
  SET_COMMENTS: `property/SET_COMMENTS`,
  UPDATED_IS_REVIEW_FORM_DISABLED: `property/UPDATED_IS_REVIEW_FORM_DISABLED`,
  SET_NEARBY_OFFERS: `property/SET_NEARBY_OFFERS`
};

export const ActionCreateProperty = {
  setNewComment: (payload) => ({type: Actions.SET_COMMENTS, payload}),
  updatedIsReviewFormDisabled: (payload) => ({type: Actions.UPDATED_IS_REVIEW_FORM_DISABLED, payload}),
  setNearbyOffers: (payload) => ({type: Actions.SET_NEARBY_OFFERS, payload})
};

export const OperationProperty = {
  loadingComment: (offerId) => async (dispatch, getState, api) => {
    try {
      let response = await api.get(`/comments/${offerId}`)
      if (response.status === ResponsedStatus.SUCCESS) {
        dispatch(ActionCreateProperty.setNewComment(response.data))
      }
    } catch (err) {
      console.log(`comments_get: ${err}`)
    }
  },
  postComment: (text, rating, offerId) => async (dispatch, getState, api) => {
    try {
      let response = await api.post(`/comments/${offerId}`, {comment: text, rating})
      if (response.status === ResponsedStatus.SUCCESS) {
        dispatch(ActionCreateProperty.setNewComment(response.data))
      }
    } catch (err) {
      console.log(`comments_get: ${err}`)
    }
  },
  loadingNearbyOffers: (offerId) => async (dispatch, getState, api) => {
    try {
      let response = await api.get(`/hotels/${offerId}/nearby`)
      if (response.status === ResponsedStatus.SUCCESS) {
        dispatch(ActionCreateProperty.setNearbyOffers(response.data))
      }
    } catch(err) {
      console.log(`nearby_get: ${err}`)
    }
  }
}

const reducerProperty = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_COMMENTS: {
      return Object.assign({},
        state,
        {comments: action.payload}
      );
    }
    case Actions.UPDATED_IS_REVIEW_FORM_DISABLED: {
      return Object.assign({},
        state,
        {isReviewFormDisabled: action.payload}
      );
    }
    case Actions.SET_NEARBY_OFFERS: {
      return Object.assign({},
        state,
        {nearbyOffers: action.payload}
      );
    }
    default: return state;
  }
};

export default reducerProperty;
