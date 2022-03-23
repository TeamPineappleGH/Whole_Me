import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, StatusBar, useColorScheme } from 'react-native'
import styles from './styles'
import { firebase } from '../../firebase/config'

export default function Diary(props) {
  const userData = props.extraData
  const scheme = useColorScheme()

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, width: '100%' }}>
        <ScrollView style={styles.main}>
          <Text style={scheme === 'dark' ? styles.darkfield : styles.field}>
            This is the diary page!
          </Text>
        </ScrollView>
      </View>
    </View>
  )
}
