import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';
import styles from './button.style';

const ButtonCustom = ({title, action}) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={action}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

ButtonCustom.propTypes = {
  title: PropTypes.string,
  action: PropTypes.func,
};

export default ButtonCustom;
