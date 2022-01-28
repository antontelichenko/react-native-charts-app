import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { exchangeSlice19 } from '../../redux/slices'
import { HomeScreen } from '..'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { styles } from './Course.styles'

export const Course19 = () => {
  const dispatch = useAppDispatch()
  const data19 = useAppSelector((state) => state.course19)

  useEffect(() => {
    dispatch(exchangeSlice19.actions.getCourseStatistic19())
  }, [dispatch])

  return (
    <View style={styles.container}>
      <HomeScreen />
      <Text style={styles.text}>
        Курс национального банка на 01.01.2019{'\n'}
      </Text>
      <Text style={styles.textCourse}>
        USD: {data19.course?.exchangeRate[16].saleRateNB}
        {'\n'}
      </Text>
      <Text style={styles.textCourse}>
        EUR: {data19.course?.exchangeRate[22].saleRateNB}
      </Text>
    </View>
  )
}
