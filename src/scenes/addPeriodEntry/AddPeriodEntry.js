import React, { useState } from 'react'
import { Button, SafeAreaView, Text, TextInput, TouchableOpacity, View, Linking, StatusBar, useColorScheme } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { firebase } from '../../firebase/config'
import Spinner from 'react-native-loading-spinner-overlay'
import styles from './styles'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import dateFormat from 'dateformat'

export default function AddPeriodEntry() {
  const todaysDate = dateFormat(new Date(), 'yyyy-mm-dd')

  const [periodStartDate, setPeriodStartDate] = useState(todaysDate)
  const [periodDuration, setPeriodDuration] = useState(0)
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const scheme = useColorScheme()

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
    <View>
      <SafeAreaView>
      <Button title="Select Date" onPress={showDatePicker}/>

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
          onPress={() => console.log('PRESSED')}
          style={{
            display: 'flex',
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
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