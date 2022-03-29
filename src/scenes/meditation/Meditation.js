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

const postitiveVideoKeys = [
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

const depressionVideoKeys = [
  {
    id: 'xRxT9cOKiM8',
    title: 'meditation for depression'
  },
  {
    id: 'xShv7mMmfW4',
    title: 'meditation for depression'
  },
  {
    id: 'O3Ku-cpdSJM',
    title: 'meditation for depression'
  },
  {
    id: 'VDLfVwMSbJ8',
    title: 'meditation for depression'
  },
  {
    id: 'd3xTelxky9A',
    title: 'meditation for depression'
  }
]

function randomize(array) {
  return Math.floor(Math.random() * array.length)
}

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

export default class AllMeditations extends React.Component {
  constructor() {
    super()
    this.state = {
      playing: false,
      posUrl: 'a1JOT30bP5g',
      depressUrl: 'xRxT9cOKiM8'
    }
    this.handlePress = this.handlePress.bind(this)
  }
  handlePress(item) {
    WebBrowser.openBrowserAsync(item)
  }

  render() {
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
              Positive Energy Meditations
            </Text>
            </View>
            <View style={styles.video}>
              <YoutubePlayer
                height={300}
                width={Dimensions.get('window').width}
                play={this.state.playing}
                videoId={this.state.posUrl}
              />
            </View>
            <View>
          <TouchableOpacity
                  style={{
                    display: 'flex',
                    marginLeft: 50,
                    marginRight: 50,
                    alignItems: 'center',
                    backgroundColor: '#1c9ab7',
                    borderRadius: 10,
                    padding: 10,
                    marginTop: -35
                  }}
                  onPress={ () => {
                    this.setState({posUrl: postitiveVideoKeys[randomize(postitiveVideoKeys)].id})
                  }}
                >
                  <Text style={{color: 'white', fontSize: 15}}>Randomize</Text>
                </TouchableOpacity>
                </View>

                <View>
            <Text style={{
              marginTop: 20,
              textAlign: 'center',
              fontSize: 20,
              fontStyle: 'bold'
            }}>
              Meditations for Depression
            </Text>
            </View>
            <View style={styles.video}>
              <YoutubePlayer
                height={300}
                width={Dimensions.get('window').width}
                play={this.state.playing}
                videoId={this.state.depressUrl}
              />
            </View>
            <View>
          <TouchableOpacity
                  style={{
                    display: 'flex',
                    marginLeft: 50,
                    marginRight: 50,
                    alignItems: 'center',
                    backgroundColor: '#1c9ab7',
                    borderRadius: 10,
                    padding: 10,
                    marginTop: -35
                  }}
                  onPress={ () => {
                    this.setState({depressUrl: depressionVideoKeys[randomize(depressionVideoKeys)].id})
                  }}
                >
                  <Text style={{color: 'white', fontSize: 15}}>Randomize</Text>
                </TouchableOpacity>
                </View>

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
                videoId={this.state.posUrl}
              />
            </View>
            <View>
          <TouchableOpacity
                  style={{
                    display: 'flex',
                    marginLeft: 50,
                    marginRight: 50,
                    alignItems: 'center',
                    backgroundColor: '#1c9ab7',
                    borderRadius: 10,
                    padding: 10,
                    marginTop: -35
                  }}
                  onPress={ () => {
                    this.setState({posUrl: postitiveVideoKeys[randomize(postitiveVideoKeys)].id})
                  }}
                >
                  <Text style={{color: 'white', fontSize: 15}}>Randomize</Text>
                </TouchableOpacity>
                </View>

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
                videoId={this.state.posUrl}
              />
            </View>
            <View>
          <TouchableOpacity
                  style={{
                    display: 'flex',
                    marginLeft: 50,
                    marginRight: 50,
                    alignItems: 'center',
                    backgroundColor: '#1c9ab7',
                    borderRadius: 10,
                    padding: 10,
                    marginTop: -35
                  }}
                  onPress={ () => {
                    this.setState({posUrl: postitiveVideoKeys[randomize(postitiveVideoKeys)].id})
                  }}
                >
                  <Text style={{color: 'white', fontSize: 15}}>Randomize</Text>
                </TouchableOpacity>
                </View>
        </View>
      </ScrollView>
    )
  }
}




