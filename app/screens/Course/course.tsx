import React, { useEffect } from 'react';
import { exchange18Slice } from '../../redux/slices';
import { exchange19Slice } from '../../redux/slices';
import { exchange20Slice } from '../../redux/slices';
import { useAppDispatch, useAppSelector } from '../../hooks';

export const course = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(exchange18Slice.actions.getCourseStatistic18());
    dispatch(exchange19Slice.actions.getCourseStatistic19());
    dispatch(exchange20Slice.actions.getCourseStatistic20());
  }, [dispatch]);

  const data18usd = useAppSelector(
    state => state.course18.course?.exchangeRate[16].saleRateNB,
  );
  const data18eur = useAppSelector(
    state => state.course18.course?.exchangeRate[22].saleRateNB,
  );
  const data19usd = useAppSelector(
    state => state.course19.course?.exchangeRate[16].saleRateNB,
  );
  const data19eur = useAppSelector(
    state => state.course19.course?.exchangeRate[22].saleRateNB,
  );
  const data20usd = useAppSelector(
    state => state.course20.course?.exchangeRate[23].saleRateNB,
  );
  const data20eur = useAppSelector(
    state => state.course20.course?.exchangeRate[8].saleRateNB,
  );

  return [data18usd, data18eur, data19usd, data19eur, data20usd, data20eur];
};
