import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import Background from '../Shared/background'
import SharedStyles from '../Shared/style'
import CardUser from './CardUser'
import FooterButton from '../Shared/FooterButton'

export default class UsersList extends Component {
  render() {
    return (
      <Background>
        <ScrollView>
          <View style={[styles.SearchContainer, SharedStyles.ShadowBox]}>
            <TextInput 
              placeholder="Digite o nome de usuário" 
              style={SharedStyles.InputWithoutBorder}
              placeholderTextColor="#FFF">
            </TextInput>
            <Icon name="search" size={20} color="#FFF" style={styles.SearchIcon}/>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.ScrollCardsUsers}>
            <CardUser />
            <CardUser />
          </ScrollView>
        </ScrollView>
        <FooterButton />
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  ScrollCardsUsers: {
    marginTop: 40,
  },
  SearchContainer: {
    flex: 1,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    width: 350,
    backgroundColor: 'rgba(75,170,88, 0.1)',
    borderRadius: 10
  },
  SearchIcon: {
    marginRight: 15,
    marginLeft: 5
  },
})

