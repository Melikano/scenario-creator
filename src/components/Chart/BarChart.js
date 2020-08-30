//@flow
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {Svg, G, Rect, Line} from 'react-native-svg';
import * as d3 from 'd3';

const GRAPH_MARGIN = 10;
const GRAPH_BAR_WIDTH = 3;
const colors = {
  axis: '#E4E4E4',
  bars: '#15AD13',
};

const {width, height} = Dimensions.get('window');
type BarChartProps = {
  data: Array<any>,
};
const BarChart = ({data}: BarChartProps) => {
  // Dimensions
  const SVGHeight = 200;
  const SVGWidth = width;
  const graphHeight = SVGHeight - 2 * GRAPH_MARGIN;
  const graphWidth = SVGWidth - 2 * GRAPH_MARGIN;

  // X scale point
  const xDomain = data.map(item => item.label);
  const xRange = [0, graphWidth];
  const x = d3
    .scalePoint()
    .domain(xDomain)
    .range(xRange)
    .padding(1);

  // Y scale linear
  const yDomain = [0, d3.max(data, d => d.value)];
  const yRange = [0, graphHeight];
  const y = d3
    .scaleLinear()
    .domain(yDomain)
    .range(yRange);

  return (
    <Svg width={SVGWidth} height={SVGHeight}>
      <G y={graphHeight}>
        {/* bottom axis */}
        <Line
          x1="0"
          y1="2"
          x2={graphWidth}
          y2="2"
          stroke={colors.axis}
          strokeWidth="0.5"
        />
        {/* bars */}
        {data.map(item => {
          const left = x(item.label) - GRAPH_BAR_WIDTH / 2;
          console.log(item.value);
          return (
            <View style={{marginRight: 10}}>
              <Rect
                key={'bar' + item.label}
                x={x(item.label) - GRAPH_BAR_WIDTH / 2}
                y={y(item.value) * -1}
                rx={2.5}
                width={GRAPH_BAR_WIDTH}
                height={item.value === 0 ? 0 : y(item.value)}
                fill={colors.bars}
              />
              <Text
                style={{
                  position: 'absolute',
                  left,
                  fontSize: 8,
                  top: 180,
                }}>
                {Math.floor(item.value)}
              </Text>
            </View>
          );
        })}
      </G>
    </Svg>
  );
};
export default BarChart;
