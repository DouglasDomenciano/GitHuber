import React, { Component } from 'react';
import { Image, StyleSheet, TextInput, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import Background from '../Shared/background'
import octacatLogo from '../../assets/octacat.png'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import  SharedStyles  from '../Shared/style'

export default class Main extends Component {

  render(){
    return (
      <Background>
        <Image source={octacatLogo} style={styles.Logo}/>
        <TextInput 
            placeholder="Digite para buscar" 
            style={[styles.Input, SharedStyles.InputWithoutBorder, SharedStyles.ShadowBox]}
            placeholderTextColor="#FFF"
            fontSize={15}>
        </TextInput>
        <View style={styles.ButtonsContainer}>
          <View style={styles.ShadowBox}>
            <TouchableOpacity style={[styles.Button, SharedStyles.ShadowBox]} onPress={() => this.props.navigation.navigate('UsersList')}>
              <Text style={styles.ButtonText}>Buscar</Text>
              <Text style={styles.ButtonText}>Usuário</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.Button, SharedStyles.ShadowBox]} onPress={() => this.props.navigation.navigate('ReposList')}>
            <Text style={styles.ButtonText}>Buscar</Text>
            <Text style={styles.ButtonText}>Repositório</Text>
          </TouchableOpacity>
        </View>
      </Background>
    );
  }
}

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  Logo: {
    width: 180,
    height: 180,
    marginBottom: 40,
    marginTop: getStatusBarHeight() + 10,
    alignSelf: 'center',
    opacity: 1
  },
  Input: {
    width: (width / 10) * 8.5,
    backgroundColor: 'rgba(75,170,88, 0.1)',
    borderRadius: 10,
    marginLeft: 25,
    marginRight: 40,
    marginBottom: 50,
  },
  ButtonsContainer: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  Button:{
      width: (width / 10) * 4,
      height: (height / 10) * 2,
      backgroundColor: 'rgba(75,170,88, 0.1)',
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
  },
  ButtonText: {
      color: "#FFF",
      fontSize: 20,
      fontWeight: '100',
      fontStyle: 'italic',
      opacity: 1
  },
})
