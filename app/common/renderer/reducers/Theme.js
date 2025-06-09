import {SET_THEME} from '../actions/Theme';

const INITIAL_STATE = {
  isDarkMode: false,
};

export default function theme(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        isDarkMode: action.isDarkMode,
      };
    default:
      return state;
  }
}
