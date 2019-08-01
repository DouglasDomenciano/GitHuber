import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet, TextInput, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import Background from '../Shared/background'
import SharedStyles from '../Shared/style'
import CardUser from './CardUser'
import FooterButton from '../Shared/FooterButton'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'


export default class UsersList extends Component {
  handleNavigateToLogin = () => this.props.navigation.navigate(`Login`);
  handleNavigateToProfile = () => this.props.navigation.navigate('UserProfile');

  render() {
    return (
      <Background>
        <ScrollView>
          <View style={[styles.SearchContainer, SharedStyles.ShadowBox]}>
            <TextInput 
              placeholder="Digite o nome de usuário" 
              style={SharedStyles.InputWithoutBorder}
              placeholderTextColor="#FFF"
              fontSize={17}
              >
            </TextInput>
            <TouchableOpacity style={styles.SearchIcon}>
              <Icon name="search" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.ScrollCardsUsers}>
            <CardUser handleNavigate = {this.handleNavigateToProfile}/>
            <CardUser handleNavigate = {this.handleNavigateToProfile}/>
            <View style={{width: 20}} />
          </ScrollView>
        </ScrollView>
        <FooterButton iconName='github-alt' iconSize={30} handleNavigate={this.handleNavigateToLogin}/>
      </Background>
    );
  }
}

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  ScrollCardsUsers: {
    height: (height / 10) * 7.5,
    paddingLeft: 10,
  },
  SearchContainer: {
    flex: 1,
    marginTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    width: (width / 10) * 9,
    backgroundColor: 'rgba(75,170,88, 0.1)',
    borderRadius: 10
  },
  SearchIcon: {
    position: 'absolute',
    right: 25,
  },
})

