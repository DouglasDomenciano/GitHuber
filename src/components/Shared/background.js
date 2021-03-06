import React from 'react';
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet } from 'react-native'

// import { Container } from './styles';

export default function Background(props) {
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1.8}} locations={[0,1]} colors={['#38784E', '#229F2B']} style={styles.Background}>
        {props.children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
  },
})