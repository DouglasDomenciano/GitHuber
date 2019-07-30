import React from 'react';
import LinearGradient from 'react-native-linear-gradient'
import { StatusBar, StyleSheet, Text } from 'react-native'

// import { Container } from './styles';

export default function Background(props) {
  return (
    
    <LinearGradient
        start={{x: 0, y: 0}} end={{x: 1, y: 1}}
        locations={[0,1]}
        colors={['#38784E', '#229F2B']}
        // colors={['#00F372', '#6F07F6']}
        style={styles.Background}>
        {props.children}
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    padding: 25
  },
  FooterText: {
    color: "#FFF",
    position: 'absolute',
    bottom: 20,
    alignSelf: "center",
  }
})