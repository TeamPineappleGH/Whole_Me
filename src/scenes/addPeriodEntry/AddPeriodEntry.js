import React, { useState } from 'react'
import { Button, SafeAreaView, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native'
import { firebase } from '../../firebase/config'
import styles from './styles'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import dateFormat from 'dateformat'

export default function AddPeriodEntry(props) {
  const todaysDate = dateFormat(new Date(), 'yyyy-mm-dd')
  const userData = props.extraData
  const navigation = props.navigation

  const [periodStartDate, setPeriodStartDate] = useState(todaysDate)
  const [periodDuration, setPeriodDuration] = useState(0)
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const scheme = useColorScheme()

  const periodUpdate = () => {
    const toDate = new Date(periodStartDate.replace(/-/g, '\/').replace(/T.+/, ''))
    const myTimeStamp = firebase.firestore.Timestamp.fromDate(toDate)

    const data = {
      duration: periodDuration,
      periodStartDate: myTimeStamp,
    }
    const userRef = firebase.firestore().collection('users').doc(userData.id)
    userRef.update(data)
    navigation.goBack()
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

  return (
    <View style={styles.container}>
      <TouchableOpacity 
          onPress={showDatePicker}
          style={scheme === 'dark' ? styles.darkinput : styles.input}
        >
          <Text style={{textAlign: 'left', color: '#a9a9a9', marginTop: 14}}>Select Period Start Date: <Text style={{color: 'black'}}>{`${" "} ${periodStartDate}`}</Text></Text>
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
          onPress={periodUpdate}
          style={styles.button}
        >
          <Text style={{color: 'white', fontSize: 15}}>Submit</Text>
        </TouchableOpacity>
    </View>
  )
}