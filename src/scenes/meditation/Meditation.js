import React, { useState, useCallback, useRef } from 'react'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as WebBrowser from 'expo-web-browser'
import YoutubePlayer from 'react-native-youtube-iframe'
import colors from '../../theme/colors'

const postitiveVideoKeys = [
  {
    id: 'jeGT1VXwfx4',
    title: 'meditation for postitive energy',
  },
  {
    id: '86m4RC_ADEY',
    title: 'meditation for postitive energy',
  },
  {
    id: 'M6dCovaOono',
    title: 'meditation for postitive energy',
  },
  {
    id: 'a1JOT30bP5g',
    title: 'meditation for postitive energy',
  },
  {
    id: '-Tb1lR8Z5oM',
    title: 'meditation for postitive energy',
  },
]

const depressionVideoKeys = [
  {
    id: 'xRxT9cOKiM8',
    title: 'meditation for depression',
  },
  {
    id: 'xShv7mMmfW4',
    title: 'meditation for depression',
  },
  {
    id: 'O3Ku-cpdSJM',
    title: 'meditation for depression',
  },
  {
    id: 'VDLfVwMSbJ8',
    title: 'meditation for depression',
  },
  {
    id: 'd3xTelxky9A',
    title: 'meditation for depression',
  },
]

const stressVideoKeys = [
  {
    id: 'MIr3RsUWrdo',
    title: 'meditation for stress',
  },
  {
    id: 'z6X5oEIg6Ak',
    title: 'meditation for stress',
  },
  {
    id: '9yj8mBfHlMk',
    title: 'meditation for stress',
  },
  {
    id: 'zYzFUBMJO9E',
    title: 'meditation for stress',
  },
  {
    id: 'sG7DBA-mgFY',
    title: 'meditation for stress',
  },
]

const sleepVideoKeys = [
  {
    id: 'U6Ay9v7gK9w',
    title: 'meditation for sleep',
  },
  {
    id: '2f5mRTjkHJ4',
    title: 'meditation for sleep',
  },
  {
    id: '69o0P7s8GHE',
    title: 'meditation for sleep',
  },
  {
    id: 'acLUWBuAvms',
    title: 'meditation for sleep',
  },
  {
    id: 'lC_kFBsRMw0',
    title: 'meditation for sleep',
  },
]

function randomize(array) {
  return Math.floor(Math.random() * array.length)
}

export default class AllMeditations extends React.Component {
  constructor() {
    super()
    this.state = {
      playing: false,
      posUrl: 'a1JOT30bP5g',
      depressUrl: 'xRxT9cOKiM8',
      stressUrl: 'zYzFUBMJO9E',
      sleepUrl: 'lC_kFBsRMw0',
      displaySpinner: true
    }
    this.handlePress = this.handlePress.bind(this)
    this.toggleSpinner = this.toggleSpinner.bind(this)
  }
  handlePress(item) {
    WebBrowser.openBrowserAsync(item)
  }

  toggleSpinner() {
    this.setState({displaySpinner: false})
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <View style={{ width: '100%' }}>
          <Text style={styles.header}>Discover Meditations</Text>
          <View>
            <Text
              style={{
                marginTop: 50,
                textAlign: 'center',
                fontSize: 25,
                fontWeight: 'bold'
              }}
            >
              Positive Energy
            </Text>
          </View>
          <View style={styles.video}>
            <View style={this.state.displaySpinner ? null : {display: 'none'}}>
              <ActivityIndicator size="large" color={colors.lightBlue} />
            </View>
            <YoutubePlayer
              height={300}
              width={Dimensions.get('window').width}
              play={this.state.playing}
              videoId={this.state.posUrl}
              onReady={this.toggleSpinner}
            />
          </View>
          <View>
            <TouchableOpacity
              style={{
                display: 'flex',
                marginLeft: 50,
                marginRight: 50,
                alignItems: 'center',
                backgroundColor: colors.orange,
                borderRadius: 10,
                padding: 15,
                marginTop: -50,
              }}
              onPress={() => {
                this.setState({
                  posUrl: postitiveVideoKeys[randomize(postitiveVideoKeys)].id,
                })
              }}
            >
              <Text style={{ color: 'white', fontSize: 15 }}>Randomize</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text
              style={{
                marginTop: 50,
                textAlign: 'center',
                fontSize: 25,
                fontWeight: 'bold'
              }}
            >
              Depression
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
                backgroundColor: colors.darkBlue,
                borderRadius: 10,
                padding: 15,
                marginTop: -50,
              }}
              onPress={() => {
                this.setState({
                  depressUrl:
                    depressionVideoKeys[randomize(depressionVideoKeys)].id,
                })
              }}
            >
              <Text style={{ color: 'white', fontSize: 15 }}>Randomize</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text
              style={{
                marginTop: 50,
                textAlign: 'center',
                fontSize: 25,
                fontWeight: 'bold'
              }}
            >
              Stress
            </Text>
          </View>
          <View style={styles.video}>
            <YoutubePlayer
              height={300}
              width={Dimensions.get('window').width}
              play={this.state.playing}
              videoId={this.state.stressUrl}
            />
          </View>
          <View>
            <TouchableOpacity
              style={{
                display: 'flex',
                marginLeft: 50,
                marginRight: 50,
                alignItems: 'center',
                backgroundColor: colors.orange,
                borderRadius: 10,
                padding: 15,
                marginTop: -50,
              }}
              onPress={() => {
                this.setState({
                  stressUrl: stressVideoKeys[randomize(stressVideoKeys)].id,
                })
              }}
            >
              <Text style={{ color: 'white', fontSize: 15}}>Randomize</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text
              style={{
                marginTop: 50,
                textAlign: 'center',
                fontSize: 25,
                fontWeight: 'bold'
              }}
            >
              Sleep
            </Text>
          </View>
          <View style={styles.video}>
            <YoutubePlayer
              height={300}
              width={Dimensions.get('window').width}
              play={this.state.playing}
              videoId={this.state.sleepUrl}
            />
          </View>
          <View>
            <TouchableOpacity
              style={{
                display: 'flex',
                marginLeft: 50,
                marginRight: 50,
                alignItems: 'center',
                backgroundColor: colors.darkBlue,
                borderRadius: 10,
                padding: 15,
                marginTop: -50,
              }}
              onPress={() => {
                this.setState({
                  sleepUrl: sleepVideoKeys[randomize(sleepVideoKeys)].id,
                })
              }}
            >
              <Text style={{ color: 'white', fontSize: 15 }}>Randomize</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}
