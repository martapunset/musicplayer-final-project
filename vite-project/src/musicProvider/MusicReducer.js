import { types } from "./types";

     
const init= {
  isLogged: false,
  playlist,
};
export const MusicReducer = (state = {}, action) => {

  switch (action.type) {

    case types.homepage:
          return {
            ...state,
            isPlaying:false,
            playlist:action.payload
          };
    case types.search:
      return {
        ...state,
        isPlaying: false,
        playlist: action.payload
        
      };

    case types.likedSongs:
      return {
        ...state,
        isPlaying: false,
        playlist: action.payload
      };
      case types.library:
        return {
          ...state,
          isPlaying: false,
          playlist: action.payload
          
      };
      case types.profile:
        return {
          ...state,
          isPlaying: false,
          playlist: action.payload
          
        };
  
    default:
      return state;
  }
};
