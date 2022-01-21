import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { exchangeSlice_18 } from '../../redux/slices'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { styles } from './Course.styles'

export const Course18 = () => {
  const dispatch = useAppDispatch()
  const data18 = useAppSelector((state) => state.course_18)

  useEffect(() => {
    dispatch(exchangeSlice_18.actions.getCourseStatistic())
  }, [dispatch])
  console.tron.log('18', data18.course)

  return (
    <View style={styles.titleContainer}>
      <Text>Курс валют национального банка на 01.01.2018</Text>
      <Text>USD</Text>
      <Text>{data18.course.exchangeRate[16].saleRateNB}</Text>
      <Text>EUR</Text>
      <Text>{data18.course.exchangeRate[22].saleRateNB}</Text>
    </View>
  )
}
