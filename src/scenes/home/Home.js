import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, StatusBar, useColorScheme, Image } from 'react-native'
import styles from './styles'
import { firebase } from '../../firebase/config'

export default function Home(props) {
  const userData = props.extraData
  const [token, setToken] = useState('')
  const scheme = useColorScheme()

  useEffect(() => {
    firebase.firestore()
      .collection('tokens')
      .doc(userData.id)
      .get().then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          const data = doc.data()
          setToken(data)
        } else {
          console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, width: '100%' }}>
        <ScrollView style={styles.main}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 200,
              zIndex: 600,
            }}
          >
            <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
            }}
            >hi there</Text>
            <Image source={require('../../../assets/images/phase1-01.png')} />

          </View >
        </ScrollView>
        {/* <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 100,
         //size of div small with width and height - if it wont take up 
         //space of circle
          }}>
            
          </View>
         */}
      </View>
    </View>
  )
}