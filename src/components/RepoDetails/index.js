import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import BackGround from '../Shared/background'
import SharedStyles from '../Shared/style'
import FooterButton from '../Shared/FooterButton'
import Button from './TouchableCards'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'


export default class RepoDetails extends Component {
  handleNavigateToProfile = () => {
    this.props.navigation.navigate(`UserProfile`)
  }
  render() {
    return (
        <BackGround>
          <ScrollView>
            <Text style={styles.RepoName}>GitHuber RepoName</Text>
            <View style={styles.CardsContainer}>
                <View style={styles.CardRow}>
                  <Button IconName='code-branch' IconSize={35} Text='Commits'/>
                  <Button IconName='exclamation' IconSize={35} Text='Issues'/>
                  <Button IconName='tag' IconSize={35} Text='Releases'/>
                </View>
                <View style={styles.CardRow}>
                  <Button IconName='project-diagram' IconSize={35} Text='Branchs'/>
                  <Button IconName='sitemap' IconSize={35} Text='Forks'/>
                  <Button IconName='people-carry' IconSize={35} Text='Colaborators'/>
                </View>
            </View>
          </ScrollView>
          <FooterButton iconName='chevron-left' iconSize={25} handleNavigate={this.handleNavigateToProfile}/>
        </BackGround>
    );
  }
}

const styles = StyleSheet.create({
  RepoName: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: "center",
    marginTop: getStatusBarHeight() ,
  },
  CardsContainer: {
    height: 500,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  CardRow: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})