import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import SharedStyles from '../Shared/style'

import { TouchableOpacity, StyleSheet } from 'react-native';


export default class Shared extends Component {
  render() {
    return (
        <TouchableOpacity style={[styles.BackToHome, SharedStyles.ShadowBox]} onPress={() => this.props.navigation.navigate(`${this.props.screen}`)}>
          <Icon name="home" size={30} color="#FFF" style={styles.Icon} />
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    BackToHome: {
      backgroundColor: 'rgba(75,170,88, 0.1)',
      bottom: 15,
      height: 60,
      width: 60,
      borderRadius: 50,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: "center",
      position: 'absolute',
      bottom: 15
    },
    Icon: {
      opacity: 0.8
    }
  })