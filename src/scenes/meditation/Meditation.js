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
import styles from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as WebBrowser from 'expo-web-browser'
import YoutubePlayer from 'react-native-youtube-iframe'

const videoKeys = [
  {
    id: 'jeGT1VXwfx4',
    title: 'meditation for postitive energy'
  },
  {
    id: '86m4RC_ADEY',
    title: 'meditation for postitive energy'
  },
  {
    id: 'M6dCovaOono',
    title: 'meditation for postitive energy'
  },
  {
    id: 'a1JOT30bP5g',
    title: 'meditation for postitive energy'
  },
  {
    id: '-Tb1lR8Z5oM',
    title: 'meditation for postitive energy'
  }
]

function randomize(array) {
  return Math.floor(Math.random() * array.length)
}
const random = randomize(videoKeys)

//console.log('mapped', videoKeys[random].title)

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

export default class AllMeditations extends React.Component {
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
      this.setState({ playing: true });
      // Alert.alert("video has finished playing!");
    }
  });

  togglePlaying = (() => {
    this.setState({ playing: !this.state.playing });
  });

  componentDidMount() {
    this.onStateChange(this.state.playing)
    this.togglePlaying()
  }

  render() {
    console.log("video id ----->", videoKeys[random].id)
    return (
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <View style={{ width: '100%' }}>
          <Text style={styles.header}>Discover Meditations</Text>
          <View>
            <Text style={{
              marginTop: 20,
              textAlign: 'center',
              fontSize: 20,
              fontStyle: 'bold'
            }}>
              Postive Energy Meditations
            </Text>
            </View>
            <View style={styles.video}>
              <YoutubePlayer
                height={300}
                width={Dimensions.get('window').width}
                play={this.state.playing}
                videoId={videoKeys[random].id}
                onChangeState={this.onStateChange}
              />
            </View>
          <TouchableOpacity
                  style={{
                    display: 'flex',
                    // marginTop: 2,
                    marginLeft: 20,
                    marginRight: 20,
                    // marginBottom: 40,
                    alignItems: 'center',
                    backgroundColor: '#1c9ab7',
                    borderRadius: 10,
                    padding: 10,
                  }}
                  onPress={ () => {
                    this.props.fetchRecipes(this.state.ingredient);
                    Keyboard.dismiss();
                  }}
                >
                  <Text style={{color: 'white', fontSize: 15}}>Randomize</Text>
                </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}




