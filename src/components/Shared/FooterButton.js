import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import SharedStyles from '../Shared/style'

import { TouchableOpacity, StyleSheet } from 'react-native';


export default class Shared extends Component {
  render() {
    return (
        <TouchableOpacity style={[styles.BackToHome, SharedStyles.ShadowBox]} onPress={() => this.props.handleNavigate()}>
          <Icon name={this.props.iconName} size={this.props.iconSize} color="#229F2B" style={styles.Icon} />
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    BackToHome: {
      backgroundColor: 'rgba(255,255,255, 1)',
      height: 50,
      width: 50,
      borderRadius: 50,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: "center",
      position: 'absolute',
      bottom: 15
    },
    Icon: {
      opacity: 1
    }
  })