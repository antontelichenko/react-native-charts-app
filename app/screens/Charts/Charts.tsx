import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks';

import {
  exchange18Slice,
  exchange19Slice,
  exchange20Slice,
} from '../../redux/slices';

import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from 'react-native-responsive-linechart';

export const Charts = () => {
  const dispatch = useAppDispatch();
  const data18 = useAppSelector(state => state.course18);
  const data19 = useAppSelector(state => state.course19);
  const data20 = useAppSelector(state => state.course20);

  useEffect(() => {
    dispatch(exchange18Slice.actions.getCourseStatistic18());
    dispatch(exchange19Slice.actions.getCourseStatistic19());
    dispatch(exchange20Slice.actions.getCourseStatistic20());
  }, [dispatch]);

  const usd18 = data18.course?.exchangeRate[16].saleRateNB;
  const usd19 = data19.course?.exchangeRate[16].saleRateNB;
  const usd20 = data20.course?.exchangeRate[23].saleRateNB;
  const eur18 = data18.course?.exchangeRate[22].saleRateNB;
  const eur19 = data19.course?.exchangeRate[22].saleRateNB;
  const eur20 = data20.course?.exchangeRate[8].saleRateNB;

  return (
    <View>
      <Text>Динамика изменения курса UAH-USD</Text>
      <Chart
        style={{ height: 250, width: 400 }}
        data={[
          { x: 2018, y: usd18! },
          { x: 2019, y: usd19! },
          { x: 2020, y: usd20! },
        ]}
        padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
        xDomain={{ min: 2018, max: 2020 }}
        yDomain={{ min: 0, max: 30 }}>
        <VerticalAxis
          tickCount={11}
          theme={{ labels: { formatter: v => v.toFixed(2) } }}
        />
        <HorizontalAxis tickCount={3} />
        <Area
          theme={{
            gradient: {
              from: { color: '#f3f3f3' },
              to: { color: '#f3f3f3' },
            },
          }}
        />
        <Line
          theme={{
            stroke: { color: '#aadd33', width: 5 },
            scatter: { default: { width: 6, height: 6, rx: 2 } },
          }}
        />
      </Chart>

      <Text>Динамика изменения курса UAH-EUR</Text>
      <Chart
        style={{ height: 250, width: 400 }}
        data={[
          { x: 2018, y: eur18! },
          { x: 2019, y: eur19! },
          { x: 2020, y: eur20! },
        ]}
        padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
        xDomain={{ min: 2018, max: 2020 }}
        yDomain={{ min: 0, max: 36 }}>
        <VerticalAxis
          tickCount={11}
          theme={{ labels: { formatter: v => v.toFixed(2) } }}
        />
        <HorizontalAxis tickCount={3} />
        <Area
          theme={{
            gradient: {
              from: { color: '#f3f3f3' },
              to: { color: '#f3f3f3' },
            },
          }}
        />
        <Line
          theme={{
            stroke: { color: '#aadd33', width: 5 },
            scatter: { default: { width: 6, height: 6, rx: 2 } },
          }}
        />
      </Chart>
    </View>
  );
};
