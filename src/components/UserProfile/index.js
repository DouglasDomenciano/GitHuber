import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'

import { View, StyleSheet, TextInput, Image, Text, Dimensions } from 'react-native';
import RepoCard from '../Shared/RepoCards'
import FooterButton from '../Shared/FooterButton'
import Background from '../Shared/background'
import SharedStyles from '../Shared/style'
import Dougras from '../../assets/Dougras.png'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class UserProfile extends Component {
  render() {
    return (
    <Background >
      <View style={styles.UserInfos}>
        <Image source={Dougras} style={styles.UserPicture}/>
        <View>
          <Text style={styles.Name}>GitHuber Name</Text>
          <Text style={styles.UserName}>UserName</Text>
        </View>
      </View>
      <View style={[styles.SearchContainer, SharedStyles.ShadowBox]}>
        <TextInput 
          placeholder="Filtrar repositório" 
          style={SharedStyles.InputWithoutBorder}
          placeholderTextColor="#FFF">
        </TextInput>
        <Icon name="search" size={20} color="#FFF" style={styles.SearchIcon}/>
      </View>
      <View style={styles.ResposCardsContainer}>
        <RepoCard/>
        <RepoCard/>
        <RepoCard/>
      </View>
      <FooterButton/>
    </Background>
    );
  }
}

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  UserInfos: {
    flexDirection: 'row',
    margin: 25
  },
  UserPicture: {
    height: 80,
    width: 80,
    borderRadius: 100,
    marginRight: 20
   },
  Name : {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 35,
  },
  UserName : {
    color: '#FFF',
    fontStyle: 'italic',
    fontSize: 25,
  },
  SearchContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    width: width - 40,
    backgroundColor: 'rgba(75,170,88, 0.1)',
    borderRadius: 10
  },
  SearchIcon: {
    position: 'absolute',
    right: 20
  },
})