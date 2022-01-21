import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { exchangeSlice_19 } from '../../redux/slices';
import { useAppDispatch, useAppSelector } from '../../hooks';

export const Course19 = () =>{
const dispatch = useAppDispatch();
const data19 = useAppSelector(state=>state.course_19)
console.tron.log( data19.course)

  useEffect(()=>{
  dispatch(exchangeSlice_19.actions.getCourseStatistic());
  },[dispatch])

console.tron.log('19',data19.course)

return (
    <View>
    <Text>Курс валют национального банка на 01.01.2019</Text>
    <Text>USD</Text>
    <Text>{data19.course.exchangeRate[16].saleRateNB}</Text>
    <Text>EUR</Text>
    <Text></Text>
    <Text>{data19.course.exchangeRate[22].saleRateNB}</Text>
    </View>
)
}