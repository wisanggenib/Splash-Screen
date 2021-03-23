import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import styles from './logo-text.style';

const LogoText = ({image, text}) => {
  return (
    <View style={styles.wrapper}>
      <Image source={image} style={styles.images} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

LogoText.propTypes = {
  text: PropTypes.string,
  image: PropTypes.any,
};
export default LogoText;
