import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { styles } from './charts.styles';

import {
  PADDING,
  X_DOMAIN,
  Y_DOMAIN,
  scatter,
  stroke,
  tickCount,
  AreaTheme,
  LineTheme,
} from './Charts.data';

import { COLORS } from '../../utils/colors';

import { exchangeSlice } from '../../redux/slices';

import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from 'react-native-responsive-linechart';

export const Charts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      exchangeSlice.actions.getCourseStatistic({
        type: 'getCourseStatistic',
        payload: '18',
      }),
    );
    dispatch(
      exchangeSlice.actions.getCourseStatistic({
        type: 'getCourseStatistic',
        payload: '19',
      }),
    );
    dispatch(
      exchangeSlice.actions.getCourseStatistic({
        payload: '20',
        type: 'getCourseStatistic',
      }),
    );
  }, [dispatch]);

  const data18usd = useAppSelector(
    state => state.course.course['2018'].exchangeRate[16].saleRateNB,
  );

  const data18eur = useAppSelector(
    state => state.course.course['2018'].exchangeRate[22].saleRateNB,
  );

  const data19usd = useAppSelector(
    state => state.course.course['2019'].exchangeRate[16].saleRateNB,
  );

  const data19eur = useAppSelector(
    state => state.course.course['2019'].exchangeRate[22].saleRateNB,
  );

  const data20usd = useAppSelector(
    state => state.course.course['2020'].exchangeRate[23].saleRateNB,
  );

  const data20eur = useAppSelector(
    state => state.course.course['2020'].exchangeRate[8].saleRateNB,
  );

  const arrUsd = [
    { x: 2018, y: data18usd! },
    { x: 2019, y: data19usd! },
    { x: 2020, y: data20usd! },
  ];
  const arrEur = [
    { x: 2018, y: data18eur! },
    { x: 2019, y: data19eur! },
    { x: 2020, y: data20eur! },
  ];

  const dataUsd = arrUsd.map(el => el);
  const dataEur = arrEur.map(el => el);

  return (
    <View>
      <Text>Change of course UAH-USD</Text>
      <Chart
        style={{ height: styles.charts.height, width: styles.charts.width }}
        data={dataUsd}
        padding={PADDING}
        xDomain={X_DOMAIN}
        yDomain={Y_DOMAIN}>
        <VerticalAxis
          tickCount={11}
          theme={{ labels: { formatter: v => v.toFixed(2) } }}
        />
        <HorizontalAxis tickCount={tickCount} />
        <Area theme={AreaTheme} />
        <Line theme={LineTheme} />
      </Chart>

      <Text>Change of course UAH-EUR</Text>
      <Chart
        style={{ height: styles.charts.height, width: styles.charts.width }}
        data={dataEur}
        padding={PADDING}
        xDomain={X_DOMAIN}
        yDomain={Y_DOMAIN}>
        <VerticalAxis
          tickCount={11}
          theme={{ labels: { formatter: v => v.toFixed(2) } }}
        />
        <HorizontalAxis tickCount={tickCount} />
        <Area theme={AreaTheme} />
        <Line theme={LineTheme} />
      </Chart>
    </View>
  );
};
