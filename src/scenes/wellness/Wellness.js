import React, { useEffect, useState } from 'react'
import { Image, Text, View, ScrollView, StatusBar, useColorScheme } from 'react-native'
// import { firebase } from '../../firebase/config'
import styles from './styles'


export default function Wellness(props) {
  const userData = props.extraData
  const scheme = useColorScheme()

  return (
    <ScrollView style = {styles.main} >
      <View style = {styles.iconContainer}>
      <View style = {styles.flexLeft1}>
      <Image style = {styles.tinyLogo} source={require('../../../assets/images/fitness.png')}  />
      <Text style = {styles.text} >FITNESS</Text>
      </View>
      <View style = {styles.flexRight1}>
      <Image style = {styles.tinyLogo} source={require('../../../assets/images/meditating.png')}  />
      <Text style = {styles.text} >MEDITATION</Text>
      </View>
      <View style = {styles.flexRight2}>
      <Image style = {styles.tinyLogo} source={require('../../../assets/images/brain.png')}  />
      <Text style = {styles.text} >MENTAL HEALTH</Text>
      </View>
      <View style = {styles.flexLeft2}>
      <Text style = {styles.text} >CYCLE PHASES</Text>
      </View>
      </View>
    </ScrollView>
  )
} 