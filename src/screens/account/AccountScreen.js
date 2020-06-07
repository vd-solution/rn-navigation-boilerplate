import React from 'react';
import {Button, View, Text} from 'react-native';
import styles from './styles';
import {navigateToAuth} from 'navigation/navigator';
import Config from 'react-native-config';
import {useSelector} from 'react-redux';
import useLocale from 'locale';

const VERSION = Config.APP_VERSION;

export const AccountScreen = () => {
  const {locale} = useLocale();
  const config = useSelector(state => state.config);
  const onLogout = () => {
    navigateToAuth();
  };

  return (
    <View style={styles.container}>
      <Text>AccountScreen</Text>
      <Text>App Version => {VERSION}</Text>
      <Text>Theme => {config.theme}</Text>
      <Text>Current Locale => {locale}</Text>
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
};
