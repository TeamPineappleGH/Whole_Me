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
    const toDate = new Date(periodStartDate)
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
      <SafeAreaView>
        <Button title='Select Date' onPress={showDatePicker}/>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
      </SafeAreaView>

      <Text>{periodStartDate}</Text>

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
          style={{
            display: 'flex',
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            width: '80%',
            alignItems: 'center',
            backgroundColor: '#1c9ab7',
            borderRadius: 10,
            padding: 10,
          }}
        >
          <Text style={{color: 'white', fontSize: 15}}>Submit</Text>
        </TouchableOpacity>
    </View>
  )
}