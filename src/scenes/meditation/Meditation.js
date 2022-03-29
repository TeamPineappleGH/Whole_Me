import React, { useState, useCallback, useRef } from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Alert,
  Dimensions
} from 'react-native'
import { connect } from 'react-redux'
import { fetchMeditations } from '../../store/meditation'
import styles from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as WebBrowser from 'expo-web-browser'
import YoutubePlayer from 'react-native-youtube-iframe'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

class AllMeditations extends React.Component {
  constructor() {
    super()
    this.state = {
      meditation: '',
      playing: false,
    }
    this.handlePress = this.handlePress.bind(this)
    this.onStateChange = this.onStateChange.bind(this)
    this.togglePlaying = this.togglePlaying.bind(this)
  }
  handlePress(item) {
    WebBrowser.openBrowserAsync(item)
  }

  onStateChange = ((state) => {
    console.log('state---------->', state);
    if (state === false) {
      this.setState({playing: true});
      Alert.alert("video has finished playing!");
    }
  });

  togglePlaying = (() => {
    this.setState({playing: !this.state.playing});
  });

  componentDidMount() {
    this.onStateChange(this.state.playing)
    this.togglePlaying()
  }

  render() {
      return (
        <ScrollView style={{ flex: 1, width: '100%' }}>
            <View style={{ width: '100%' }}>
              <Text style={styles.header}>Discover Meditations</Text>
                <View style={styles.video}>
                  <YoutubePlayer
                    height={300}
                    width={Dimensions.get('window').width}
                    play={this.state.playing}
                    videoId={'5qap5aO4i9A'}
                    onChangeState={this.onStateChange}
                  />
                </View>
          </View>
        </ScrollView>
      )
    }
  }


const mapState = (state) => {
  return {
    meditations: state.meditations,
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchMeditations: (meditation) => dispatch(fetchMeditations(meditation)),
  }
}

export default connect(mapState, mapDispatch)(AllMeditations)
//open-in-new material icons
