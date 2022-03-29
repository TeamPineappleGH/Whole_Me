import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet,  ScrollView } from "react-native";
import Entry from "../components/Entry";
import Constants from "expo-constants";
import { Icon, Button } from "react-native-elements";
import {connect} from 'react-redux'
import { showMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message"; 
import { auth, db } from '../../firebase/config.js'
import styles from './styles'
import dateFormat from 'dateformat'

export default function AllEntries(props) {
  renderEntries = ({ item, navigation }) => (
    <Entry {...item} date={item.date} navigation={props.navigation} />
  );


  
  const pressHandler = () => {
    props.navigation.navigate('Diary')
  }


  
    // const userId = auth.currentUser.uid;
    // const userRef = db.collection('users').doc(userId);

    // const [allEntries, setAllEntries] = useState([])
    // // let allEntries;

    // const diaryEntries = async() => {
    //   const user = await userRef.get()
    //   const entries = user.data().entries;
    //   // console.log('this is user data diary entries~', entries);
    //   // setAllEntries(entries)
    //   setAllEntries(entries);
    // }

    // useEffect(async () => {
    //   await diaryEntries()
    // }, [])
// let diaryEntries = db.collection('users').doc(userId).get();
// let TEST;
// db.collection('users').doc(userId).get().then(documentSnapShot => {
//   diaryEntries = documentSnapShot.get('entries');
//   console.log('diary entries in all entries num 2', diaryEntries)
//   });

// const [diaryEntries, setDiaryEntries] = useState([])

// let diaryEntries;

// function getDiaryEntries(documentSnapshot) {
//   return documentSnapshot.get('entries');
// }

// db
//   .collection('users')
//   .doc(userId)
//   .get()
//   .then(documentSnapshot => getDiaryEntries(documentSnapshot))
//   .then(entries => {
//     diaryEntries = entries;
//     console.log('Diary entry is ', entries);
//   });

// const diaryEntries = userRef.get().data().entries;




  // console.log('diary entries in all entries', allEntries);
  let allEntries = [{
    "date": '2019-06-22',
    "mood": 2,
    "status": "Diary Added"},
    {
      "date": '2022-02-02',
      "mood": 3,
      "status": "Diary Added"
    },
    {
      "date": '2019-01-10',
      "mood": 2,
      "status": "Diary Added"
    },
    {
      "date": '2019-07-21',
      "mood": 5,
      "status": "Diary Added"
    }]

  
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.h1}>Entries</Text>
        </View>
        <View>
          <FlatList
            renderItem={renderEntries}
            data={allEntries.sort(
              (a, b) => new Date(b.date) - new Date(a.date)
            )}




            
            style={{ marginBottom: 60 }}
            // keyExtractor={(item) => item.date.toString()}
            keyExtractor={(item) => item.date}
          />
          <Button title='Add New Entry' onPress={pressHandler}/>

          <Text>hello</Text>
        </View>
        <FlashMessage position="top" />
        <Text>This is the All Entries Page!!</Text>
        
      </View>
    );
  }

