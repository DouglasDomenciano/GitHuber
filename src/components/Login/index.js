import React from 'react';
import { Image, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native';
import Background from '../Shared/background'
import octacatLogo from '../../assets/octacat.png'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'


// import { Container } from './styles';

export default function Main() {
  return (
    <Background>
      <Image source={octacatLogo} style={styles.Logo}/>
      <TextInput 
        placeholder="Buscar Usuário ou Repositório" 
        style={styles.Input}
        placeholderTextColor="#FFF"
      ></TextInput>
      <View style={styles.ButtonsContainer}>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>Buscar</Text>
          <Text style={styles.ButtonText}>Usuário</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>Buscar</Text>
          <Text style={styles.ButtonText}>Repositório</Text>
        </TouchableOpacity>
      </View>

      
    </Background>
  );
}

const styles = StyleSheet.create({
  Logo: {
    width: 200,
    height: 200,
    marginBottom: 50,
    marginTop: getStatusBarHeight() + 100,
    alignSelf: 'center',
    opacity: 0.8
  },
  Input: {
    alignSelf: 'stretch',
    backgroundColor: 'rgba(0,0,0,0.3)',
    color: '#FFF',
    textAlign: 'center',
    borderRadius: 10,
    marginBottom: 50
  },
  ButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Button:{
    width: 150,
    height: 150,
    borderColor: "#FFF",
    borderRadius: 20,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ButtonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: '100'
  }
})
