import React, { Component } from 'react';

import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';
import SharedStyles from '../Shared/style'
import Icon from 'react-native-vector-icons/FontAwesome5'


export default class TouchableCards extends Component {
  render() {
    return (
        <TouchableOpacity style={[styles.Card, SharedStyles.ShadowBox]}>
            <Icon name={this.props.IconName} size={this.props.IconSize} color='#FFF' style={styles.Icon}/> 
            <Text style={styles.CardText}>{this.props.Text}</Text>
        </TouchableOpacity>
    );
  }
}

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    Card: {
        width: (width / 10) * 3.9 ,
        height: (height / 10) * 2,
        padding: 15,
        backgroundColor: 'rgba(75,170,88, 0.1)',
        borderRadius: 15,
        alignItems: "center",
        marginBottom: 10
      },
      CardText:{
        color: '#FFF',
        marginTop: 10,
        fontSize: 17
      },
      Icon: {
        marginTop: 10
      }
})
