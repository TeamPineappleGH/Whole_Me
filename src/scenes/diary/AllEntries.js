import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import Entry from '../components/Entry'
import { Icon, Button } from 'react-native-elements'
import FlashMessage from 'react-native-flash-message'
import { auth, db } from '../../firebase/config.js'
import styles from './styles'
import Diary from './Diary'

export default function AllEntries(props) {
  renderEntries = ({ item, navigation }) => (
    <Entry {...item} date={item.date} navigation={props.navigation} />
  )

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
  }, [allEntries])
  const pressHandler = () => {
    props.navigation.navigate('Diary')
  }

  if (allEntries.length > 0) {
    return (
      <View style={{ flex: 1, marginVertical: 10 }}>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 15,
              width: '90%',
              // padding: 30,
              flex: 1,
            }}
          >
            {/* <Text style={styles.header}>Entries</Text> */}
            <FlatList
              renderItem={renderEntries}
              data={allEntries.sort(
                (a, b) => new Date(b.date) - new Date(a.date),
              )}
              style={styles.flatList}
              keyExtractor={(item) => item.date}
            />

            <TouchableOpacity
              style={styles.customButton}
              onPress={pressHandler}
            >
              <Text style={{ color: 'white', fontSize: 15 }}>
                Add New Entry
              </Text>
            </TouchableOpacity>
          </View>
          <FlashMessage position="top" />
        </View>
      </View>
    )
  } else {
    return (
      <TouchableOpacity
      style={styles.customButton}
      onPress={pressHandler}
    >
      <Text style={{ color: 'white', fontSize: 15 }}>
        Add New Entry
      </Text>
    </TouchableOpacity>
    )
  }
}
