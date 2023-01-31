import { types } from "./types";

/*      SE DECLARARA EN EL PROVIDER
const init= {
  isLogged: false,
  user,
};
*/
export const MusicReducer = (state = {}, action) => {

  switch (action.type) {

    case types.field:
          return {
              ...state,
              user:action.payload
          };
    case types.login:
      return {
        ...state,
        isLogged: true,
        user: action.payload
        
      };

    case types.logout:
      return {
        ...state,
        isLogged: false,
        user: {}
      };
      case types.register:
        return {
          ...state,
          isLogged: false,
          user: action.payload
          
        };
  
    default:
      return state;
  }
};
