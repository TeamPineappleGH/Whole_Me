import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './styles'
import { auth, db } from '../../firebase/config.js'
import FontIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from 'theme'

const moodEmoticons = [
  'sentiment-very-dissatisfied',
  'emoticon-angry-outline',
  'sentiment-neutral',
  'sentiment-satisfied',
  'emoticon-excited-outline',
  'circle-outline',
]

const moodPhrases = ['Sad', 'Angry', 'Meh', 'OK', 'Happy', '-']
const moodColors = [
  '#ddb8ba',
  '#ef7583',
  colors.lightPurple,
  colors.darkBlue,
  colors.orange,
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

  const sendAlert = () => {
    Alert.alert('Entry has been deleted!', '', [{ text: 'OK' }])
  }

  const targetEntry = props.route.params
  const targetDate = props.route.params.date

  const deleteEntry = (targetEntry) => {
    db.collection('users')
      .doc(userId)
      .update({
        entries: allEntries.filter((entry) => entry.date !== targetEntry.date),
      })
      .then(sendAlert())
  }

  const edit = () => {
    props.navigation.navigate('Diary', {
      targetDate: targetDate,
    })
  }

  const entryObj = allEntries.filter(
    (entry) => entry.date === props.route.params.date,
  )[0]
  if (entryObj) {
    return (
      <View style={styles.container}>
        <ScrollView
          style={{
            backgroundColor: 'white',
            borderRadius: 15,
            width: '90%',
            margin: 15,
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: 'left',
            }}
          >
            <View style={[styles.flexLeftInner1, { width: '100%' }]}>
              <View
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
              >
                <Text style={{ fontSize: 16, marginTop: 15 }}>Mood:</Text>
                <Text
                  style={[
                    styles.detailsText,
                    {
                      color: moodColors[entryObj.mood],
                      marginLeft: 10,
                    },
                  ]}
                >
                  {moodPhrases[entryObj.mood]}
                </Text>
                <View style={{ marginTop: 15, marginLeft: 10 }}>
                  {entryObj.mood === 1 ? (
                    <FontIcon
                      name={moodEmoticons[entryObj.mood]}
                      color={moodColors[entryObj.mood]}
                      size={25}
                    />
                  ) : entryObj.mood === 4 ? (
                    <FontIcon
                      name={moodEmoticons[entryObj.mood]}
                      color={moodColors[entryObj.mood]}
                      size={25}
                    />
                  ) : (
                    <Icon
                      name={moodEmoticons[entryObj.mood]}
                      color={moodColors[entryObj.mood]}
                      type={
                        entryObj.mood < 5 ? 'ionicons' : 'material-community'
                      }
                      size={25}
                    />
                  )}
                </View>
              </View>
              <Text style={styles.detailsText}>Date: {entryObj.date}</Text>

              <Text style={styles.detailsText}>
                Pill Taken? : {entryObj.pillStatus === true ? 'Yes' : 'No'}
              </Text>

              <Text style={styles.detailsText}>Notes:</Text>

              <View style={[styles.textBox, { marginTop: 15 }]}>
                <Text style={{ fontSize: 16 }}>{targetEntry.writtenDiary}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={[
                styles.customButton,
                { marginTop: 0, marginLeft: 40, width: '80%' },
              ]}
              onPress={() => {
                deleteEntry(targetEntry)
                props.navigation.goBack()
              }}
            >
              <Text style={{ color: 'white', fontSize: 15 }}>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.customButton,
                { marginTop: 0, marginLeft: 40, width: '80%' },
              ]}
              onPress={() => {
                edit()
              }}
            >
              <Text style={{ color: 'white', fontSize: 15 }}>Edit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  } else {
    return null
  }
}
