import React, { useEffect, useState } from 'react'
import { View, Text, FlatList} from "react-native";
import Entry from "../components/Entry";
import { Icon, Button } from "react-native-elements";
import FlashMessage from "react-native-flash-message"; 
import { auth, db } from '../../firebase/config.js'
import styles from './styles'


export default function AllEntries(props) {
  renderEntries = ({ item, navigation }) => (
    <Entry {...item} date={item.date} navigation={props.navigation} />
  );


  const pressHandler = () => {
    props.navigation.navigate('Diary')
  }
  
    const userId = auth.currentUser.uid;
    const userRef = db.collection('users').doc(userId);
    const [allEntries, setAllEntries] = useState([])

    const diaryEntries = async() => {
      const user = await userRef.get()
      const entries = user.data().entries;

      setAllEntries(entries);
    }

    useEffect(async () => {
      await diaryEntries()
    }, [])

  
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
        </View>
        <FlashMessage position="top" />
      
      </View>
    );
  }

