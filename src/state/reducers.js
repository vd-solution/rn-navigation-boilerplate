import {combineReducers} from 'redux';
import configReducer from './config/Reducer';

const rootReducers = combineReducers({
  config: configReducer,
});

export default rootReducers;
