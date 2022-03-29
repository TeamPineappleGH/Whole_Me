import React, { useEffect, useState } from 'react'
import { Text, View, StatusBar, TextInput, TouchableOpacity, useColorScheme } from 'react-native'
import styles from './styles'
import { firebase } from '../../firebase/config'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Detail({ route, navigation }) {
  const [fullName, setFullName] = useState('')
  const [progress, setProgress] = useState('')
  const [email, setEmail] = useState('')
  const userData = route.params.userData
  const scheme = useColorScheme()

  useEffect(() => {
    setFullName(userData.fullName)
    setEmail(userData.email)
  },[])

  const profileUpdate = () => {
    const data = {
      id: userData.id,
      email: userData.email,
      fullName: fullName,
    }
    const userRef = firebase.firestore().collection('users').doc(userData.id)
    userRef.update(data)
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
          <Text style={scheme === 'dark' ? styles.darkprogress : styles.progress}>{progress}</Text>
          <Text style={scheme === 'dark' ? styles.darkfield : styles.field}>Name:</Text>
          <TextInput
            style={scheme === 'dark' ? styles.darkinput : styles.input}
            placeholder={fullName}
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <Text style={scheme === 'dark' ? styles.darkfield : styles.field}>Email:</Text>
          <TextInput
            style={scheme === 'dark' ? styles.darkinput : styles.input}
            placeholder={email}
            placeholderTextColor="#aaaaaa"
            onChangeText={(email) => setEmail(email)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            keyboardType={'email-address'}
          />
          
          <TouchableOpacity style={styles.button} onPress={profileUpdate}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  )
}