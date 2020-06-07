import TYPES from './Type';

export const changeLocale = locale => dispatch => {
  dispatch({type: TYPES.CHANGE_LOCALE, payload: {locale}});
};
