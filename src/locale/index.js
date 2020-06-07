import {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectLocale} from 'state/config/Reducer';
import {changeLocale} from 'state/config/Actions';
import {get} from 'util/helper';
import en from './en';
import ja from './ja';
import km from './km';

const locales = {
  en,
  ja,
  km,
};

const useLocale = () => {
  const dispatch = useDispatch();
  const locale = useSelector(selectLocale);
  const currentLocalRef = useRef(locales[locale]);

  const setLocale = lang => {
    if (!lang) {
      return;
    }
    currentLocalRef.current = locales[lang];
    dispatch(changeLocale(lang));
  };

  const getTranslate = key => {
    const tranlsate = get(currentLocalRef.current, key);
    if (typeof tranlsate === 'undefined') {
      return `[Missing ${key}]`;
    }
    return tranlsate;
  };

  return {
    locale,
    setLocale,
    t: getTranslate,
  };
};

export default useLocale;
