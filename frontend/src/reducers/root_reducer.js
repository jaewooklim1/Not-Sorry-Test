import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer'; 
import entities from './entities/entities_reducer'; 
import ui from './ui_reducer'; 

const RootReducer = combineReducers({
  entities, 
  session: sessionReducer,
  errors: errorsReducer, 
  ui
});

export default RootReducer;