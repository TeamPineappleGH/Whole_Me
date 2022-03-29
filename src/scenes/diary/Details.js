import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import Constants from 'expo-constants'
import { Button } from 'react-native-elements'
import styles from './styles'
import { auth, db } from '../../firebase/config.js'

const decodedMoodEmoticons = [
  'sentiment-very-dissatisfied',
  'sentiment-dissatisfied',
  'sentiment-neutral',
  'sentiment-satisfied',
  'sentiment-very-satisfied',
  'circle-outline',
]
const decodedMoodPhrase = [
  'Depressed',
  'Dissatisfied',
  'Mediocre',
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

export default function DetailsScreen(props) {
  const userId = auth.currentUser.uid
  const userRef = db.collection('users').doc(userId)
  const [allEntries, setAllEntries] = useState([])

  const diaryEntries = async () => {
    const user = await userRef.get()
    const entries = user.data().entries

    setAllEntries(entries)
  }

  useEffect(async () => {
    await diaryEntries()
  }, [])

//   const targetEntry = {

//   }
// console.log('this is props in details!!', props.route.params);

const targetEntry = props.route.params;

  const deleteEntry = (targetEntry) => {
    db.collection('users')
      .doc(userId)
      .update({
        entries: allEntries.filter(
          (entry) => entry.writtenDiary !== targetEntry.writtenDiary,
        ),
      })
      // .update({ entries: db.FieldValue.arrayRemove(currentEntry) })
      .then(() => console.log('diary entry deleted!'))
    // return
  }

  const entryObj = allEntries.filter(
    (entry) => entry.date === props.route.params.date,
  )[0]
  if (entryObj) {
    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: 'flex-start',
            paddingLeft: 10,
            paddingTop: 10,
          }}
        >
          <Button
            onPress={() => props.navigation.goBack()}
            color="#fff"
            icon={<Icon name="arrow-left" size={32} type="feather" />}
            style={{ position: 'absolute', left: 0, flex: 1 }}
            iconLeft
            type="clear"
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
          }}
        >
          <Icon
            name={decodedMoodEmoticons[entryObj.mood]}
            color={decodedMoodColours[entryObj.mood]}
            size={120}
            type={entryObj.mood < 5 ? 'ionicons' : 'material-community'}
          />
          <View style={{ paddingHorizontal: 15 }}>
            <Text
              style={[styles.h1, { color: decodedMoodColours[entryObj.mood] }]}
            >
              {decodedMoodPhrase[entryObj.mood]}
            </Text>
            <Text style={[styles.text, { fontWeight: '700' }]}>
              {entryObj.date}
            </Text>

            <Text style={[styles.text, { fontWeight: '700' }]}>{targetEntry.writtenDiary}</Text>
          </View>
        
          <Button
            title="Delete"
            type="clear"
            onPress={() => {
             deleteEntry(targetEntry);
              props.navigation.goBack()
            }}
            buttonStyle={{ paddingTop: 10 }}
          ></Button>
        </View>
      </View>
    )
  } else {
    return null
  }
}
