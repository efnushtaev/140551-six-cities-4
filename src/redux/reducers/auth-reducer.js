const initialState = {
  isAuth: false
};

const ResponsedStatus = {
  SUCCESS: 200,
  ERROR: 400,
  UNAUTHORIZED: 401
}

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
      if (response.status === ResponsedStatus.SUCCESS) {
        dispatch(ActionCreateAuth.updateAuthStatus(true))
        dispatch(authOperations.setAuthInfo())
      }
    } catch(err) {
      console.log('UPDATE AUTH STATUS ERROR: ',err)
    }
  },

  setAuthInfo: () => async (dispatch, getState, api) => {
    try{
      let response = await api.get(`/login`)
      if (response.status === ResponsedStatus.SUCCESS) {
        dispatch(ActionCreateAuth.setAuthInfo(response.data))
        dispatch(ActionCreateAuth.updateAuthStatus(true))
      }
    } catch(err) {
      console.log('SIGN-IN ERROR: ',err)
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
