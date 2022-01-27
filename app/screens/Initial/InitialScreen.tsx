import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import { DefaultText } from '../../components';
import { IInitialScreenProps } from './InitialScreen.props';
import { styles } from './InitialScreen.styles';

export const InitialScreen: React.FC<IInitialScreenProps> = ({
  navigation,
}) => {
  useEffect(() => {
    // TODO: Timeout for loading simulation. Replace it with data fetching
    setTimeout(() => navigation.replace('HomeStack'), 500);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.root}>
      <DefaultText preset="title">Loading simulation...</DefaultText>
    </SafeAreaView>
  );
};
