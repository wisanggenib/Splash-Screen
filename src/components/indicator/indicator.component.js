import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './indicator.style';

const IndicatorCustom = ({color}) => {
  return <View style={[color, styles.wrapper]} />;
};

IndicatorCustom.propTypes = {
  color: PropTypes.any,
};
export default IndicatorCustom;
