import {combineReducers} from '@reduxjs/toolkit';

import inspector from './Inspector';
import session from './Session';
import theme from './Theme';

// create our root reducer
export default function createRootReducer() {
  return combineReducers({
    session,
    inspector,
    theme,
  });
}
