const INITIAL_STATE = {
  isAuthenticated: false,
};

const TYPE_LOGIN = "TYPE_LOGIN";
const TYPE_LOGOUT = "TYPE_LOGOUT";

//AUTH REDUCER
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE_LOGIN:
      return { ...state, ...action.payload };
    case TYPE_LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

//AUTH ACTION

const loginAction = (payload) => ({
  type: TYPE_LOGIN,
  payload,
});

const logoutAction = () => ({
  type: TYPE_LOGOUT,
});

export { loginAction, logoutAction, userReducer };
