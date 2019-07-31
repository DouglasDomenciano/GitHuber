import React, { Component } from 'react';
import { Image, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native';
import Background from '../Shared/background'
import octacatLogo from '../../assets/octacat.png'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import Colors from '../Shared/colors'
import  SharedStyles  from '../Shared/style'

export default class Main extends Component {

  render(){
    return (
      <Background>
        <Image source={octacatLogo} style={styles.Logo}/>
        <TextInput 
            placeholder="Digite para buscar" 
            style={[styles.Input, SharedStyles.InputWithoutBorder, SharedStyles.ShadowBox]}
            placeholderTextColor="#FFF">
        </TextInput>
        <View style={styles.ButtonsContainer}>
          <View style={styles.ShadowBox}>
            <TouchableOpacity style={styles.Button} onPress={() => this.props.navigation.navigate('UsersList')}>
              <Text style={styles.ButtonText}>Buscar</Text>
              <Text style={styles.ButtonText}>Usuário</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.Button} onPress={() => this.props.navigation.navigate('ReposList')}>
            <Text style={styles.ButtonText}>Buscar</Text>
            <Text style={styles.ButtonText}>Repositório</Text>
          </TouchableOpacity>
        </View>
      </Background>
    );
  }
}


const styles = StyleSheet.create({
  Logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
    marginTop: getStatusBarHeight() + 80,
    alignSelf: 'center',
    opacity: 1
  },
  Input: {
    backgroundColor: 'rgba(75,170,88, 0.1)',
    borderRadius: 10,
    marginLeft: 40,
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
      width: 150,
      height: 150,
      backgroundColor: Colors.ButtomDefault,
      borderRadius: 20,
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
