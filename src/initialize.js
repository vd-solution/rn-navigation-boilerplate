import {Navigation} from 'react-native-navigation';
import {setupScreens, defaultOptions, setupAuthNavigator} from './navigations';

const initialize = () => {
  setupScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    setupAuthNavigator();
    defaultOptions();
  });
};

export default initialize;
