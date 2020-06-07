import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import useLocale from 'locale';

export const HomeScreen = () => {
  const {t} = useLocale();
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>Title: {t('home.title')}</Text>
    </View>
  );
};
