import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import Dougras from '../../assets/Dougras.png'
import SharedStyles from '../Shared/style'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'



export default class CardUser extends Component {
  render() {
    return (
        <View style={styles.CardContainer}>
            <View style={[styles.UserCard, SharedStyles.ShadowBox]}>
                <View style={styles.UserIcons}>
                    <Icon name="users" size={20} color="#FFF" style={{opacity: 0.8}}/>
                    <Icon name="github" size={20} color="#FFF" style={{opacity: 0.8}}/>
                </View>
                <View style={styles.UserIconsText}>
                    <Text style={{color: '#FFF', fontWeight: 'bold'}}>2555</Text>
                    <Text style={{color: '#FFF', fontWeight: 'bold'}}>1453</Text>
                </View>
                <Image source={Dougras} style={styles.UserPicture}/>
                <View style={styles.NameAndUserName}>
                    <Text style={styles.TextName}>GitHuber Name</Text>
                    <Text style={styles.UserName}>UserName</Text>
                </View>
                <Text style={styles.bio}>Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem...</Text>
                <TouchableOpacity style={[styles.SubmitButton, SharedStyles.ShadowBox]} onPress={() => this.props.handleNavigate()}>
                    <Text style={styles.SubmitButtonText}>Selecionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
    UserCard: {
      height: (height / 10) * 7,
      width: (width / 10) * 8.9,
      marginTop: 20,
      marginBottom: 20,
      marginHorizontal: 7,
      paddingTop: 5,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: 'rgba(75,170,88, 0.1)',
      borderRadius: 30,
    },
    UserPicture: {
      height: 140,
      width: 140,
      borderRadius: 100,
      alignSelf: 'center',
      marginTop: -60
    },
    UserIcons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
      marginTop: 20
    },
    UserIconsText:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    NameAndUserName: {
        alignSelf: 'center',
        marginTop: 10
    },
    TextName: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 32,
    },
    UserName: {
      color: '#FFF',
      fontStyle: 'italic',
      fontSize: 23,
      alignSelf: 'center'
    },
    bio: {
      marginTop: 20,
      marginBottom: 20,
      color: '#FFF',
      fontSize: 15,
      alignSelf: 'center'
    },
    SubmitButton: {
      width: 200,
      height: 45,
      backgroundColor: 'rgba(15,75,21,0.65)',
      borderRadius: 10,
      alignItems: "center",
      justifyContent: 'center',
      alignSelf: 'center',
    },
    SubmitButtonText: {
      color: '#FFF',
      fontStyle: 'italic',
      fontSize: 15
    },
  })