import React from 'react';
import {View, Text} from 'react-native';
import styles from './splash-screen.style';
import {Images} from '../../assets/index';
import {LogoText, ButtonCustom, IndicatorCustom} from '../../components/index';

class SplashScreen extends React.Component {
  state = {
    data: [
      {id: 1, text: 'Lorem Ipsum Cykaaa Dorot Blyaatt', image: Images.splash1},
      {
        id: 2,
        text: 'You Can Write Your Description Here',
        image: Images.splash2,
      },
      {
        id: 3,
        text: 'Or You Can Write Something Funny Here Too',
        image: Images.splash3,
      },
    ],
    active: 1,
  };

  _renderItem = () => {
    return this.state.data.map((thisData, index) => (
      <View
        key={index}
        style={thisData.id === this.state.active ? styles.show : styles.hide}>
        <LogoText image={thisData.image} text={thisData.text} />
      </View>
    ));
  };

  _renderIndicator = () => {
    return this.state.data.map((thisData, index) => (
      <View key={index}>
        <IndicatorCustom
          color={
            thisData.id === this.state.active
              ? styles.colorBlack
              : styles.colorGray
          }
        />
      </View>
    ));
  };

  _buttonAction = () => {
    const current = this.state.active;
    if (current < 3) {
      this.setState({
        active: current + 1,
      });
    } else {
      console.log('Mentok');
    }
  };

  render() {
    return (
      <View style={styles.wrapper}>
        {this._renderItem()}
        <View style={styles.indicatorWrapper}>{this._renderIndicator()}</View>
        <ButtonCustom
          title={this.state.active !== 3 ? 'NEXT' : 'DONE'}
          action={() => this._buttonAction()}
        />
      </View>
    );
  }
}

export default SplashScreen;
