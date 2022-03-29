import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import Entry from '../components/Entry'
import { Icon, Button } from 'react-native-elements'
import FlashMessage from 'react-native-flash-message'
import { auth, db } from '../../firebase/config.js'
import styles from './styles'

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


  const deleteEntry = (entry) => {
    for (let i = 0; i < diaryEntries.length; i++) {
      let currentEntry = diaryEntries[i]

    }
  }
  

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text style={styles.h1}>Entries</Text>
      </View>
      <View
        // style={{
        //   flex: 1,
        //   backgroundColor: '#fff',
        //   alignItems: 'center',
        // }}
        style={ {
    backgroundColor: 'white',
    borderRadius: 15,
    width: '90%',
    // padding: 30,
    flex: 1
  }}
      >
        <FlatList
          renderItem={renderEntries}
          data={allEntries.sort((a, b) => new Date(b.date) - new Date(a.date))}
          style={styles.flatList}
          // keyExtractor={(item) => item.date.toString()}
          keyExtractor={(item) => item.date}
        />

        <TouchableOpacity style={styles.customButton} onPress={pressHandler}>
          <Text style={{ color: 'white', fontSize: 15 }}>Add New Entry</Text>
        </TouchableOpacity>
      </View>
      <FlashMessage position="top" />
    </View>
  )
}
