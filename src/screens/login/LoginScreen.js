import React from 'react';
import {Button, View, Text} from 'react-native';
import {navigateToMain} from 'navigation/navigator';
import styles from './styles';
import useLocale from 'locale';

export const LoginScreen = () => {
  const {t, setLocale} = useLocale();
  const onPressGoHome = () => {
    navigateToMain();
  };

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Text>Translate: {t('hello')}</Text>
      <Button title="Go To Home" onPress={onPressGoHome} />
      <Button title="Change to KM" onPress={() => setLocale('km')} />
      <Button title="Change to EN" onPress={() => setLocale('en')} />
      <Button title="Change to JA" onPress={() => setLocale('ja')} />
    </View>
  );
};
