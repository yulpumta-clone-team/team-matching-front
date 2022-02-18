import { combineReducers } from 'redux';
import user from './user_reducer';
import team from './team_reducer';

const rootReducer = combineReducers({
  user,
  team,
});

export default rootReducer;
