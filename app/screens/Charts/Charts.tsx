import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { styles } from './Charts.styles';
import { course } from '../Course/course';
import { padding } from './data';
import { xDomain } from './data';
import { yDomain } from './data';
import { scatter } from './data';

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
import { COLORS } from '../../utils/colors';

export const Charts = () => {
  const cours = course();

  const arrUsd = [
    { x: 2018, y: cours[0]! },
    { x: 2019, y: cours[2]! },
    { x: 2020, y: cours[4]! },
  ];
  const arrEur = [
    { x: 2018, y: cours[1]! },
    { x: 2019, y: cours[3]! },
    { x: 2020, y: cours[5]! },
  ];

  const dataUsd = arrUsd.map(el => el);
  const dataEur = arrEur.map(el => el);

  return (
    <View>
      <Text>Динамика изменения курса UAH-USD</Text>
      <Chart
        style={{ height: styles.charts.height, width: styles.charts.width }}
        data={dataUsd}
        padding={padding}
        xDomain={xDomain}
        yDomain={yDomain}>
        <VerticalAxis
          tickCount={11}
          theme={{ labels: { formatter: v => v.toFixed(2) } }}
        />
        <HorizontalAxis tickCount={3} />
        <Area
          theme={{
            gradient: {
              from: { color: COLORS.CONCRETE },
              to: { color: COLORS.CONCRETE },
            },
          }}
        />
        <Line
          theme={{
            stroke: { color: COLORS.CONIFER, width: 5 },
            scatter: { default: scatter },
          }}
        />
      </Chart>

      <Text>Динамика изменения курса UAH-EUR</Text>
      <Chart
        style={{ height: styles.charts.height, width: styles.charts.width }}
        data={dataEur}
        padding={padding}
        xDomain={xDomain}
        yDomain={yDomain}>
        <VerticalAxis
          tickCount={11}
          theme={{ labels: { formatter: v => v.toFixed(2) } }}
        />

        <HorizontalAxis tickCount={3} />
        <Area
          theme={{
            gradient: {
              from: { color: COLORS.CONCRETE },
              to: { color: COLORS.CONCRETE },
            },
          }}
        />
        <Line
          theme={{
            stroke: { color: COLORS.CONIFER, width: 5 },
            scatter: { default: scatter },
          }}
        />
      </Chart>
    </View>
  );
};
