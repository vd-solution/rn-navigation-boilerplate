import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {HomeScreen} from '../screens/home/HomeScreen';
import {AccountScreen} from '../screens/account/AccountScreen';
import {LoginScreen} from '../screens/login/LoginScreen';
import {LiveScreen  } from '../screens/live/LiveScreen';
import iconSources from 'assets/tabs';

import {withReduxProvider} from '../state';

const getScreenName = name => `onlinebar.${name}`;

const tabOption = screenName => {
  return {
    options: {
      bottomTab: {
        icon: iconSources[screenName],
      },
    },
  };
};

const tabTopbarOption = () => {
  return {
    options: {
      topBar: {
        visible: false,
      },
    },
  };
};

const registerComponent = (name, Component) => {
  Navigation.registerComponent(
    getScreenName(name),
    () => gestureHandlerRootHOC(withReduxProvider(Component)),
    () => Component,
  );
};

export const setupScreens = () => {
  registerComponent('Home', HomeScreen);
  registerComponent('Live', LiveScreen);
  registerComponent('Login', LoginScreen);
  registerComponent('Account', AccountScreen);
};

export const defaultOptions = () => {
  Navigation.setDefaultOptions({
    bottomTabs: {
      backgroundColor: 'white',
    },
    bottomTab: {
      iconColor: '#ccc',
      selectedIconColor: '#f57c00',
    },
  });
};

export const setupAuthNavigator = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: getScreenName('Login'),
            },
          },
        ],
      },
    },
  });
};

export const setupTabNavogator = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BOTTOM_TAB_LAYOUT',
        options: {
          bottomTabs: {
            titleDisplayMode: 'alwaysShow',
          },
        },
        children: [
          {
            stack: {
              id: 'HOME_TAB',
              children: [
                {
                  component: {
                    name: getScreenName('Home'),
                    ...tabTopbarOption(),
                  },
                },
              ],
              ...tabOption('Home'),
            },
          },
          {
            stack: {
              id: 'LIVE_TAB',
              children: [
                {
                  component: {
                    name: getScreenName('Live'),
                    ...tabTopbarOption(),
                  },
                },
              ],
              ...tabOption('Live'),
            },
          },
          {
            stack: {
              id: 'ACCOUNT_TAB',
              children: [
                {
                  component: {
                    name: getScreenName('Account'),
                    ...tabTopbarOption(),
                  },
                },
              ],
              ...tabOption('Account'),
            },
          },
        ],
      },
    },
  });
};
