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
            style={SharedStyles.InputWithBorder}
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
    marginBottom: 50,
    marginTop: getStatusBarHeight() + 100,
    alignSelf: 'center',
    opacity: 1
  },
  ButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
