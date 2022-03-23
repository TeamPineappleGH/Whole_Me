import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, StatusBar, useColorScheme } from 'react-native'
import styles from './styles'
import { firebase } from '../../firebase/config'

export default function Nutrition(props) {
  const userData = props.extraData
  const scheme = useColorScheme()

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, width: '100%' }}>
        <ScrollView style={styles.main}>
          <Text style={scheme === 'dark' ? styles.darkfield : styles.field}>
            This is the nutrition page!
          </Text>
        </ScrollView>
      </View>
    </View>
  )
}
