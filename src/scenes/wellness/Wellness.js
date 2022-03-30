import React, { useEffect, useState } from 'react'
import { Image, Text, View, ScrollView, StatusBar, useColorScheme, TouchableWithoutFeedback } from 'react-native'
// import { firebase } from '../../firebase/config'
import styles from './styles'
import { Button } from 'react-native-elements'


export default function Wellness(props) {
  const userData = props.extraData
  const scheme = useColorScheme()

  const pressHandler1 = () => {
    console.log('props in pressHandler-->', props);
    props.navigation.navigate('Fitness')
  }

  const onCyclePress = () => {
    props.navigation.navigate('Cycle')
  }
  
  const pressHandler2 = () => {
    props.navigation.navigate('Meditation')
  }

  const onMentalHealthPress = () => {
    props.navigation.navigate('Mental Health')
  }

  return (
    <ScrollView style = {styles.main} >
      <View style = {styles.iconContainer}>

      <View>
      <TouchableWithoutFeedback style={styles.flexLeft1} onPress={pressHandler1}>
          <View style={styles.flexLeft1}>
            <Image style={styles.tinyLogo} source={require('../../../assets/images/fitness.png')} />
            <Text style={styles.text} >FITNESS</Text>
          </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback style={styles.flexRight1} onPress={pressHandler2}>
        <View style={styles.flexRight1}>
          <Image style={styles.tinyLogo} source={require('../../../assets/images/meditating.png')} />
          <Text style={styles.text} >MEDITATION</Text>
        </View>
      </TouchableWithoutFeedback>
      </View>

      <View>
      <TouchableWithoutFeedback style={styles.flexRight2} onPress={onMentalHealthPress}>
        <View style = {styles.flexRight2}>
          <Image style = {styles.tinyLogo} source={require('../../../assets/images/brain.png')}  />
          <Text style = {styles.text} >MENTAL HEALTH</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback style = {styles.flexLeft2} onPress={onCyclePress}>
        <View style = {styles.flexLeft2}>
        <Image style = {styles.tinyLogo} source={require('../../../assets/images/cycle-grey-01.png')}  />
        <Text style = {styles.text} >YOUR CYCLE</Text>
        </View>
      </TouchableWithoutFeedback>
      </View>

      </View>
    </ScrollView >
  )
}