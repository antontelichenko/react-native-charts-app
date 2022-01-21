import React, {useCallback} from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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

  const navigation = useNavigation()


  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <Image source={IMAGES.LOGO} style={styles.logo} />
          <DefaultText preset="title">Beyond Codeline</DefaultText>
        </View>
        
      <TouchableOpacity onPress={()=>navigation.navigate('course18')}>
          <Text>Курс валют на 01.01.2018</Text>
      </TouchableOpacity>
 
      <TouchableOpacity onPress={()=>navigation.navigate('course19')}>
          <Text>
            Курс валют на 01.01.2019
          </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('course20')}>
          <Text >
            Курс валют на 01.01.2020
          </Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
};
