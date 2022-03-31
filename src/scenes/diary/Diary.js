import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  useColorScheme,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native'
import styles from './styles'
import { firebase } from '../../firebase/config'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import Triangle from 'react-native-triangle'
import { colors } from 'theme'
import dateFormat from 'dateformat'
import { Icon } from 'react-native-elements'
import Constants from 'expo-constants'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { auth, db } from '../../firebase/config.js'
// import firestore from '@react-native-firebase/firestore';

const decodedMoodPhrase = [
  'Depressed',
  'Dissatisfied',
  'Average',
  'Satisfied',
  'Delighted',
  '-',
]

const decodedMoodColours = [
  '#54539D',
  '#7187D6',
  '#a6808c',
  '#ee964b',
  '#F67251',
  '#0000008A',
]

export default function Diary(props) {
  const userData = props.extraData

  const userId = auth.currentUser.uid

  // const scheme = useColorScheme()

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [pickedDate, setPickedDate] = useState(Date())
  const [mood, setMood] = useState(5)
  // const [mode, setMode] = useState("date");
  const [writtenDiary, setWrittenDiary] = useState('')
  const [allowPopulating, setAllowPopulate] = useState(false)

  const clearState = () => {
    setPickedDate(Date())
    setMood(5)
    setMode('date')
    setWrittenDiary('')
    setAllowPopulate(false)
  }

  let diaryEntries

  db.collection('users')
    .doc(userId)
    .get()
    .then((documentSnapShot) => {
      diaryEntries = documentSnapShot.get('entries')
    })

  const addEntry = (newEntry) => {
    let targetIndex

    for (let i = 0; i < diaryEntries.length; i++) {
      let currentEntry = diaryEntries[i]
      if (currentEntry.date === newEntry.date) {
        targetIndex = i;
        console.log('this is target index!', targetIndex);
      }
    }
    if (targetIndex > -1) {
      diaryEntries[targetIndex] = newEntry

      db.collection('users')
        .doc(userId)
        .update({ entries: diaryEntries })
        .then(() => console.log('existing diary updated!'))
    } else {
      db.collection('users')
        .doc(userId)
        .update({ entries: [...diaryEntries, newEntry] })
        .then(() => console.log('new entry added!'))
    }
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date) => {
    setPickedDate(date)
    hideDatePicker()
  }

  const pressHandler = () => {
    props.navigation.navigate('All Entries')
  }

  const handleTextChange = (writtenDiary) => {
    setWrittenDiary(writtenDiary)
  }

  const storeEntry = () => {
    entryObj = {
      date: dateFormat(pickedDate, 'isoDate'),
      mood: mood,
      status: writtenDiary ? 'Diary Added' : 'No Diary Added',
      writtenDiary: writtenDiary,
    }
    addEntry(entryObj)
    props.navigation.goBack()
    console.log('this is entry object----->', entryObj)
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      <View style={styles.container}>
        <ScrollView style={styles.flexLeftInner1}>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text onPress={showDatePicker}>
              {dateFormat(pickedDate, 'dddd, mmmm dS')}
            </Text>

            <Text onPress={showDatePicker}>
              {' '}
              <Triangle
                width={13}
                height={9}
                color={colors.gray}
                direction={'down'}
              />
            </Text>
          </View>

          <View style={styles.linebreak} />

          <Text> Today's Moods: </Text>

          <View
            style={{
              alignItems: 'center',
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <TouchableWithoutFeedback onPress={() => setMood(0)}>
                <Icon
                  name="sentiment-very-dissatisfied"
                  color={mood === 0 ? decodedMoodColours[mood] : '#0000008A'}
                  size={50}
                  style={styles.emoji}
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => setMood(1)}>
                <Icon
                  name="sentiment-dissatisfied"
                  color={mood === 1 ? decodedMoodColours[mood] : '#0000008A'}
                  size={50}
                  style={styles.emoji}
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => setMood(2)}>
                <Icon
                  name="sentiment-neutral"
                  color={mood === 2 ? decodedMoodColours[mood] : '#0000008A'}
                  size={50}
                  style={styles.emoji}
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => setMood(3)}>
                <Icon
                  name="sentiment-satisfied"
                  color={mood === 3 ? decodedMoodColours[mood] : '#0000008A'}
                  size={50}
                  style={styles.emoji}
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => setMood(4)}>
                <Icon
                  name="sentiment-very-satisfied"
                  color={mood === 4 ? decodedMoodColours[mood] : '#0000008A'}
                  size={50}
                  style={styles.emoji}
                />
              </TouchableWithoutFeedback>
            </View>
            <Text style={[styles.h1, { color: decodedMoodColours[mood] }]}>
              {decodedMoodPhrase[mood]}
            </Text>
          </View>

          <TextInput
            multiline
            editable
            onChangeText={(text) => handleTextChange(text)}
            value={writtenDiary}
            style={styles.input}
            placeholder="Write your journal here"
            numberOfLines={4}
            maxLength={400}
          />

          <TouchableOpacity style={styles.customButton} onPress={storeEntry}>
            <Text style={{ color: 'white', fontSize: 15 }}>Save</Text>
          </TouchableOpacity>

          <View style={styles.linebreak} />

          <TouchableOpacity style={styles.customButton} onPress={pressHandler}>
            <Text style={{ color: 'white', fontSize: 15 }}>
              See All Entries
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  )
}
