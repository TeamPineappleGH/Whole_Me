import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  useColorScheme,
  Button,
} from 'react-native'
import styles from './styles'
import { firebase } from '../../firebase/config'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import Triangle from 'react-native-triangle'
import { colors } from 'theme'

export default function Diary(props) {
  const userData = props.extraData
  const scheme = useColorScheme()

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [pickedDate, setPickedDate] = useState('')

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date) => {
    // console.warn('A date has been picked: ', date)
    setPickedDate(date)
    console.log('this is picked Date!', typeof pickedDate)
    hideDatePicker()
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, width: '100%' }}>
        <ScrollView style={styles.main}>
          <Text style={scheme === 'dark' ? styles.darkfield : styles.field}>
            This is the diary page!
          </Text>
          <Button title="" onPress={showDatePicker}>
            <Text>
              {' '}
              <Triangle
                width={18}
                height={10}
                color={colors.orange}
                direction={'down'}
              />
            </Text>
          </Button>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />

          <Text>This is the picked date!!: {String(pickedDate)}</Text>

          <Text onPress={showDatePicker}>
            {' '}
            <Triangle
              width={18}
              height={10}
              color={colors.orange}
              direction={'down'}
            />
          </Text>
        </ScrollView>
      </View>
    </View>
  )
}
