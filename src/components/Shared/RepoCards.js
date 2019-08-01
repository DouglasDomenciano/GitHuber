import React, { Component } from 'react';
import { View, Text, TouchableOpacity ,StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import SharedStyles from './style'

export default class RepoCards extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.handleNavigate()}>
        <View style={[styles.RepoContainer, SharedStyles.ShadowBox]}>
          <Text style={styles.RepoName}>GitHuber RepoName</Text>
          <Text style={styles.RepoDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..</Text>
          <View style={styles.RepoInfos}>
            <View style={styles.IconAndQuantity}>
              <Icon name='star' size={18} style={styles.Icon} color='#FFF'/>
              <Text style={styles.Quantityes}>1526</Text>
            </View>
            <View style={styles.IconAndQuantity}>
              <Icon name='code-branch' size={18} style={styles.Icon} color='#FFF'/>
              <Text style={styles.Quantityes}>4218</Text>
            </View>
            <View style={styles.IconAndQuantity}>
              <Icon name='project-diagram' size={18} style={styles.Icon} color='#FFF'/>
              <Text style={styles.Quantityes}>758</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  RepoContainer: {
    height: 160,
    width: width - 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 17,
    backgroundColor: 'rgba(75,170,88, 0.1)',
    borderRadius: 15,
    marginBottom: 15
  },
  RepoName: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 21
  },
  RepoDescription: {
    color: '#FFF',
    fontSize: 14,
    marginTop: 10
  },
  RepoInfos: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    opacity: 0.9
  },
  IconAndQuantity: {
    flexDirection: 'row'
  },
  Icon: {
    marginRight: 7,
    opacity: 0.8
  },
  Quantityes: {
    color: '#FFF',
    fontSize: 13
  },
})
