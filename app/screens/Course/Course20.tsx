import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { exchangeSlice_20 } from '../../redux/slices';
import { useAppDispatch, useAppSelector } from '../../hooks';

export const Course20 = () =>{
const dispatch = useAppDispatch();
const data20 = useAppSelector(state=>state.course_20)

console.tron.log('20', data20.course)

useEffect(()=>{
dispatch(exchangeSlice_20.actions.getCourseStatistic20());
},[dispatch])

return (
    <View>
    <Text>Курс валют национального банка на 01.01.2020</Text>
    <Text>USD</Text>
    <Text>{data20.course.exchangeRate[16].saleRateNB}</Text>
    <Text>EUR</Text>
    <Text></Text>
    <Text>{data20.course.exchangeRate[22].saleRateNB}</Text>
    
    
    
    
    </View>
)
}