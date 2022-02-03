import React, { useEffect } from 'react';
import { exchange18Slice } from '../../redux/slices';
import { exchange19Slice } from '../../redux/slices';
import { useAppDispatch, useAppSelector } from '../../hooks';

const dispatch = useAppDispatch();

useEffect(() => {
  dispatch(exchange18Slice.actions.getCourseStatistic18());
  dispatch(exchange19Slice.actions.getCourseStatistic19());
}, [dispatch]);

export const data18usd = useAppSelector(
  state => state.course18.course?.exchangeRate[16].saleRateNB,
);
export const data18eur = useAppSelector(
  state => state.course18.course?.exchangeRate[22].saleRateNB,
);
export const data19usd = useAppSelector(
  state => state.course19.course?.exchangeRate[16].saleRateNB,
);
export const data19eur = useAppSelector(
  state => state.course19.course?.exchangeRate[22].saleRateNB,
);
