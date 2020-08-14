const INITIAL_STATE = {
  isAuthenticated: false,
};

const TYPE_LOGIN = "TYPE_LOGIN";
//AUTH REDUCER
const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE_LOGIN:
      return { ...state, isAuthenticated: action.payload.isAuthenticated };
    default:
      return state;
  }
};

//AUTH ACTION

const loginAction = ({ isAuthenticated }) => ({
  type: TYPE_LOGIN,
  payload: { isAuthenticated },
});

export { loginAction, authReducer };
