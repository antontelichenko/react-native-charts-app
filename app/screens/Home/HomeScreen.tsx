import React, { useCallback } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IMAGES } from '../../assets';

import { DefaultText } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { userSlice } from '../../redux/slices';
import { TEST_PASSWORD, TEST_USERNAME } from './HomeScreen.dummy';
import { IHomeScreenProps } from './HomeScreen.props';
import { styles } from './HomeScreen.styles';

export const HomeScreen: React.FC<IHomeScreenProps> = () => {
  const user = useAppSelector(state => state.user.user);

  const dispatch = useAppDispatch();

  const onTestDispatchAction = useCallback(() => {
    dispatch(
      userSlice.actions.loginUser({
        email: TEST_USERNAME,
        password: TEST_PASSWORD,
      }),
    );
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <Image source={IMAGES.LOGO} style={styles.logo} />
          <DefaultText preset="title">Beyond Codeline</DefaultText>
        </View>
        <DefaultText preset="default" style={styles.description}>
          The Best React Native Boilerplate
        </DefaultText>

        <TouchableOpacity
          onPress={onTestDispatchAction}
          style={styles.dispatchTestButtonContainer}>
          <DefaultText preset="default" style={styles.dispatchTestButtonText}>
            Dispatch action!
          </DefaultText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
