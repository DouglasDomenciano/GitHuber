import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'

import { View, StyleSheet, TextInput, Image, Text, ScrollView ,Dimensions, TouchableOpacity } from 'react-native';
import RepoCard from '../Shared/RepoCards'
import FooterButton from '../Shared/FooterButton'
import Background from '../Shared/background'
import SharedStyles from '../Shared/style'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import Dougras from '../../assets/Dougras.png'



export default class UserProfile extends Component {

  handleNavigateToUserList = () => {
    this.props.navigation.navigate(`UsersList`)
  }
  handleNavigateToRepoDetails = () => {
    this.props.navigation.navigate(`RepoDetails`)
  }
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
          placeholderTextColor="#FFF"
          fontSize={17}>
        </TextInput>
        <TouchableOpacity style={styles.SearchIcon}>
          <Icon name="search" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.ResposCardsContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <RepoCard handleNavigate={this.handleNavigateToRepoDetails}/>
          <RepoCard handleNavigate={this.handleNavigateToRepoDetails}/>
          <RepoCard handleNavigate={this.handleNavigateToRepoDetails}/>
          <View style={styles.EmptySpace}></View>
        </ScrollView>
      </View>
      <FooterButton iconName='chevron-left' iconSize={25} handleNavigate={this.handleNavigateToUserList}/>
    </Background>
    );
  }
}

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  UserInfos: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getStatusBarHeight() -10,
  },
  UserPicture: {
    height: 90,
    width: 90,
    borderRadius: 100,
    marginRight: 20
   },
  Name : {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 28,
  },
  UserName : {
    color: '#FFF',
    fontStyle: 'italic',
    fontSize: 17,
  },
  SearchContainer: {
    marginTop: 15,
    height: 50,
    width: width - 40,
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(75,170,88, 0.1)',
    borderRadius: 10
  },
  SearchIcon: {
    position: 'absolute',
    right: 20
  },
  ResposCardsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  EmptySpace: {
    height: 60
  }
})