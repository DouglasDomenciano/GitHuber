import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Dougras from '../../assets/Dougras.png'
import SharedStyles from '../Shared/style'

export default class CardUser extends Component {
  render() {
    return (
        <View style={styles.CardContainer}>
            <View style={[styles.UserCard, SharedStyles.ShadowBox]}>
                <View style={styles.UserIcons}>
                    <Icon name="users" size={30} color="#000" style={{opacity: 0.7}}/>
                    <Icon name="github-alt" size={30} color="#000" style={{opacity: 0.7}}/>
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
                <TouchableOpacity style={[styles.SubmitButton, SharedStyles.ShadowBox]} onPress={() => this.props.navigation.navigate('UserProfile')}>
                    <Text style={styles.SubmitButtonText}>Selecionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    UserCard: {
      height: 500,
      width: 340,
      marginTop: 20,
      marginBottom: 20,
      marginHorizontal: 30,
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
      marginTop: -45
    },
    UserIcons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
      marginTop: 10
    },
    UserIconsText:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    NameAndUserName: {
        alignSelf: 'center',
        marginTop: 30
    },
    TextName: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 40,
    },
    UserName: {
      color: '#FFF',
      fontStyle: 'italic',
      fontSize: 30,
      alignSelf: 'center'
    },
    bio: {
      marginTop: 30,
      marginBottom: 30,
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
      marginTop: 20
    },
    SubmitButtonText: {
      color: '#FFF',
      fontStyle: 'italic',
      fontSize: 15
    },
  })