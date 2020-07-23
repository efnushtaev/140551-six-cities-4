const initialState = {
  isAuth: false
};

const Actions = {
  UPDATE_AUTH_STATUS: `auth/UPDATE_AUTH_STATUS`,
  SET_AUTH_INFO: `auth/SET_AUTH_INFO`,
};

export const ActionCreateAuth = {
  updateAuthStatus: (payload) => ({type: Actions.UPDATE_AUTH_STATUS, payload}),
  setAuthInfo: (payload) => ({type: Actions.SET_AUTH_INFO, payload})
};

export const authOperations = {
  updateAuthStatus: (email, password) => async (dispatch, getState, api) => {
    try{
      let response = await api.post(`/login`, {email, password})
      if (response.status === 200) {
        dispatch(ActionCreateAuth.updateAuthStatus(true))
        dispatch(authOperations.setAuthInfo())
      } console.log('SIGN IN ERROR: ', response.status)
    } catch(err) {
      console.log(err)
    }
  },

  setAuthInfo: () => async (dispatch, getState, api) => {
    try{
      let response = await api.get(`/login`)
      if (response.status === 200) {
        dispatch(ActionCreateAuth.setAuthInfo(response.data))
        dispatch(ActionCreateAuth.updateAuthStatus(true))
      } console.log('SIGN IN ERROR: ', response.status)
    } catch(err) {
      console.log(err)
    }
  }

}

const offersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.UPDATE_AUTH_STATUS: {
      return Object.assign({},
        state,
        {isAuth: action.payload}
      );
    }
    case Actions.SET_AUTH_INFO: {
      return Object.assign({},
        state,
        {...action.payload}
      );
    }
    default: return state;
  }
};

export default offersReducer;
