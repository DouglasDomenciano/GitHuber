import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Image, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native';
import Background from '../Shared/background'
import octacatLogo from '../../assets/octacat.png'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import Colors from '../Shared/colors'
import SharedStyles from '../Shared/style'

export default function Main() {
  return (
    <Background>
        <View style={[styles.SearchContainer, SharedStyles.BorderedViewDefault]}>
          <TextInput 
            placeholder="Digite para buscar" 
            style={SharedStyles.InputWithoutBorder}
            placeholderTextColor="#FFF">
        </TextInput>
          <Icon name="search" size={30} color="#FFF" style={styles.SearchIcon}/>
        </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  SearchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50
  },
})
