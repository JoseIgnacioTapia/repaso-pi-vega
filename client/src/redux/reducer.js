import { CLEAN_USERS, GET_USERS } from "./actions";

const initialState = {
  users: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case CLEAN_USERS:
      return {
        ...state,
        users: [],
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
