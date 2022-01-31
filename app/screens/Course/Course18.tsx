import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { exchange18Slice } from '../../redux/slices'
import { HomeScreen } from '..'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { styles } from './Course.styles'

export const Course18 = () => {
  const dispatch = useAppDispatch()
  const data18 = useAppSelector((state) => state.course18)

  useEffect(() => {
    dispatch(exchange18Slice.actions.getCourseStatistic18())
  }, [dispatch])

  return (
    <View style={styles.container}>
      <HomeScreen />
      <Text style={styles.text}>
        Курс национального банка на 01.01.2018 {'\n'}
      </Text>
      <Text style={styles.textCourse}>
        USD: {data18.course?.exchangeRate[16].saleRateNB}
        {'\n'}
      </Text>
      <Text style={styles.textCourse}>
        EUR: {data18.course?.exchangeRate[22].saleRateNB}
      </Text>
    </View>
  )
}
