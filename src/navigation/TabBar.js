import React from 'react';
import styled, {css} from 'styled-components/native';
import {Animated, View} from 'react-native';
import PropTypes from 'prop-types';
import Fonts from '../constants/Fonts';

//Wrapper
const BOTTOM_PADDING = 10;

const Wrapper = styled.View`
  position: relative;
  flex-direction: row;
  width: 100%;
  elevation: 2;
  padding-bottom: ${BOTTOM_PADDING};
  padding-top: ${p => p.topPadding};
  padding-horizontal: ${p => p.verticalPadding};
  background-color: ${p => p.tabBarBackground};
  ${p => p.shadow && SHADOW};
`;

const TabButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 100;
  padding-vertical: 10;
  flex-grow: ${p => (p.isRouteActive ? p.labelLength / 10 + 1 : 1)};
`;

const Label = styled(Animated.Text)`
  color: #000;
  font-weight: bold;
  margin-right: ${p => (p.icon ? 8 : 0)};
  font-family: IRANSansMobileFaNum;
`;

const Dot = styled(Animated.View)`
  position: absolute;
  top: ${p => p.topPadding};
  width: ${p => p.width};
  height: ${p => p.height};
  border-radius: 100;
  background-color: ${p => p.activeTabBackground};
  z-index: -1;
`;

export default class TabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevPos: this.props.verticalPadding,
      pos: 0,
      width: 0,
      height: 0,
      animatedPos: new Animated.Value(1),
    };
  }

  animation = value =>
    Animated.spring(value, {
      toValue: 1,
    });

  componentDidMount() {
    this.animation(this.state.animatedPos).start(() => {
      this.setState({
        prevPos: this.props.verticalPadding,
      });
      this.state.animatedPos.setValue(0);
    });
  }

  render() {
    const {descriptors, navigation, state, inactiveTintColor} = this.props;

    const {
      verticalPadding,
      tabBarBackground,
      shadow,
      topPadding,
      activeColors,
      activeTabBackgrounds,
    } = this.props;

    const {routes, index: activeRouteIndex} = state;
    const activeTabBackground = activeTabBackgrounds
      ? Array.isArray(activeTabBackgrounds)
        ? activeTabBackgrounds[activeRouteIndex] || '#E4F7F7'
        : activeTabBackgrounds
      : '#E4F7F7';
    const activeColor = activeColors
      ? Array.isArray(activeColors)
        ? activeColors[activeRouteIndex] || '#000'
        : activeColors
      : '#000';
    return (
      <Wrapper
        topPadding={topPadding}
        verticalPadding={verticalPadding}
        tabBarBackground={tabBarBackground}
        shadow={shadow}>
        {routes.map((route, routeIndex) => {
          const {options} = descriptors[route.key];
          const labelText =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const labelLength = labelText.length;

          const isRouteActive = activeRouteIndex === routeIndex;
          const tintColor = isRouteActive ? activeColor : inactiveTintColor;
          const tabBarIcon = options.tabBarIcon ? options.tabBarIcon : null;
          const tabHasIcon = tabBarIcon != null;

          const onTabPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isRouteActive && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onTabLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          //Render Label if tab is selected or if there is no icon
          const renderLabel = () => {
            const label = (
              <Animated.Text
                icon={tabHasIcon}
                activeColor={activeColor}
                style={{
                  marginRight: 10,
                  fontFamily: Fonts.iransansBold,
                }}>
                {labelText}
              </Animated.Text>
            );
            if (isRouteActive) {
              return label;
            } else if (!isRouteActive && !tabHasIcon) {
              return label;
            } else {
              return;
            }
          };
          return (
            <TabButton
              icon={tabHasIcon}
              labelLength={labelLength}
              onLayout={event => {
                isRouteActive &&
                  this.setState({
                    pos: event.nativeEvent.layout.x,
                    width: event.nativeEvent.layout.width,
                    height: event.nativeEvent.layout.height,
                  });
              }}
              isRouteActive={isRouteActive}
              key={routeIndex}
              onPress={() => {
                if (!isRouteActive) {
                  this.animation(this.state.animatedPos).start(() => {
                    this.setState({
                      prevPos: this.state.pos,
                    });
                    this.state.animatedPos.setValue(0);
                  });
                  onTabPress();
                }
              }}
              onLongPress={() => {
                if (!isRouteActive) {
                  this.animation(this.state.animatedPos).start(() => {
                    this.setState({
                      prevPos: this.state.pos,
                    });
                    this.state.animatedPos.setValue(0);
                  });
                  onTabLongPress();
                }
              }}>
              {renderLabel()}
              <View>
                {tabBarIcon &&
                  tabBarIcon({
                    tintColor,
                    size: 12,
                  })}
              </View>
            </TabButton>
          );
        })}
        <Dot
          topPadding={topPadding}
          activeTabBackground={activeTabBackground}
          style={{
            left: this.state.animatedPos.interpolate({
              inputRange: [0, 1],
              outputRange: [this.state.prevPos, this.state.pos],
            }),
          }}
          width={this.state.width}
          height={this.state.height}
        />
      </Wrapper>
    );
  }
}

//Shadow
const SHADOW = css`
  shadow-color: #000000;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.05;
  elevation: 1;
  shadow-radius: 20;
`;

TabBar.propTypes = {
  activeTabBackground: PropTypes.string.isRequired,
  tabBarBackground: PropTypes.string.isRequired,
  shadow: PropTypes.bool.isRequired,
  verticalPadding: PropTypes.number.isRequired,
  topPadding: PropTypes.number.isRequired,
};

TabBar.defaultProps = {
  activeTabBackground: '#E4F7F7',
  tabBarBackground: '#FFFFFF',
  shadow: true,
  verticalPadding: 10,
  topPadding: 10,
};
