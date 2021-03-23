import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  show: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  indicatorWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  colorBlack: {
    backgroundColor: 'black',
    margin: 3,
  },
  colorGray: {
    backgroundColor: 'gray',
    margin: 3,
  },
});
