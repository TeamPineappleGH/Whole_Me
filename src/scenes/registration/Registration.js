import React, { useState } from 'react'
import { Image, Button, SafeAreaView, Text, TextInput, TouchableOpacity, View, Linking, StatusBar, useColorScheme } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';
import { firebase } from '../../firebase/config'
import Spinner from 'react-native-loading-spinner-overlay'
import dateFormat from 'dateformat'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

export default function Registration({navigation}) {
  const todaysDate = dateFormat(new Date(), 'yyyy-mm-dd')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [periodStartDate, setPeriodStartDate] = useState(todaysDate)
  const [periodDuration, setPeriodDuration] = useState(0)
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [spinner, setSpinner] = useState(false)
  const scheme = useColorScheme()

  const onFooterLinkPress = () => {
    navigation.navigate('Login')
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date) => {
    setPeriodStartDate(dateFormat(date, 'yyyy-mm-dd'))
    hideDatePicker()
  }

  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.")
      return
    }
    const toDate = new Date(periodStartDate)
    const myTimeStamp = firebase.firestore.Timestamp.fromDate(toDate)

    setSpinner(true)
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const data = {
          id: uid,
          email,
          fullName,
          duration: periodDuration,
          periodStartDate: myTimeStamp,
          entries: [],
        };
        const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate('Home', {user: data})
          })
          .catch((error) => {
            setSpinner(false)
            alert(error)
          });
      })
      .catch((error) => {
        setSpinner(false)
        alert(error)
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
        <Image
          style={styles.logo}
          source={require('../../../assets/images/whole-me-logo.png')}
        />
        <TextInput
          style={scheme === 'dark' ? styles.darkinput : styles.input}
          placeholder='Your Name'
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setFullName(text)}
          value={fullName}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={scheme === 'dark' ? styles.darkinput : styles.input}
          placeholder='E-mail'
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          keyboardType={'email-address'}
        />
        <TextInput
          style={scheme === 'dark' ? styles.darkinput : styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder='Password'
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={scheme === 'dark' ? styles.darkinput : styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder='Confirm Password'
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        
        <TouchableOpacity 
          onPress={showDatePicker}
          style={scheme === 'dark' ? styles.darkinput : styles.input}
        >
          <Text style={{textAlign: 'left', color: '#a9a9a9', marginTop: 14}}>Select Period Start Date: <Text style={{color: 'black'}}>{`${"    "} ${periodStartDate}`}</Text></Text>
        </TouchableOpacity>
        <SafeAreaView>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              />
          </SafeAreaView>

        <TextInput
          style={scheme === 'dark' ? styles.darkinput : styles.input}
          placeholder='Period Duration'
          placeholderTextColor="#aaaaaa"
          onChangeText={(number) => setPeriodDuration(number)}
          value={periodDuration}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          keyboardType={'numeric'}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => onRegisterPress()}>
          <Text style={{color: 'white', fontSize: 15}}>Agree and Create account</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={scheme === 'dark' ? styles.darkfooterText : styles.footerText}>Already have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
        </View>
        <Text style={styles.link} onPress={ ()=>{ Linking.openURL('https://github.com/kiyohken2000/reactnative-expo-firebase-boilerplate')}}>Require agree EULA</Text>
      </KeyboardAwareScrollView>
      <Spinner
        visible={spinner}
        textStyle={{ color: "#fff" }}
        overlayColor="rgba(0,0,0,0.5)"
      />
    </View>
  )
}
