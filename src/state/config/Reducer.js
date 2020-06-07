import TYPES from './Type';
import createReducer from 'util/createReducer';

const initialState = {
  theme: 'light',
  locale: 'en',
};

export default createReducer(initialState, {
  [TYPES.CHANGE_THEME_CONFIG]: (state, {payload}) => {
    return {...state, theme: payload.theme};
  },
  [TYPES.CHANGE_LOCALE]: (state, {payload}) => {
    return {...state, locale: payload.locale};
  },
});

export const selectLocale = state => {
  return state.config.locale || 'en';
};
