const INITIAL_STATE = {
  isAuthenticated: false,
};

const TYPE_LOGIN = "TYPE_LOGIN";
//AUTH REDUCER
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE_LOGIN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

//AUTH ACTION

const loginAction = (payload) => ({
  type: TYPE_LOGIN,
  payload,
});

export { loginAction, userReducer };
