
import { types } from "./types";



/*      SE DECLARARA EN EL PROVIDER
const init= {
  isLogged: false,
  user,
};
*/
export const AuthReducer = (state = {}, action) => {

  switch (action.type) {


    case types.field:
          return {
              ...state,
              userProfile:action.payload
          };
    case types.login:
      return {
        ...state,
        isLogged: true,
        userProfile: action.payload
        
      };

    case types.logout:
          return {
              ...state,
              isLogged: false
      };
      case types.register:
        return {
          ...state,
          isLogged: false,
          userProfile: action.payload
          
        };
  
    default:
      return state;
  }


};
