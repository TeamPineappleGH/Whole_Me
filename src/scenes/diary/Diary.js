import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native'
import styles from './styles'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import Triangle from 'react-native-triangle'
import { colors } from 'theme'
import dateFormat from 'dateformat'
import { Icon } from 'react-native-elements'
import { auth, db } from '../../firebase/config.js'
import FontIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const decodedMoodPhrase = ['Sad', 'Angry', 'Meh', 'OK', 'Happy', '-']

const decodedMoodColours = [
  '#54539D',
  '#7187D6',
  '#a6808c',
  '#ee964b',
  '#F67251',
  '#0000008A',
]

export default function Diary(props) {
  const userId = auth.currentUser.uid

  let date = Date()

  if (props.route.params !== undefined) {
    const isoStr = props.route.params.targetDate
    date = new Date(isoStr)
    date.setDate(date.getDate() + 1)
    console.log('this is new date', date)
  }

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [pickedDate, setPickedDate] = useState(date)
  const [mood, setMood] = useState(5)
  const [pillStatus, setPillStatus] = useState(false)
  const [writtenDiary, setWrittenDiary] = useState('')
  const [status, setStatus] = useState('Save')

  const sendAlert = () => {
    Alert.alert('Existing entry has been updated!', '', [{ text: 'OK' }])
  }

  const sendNewAlert = () => {
    Alert.alert('New entry has been added!', '', [{ text: 'OK' }])
  }

  const clearState = () => {
    setPickedDate(pickedDate)
    setMood(5)
    setWrittenDiary('')
    setStatus('Save')
    setPillStatus(false)
  }

  let diaryEntries

  db.collection('users')
    .doc(userId)
    .get()
    .then((documentSnapShot) => {
      diaryEntries = documentSnapShot.get('entries')
    })

  const doesExist = async (date) => {
    let entries

    await db
      .collection('users')
      .doc(userId)
      .get()
      .then((documentSnapShot) => {
        entries = documentSnapShot.get('entries')
      })

    for (let element of entries) {
      if (element.date === date) {
        console.log('this is exists!')
        setMood(element.mood)
        setWrittenDiary(element.writtenDiary)
        setStatus('Update')
        return
      }
    }
    clearState()
  }

  useEffect(async () => {
    await doesExist(dateFormat(pickedDate, 'isoDate'))
  }, [pickedDate])

  const addEntry = (newEntry) => {
    let targetIndex = -1

    for (let i = 0; i < diaryEntries.length; i++) {
      let currentEntry = diaryEntries[i]
      if (currentEntry.date === newEntry.date) {
        targetIndex = i
        console.log('this is target index!', targetIndex)
      }
    }
    if (targetIndex > -1) {
      diaryEntries[targetIndex] = newEntry

      db.collection('users')
        .doc(userId)
        .update({ entries: diaryEntries })
        .then(sendAlert())

      targetIndex = -1
    } else {
      db.collection('users')
        .doc(userId)
        .update({ entries: [...diaryEntries, newEntry] })
        .then(sendNewAlert())
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
      pillStatus: pillStatus,
    }
    addEntry(entryObj)
    props.navigation.navigate('All Entries')
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

          <Text> Today's Mood: </Text>

          <View
            style={{
              alignItems: 'center',
            }}
          >
            <View
              style={{
                display: 'flex',
                padding: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
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
                <FontIcon
                  name="emoticon-angry-outline"
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
                <FontIcon
                  name="emoticon-excited-outline"
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

          <View style={styles.linebreak} />

          <Text> Pill Taken: </Text>

          <View
            style={{
              display: 'flex',
              padding: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => setPillStatus(!pillStatus)}
            >
              <FontIcon
                name="pill"
                color={pillStatus === true ? colors.orange : '#0000008A'}
                size={50}
                style={styles.emoji}
              />
            </TouchableWithoutFeedback>
          </View>

          <Text
            style={[
              styles.h1,
              { color: pillStatus === true ? colors.orange : '#0000008A' },
            ]}
          >
            {pillStatus ? 'Yes' : 'No'}
          </Text>

          <View style={styles.linebreak} />

          <Text> Notes: </Text>

          <View style={styles.textBox}>
            <TextInput
              multiline
              editable
              onChangeText={(text) => handleTextChange(text)}
              value={writtenDiary}
              style={styles.input}
              placeholder="Write entry here"
              numberOfLines={4}
              maxLength={500}
            />
          </View>

          <TouchableOpacity style={styles.customButton} onPress={storeEntry}>
            <Text style={{ color: 'white', fontSize: 15 }}>{status}</Text>
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
