import React, { useEffect, useState } from 'react'
import { Image, Text, View, ScrollView, StatusBar, useColorScheme, TouchableWithoutFeedback } from 'react-native'
// import { firebase } from '../../firebase/config'
import styles from './styles'
import { Button } from 'react-native-elements'


export default function Wellness(props) {
  const userData = props.extraData
  const scheme = useColorScheme()

  const pressHandler = () => {
    console.log('props in pressHandler-->', props);
    props.navigation.navigate('Fitness')
  }

  const onCyclePress = () => {
    props.navigation.navigate('Cycle')
  }

  return (
    <ScrollView style = {styles.main} >
      <View style = {styles.iconContainer}>

      <TouchableWithoutFeedback style = {styles.flexLeft1} onPress={pressHandler}>
      <View style = {styles.flexLeft1}>
      <Image style = {styles.tinyLogo} source={require('../../../assets/images/fitness.png')} />
      <Text style = {styles.text} >FITNESS</Text>
      </View>
      </TouchableWithoutFeedback>
      {/* <Button title="Fitness" onPress={pressHandler}></Button> */}

      <View style = {styles.flexRight1}>
      <Image style = {styles.tinyLogo} source={require('../../../assets/images/meditating.png')}  />
      <Text style = {styles.text} >MEDITATION</Text>
      </View>
      <View style = {styles.flexRight2}>
      <Image style = {styles.tinyLogo} source={require('../../../assets/images/brain.png')}  />
      <Text style = {styles.text} >MENTAL HEALTH</Text>
      </View>
      <TouchableWithoutFeedback style = {styles.flexLeft2} onPress={onCyclePress}>
        <View style = {styles.flexLeft2}>
        <Text style = {styles.text} >CYCLE PHASES</Text>
        </View>
      </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  )
} 