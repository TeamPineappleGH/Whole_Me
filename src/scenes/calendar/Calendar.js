import React, { useEffect, useState } from 'react'
import { Calendar } from 'react-native-calendars'
import { Text, View, Button, useColorScheme, Alert } from 'react-native'
import styles from './styles'
import { auth, db } from '../../firebase/config.js'
import dateFormat from 'dateformat'

// Menstrual phase (From day 1 to 5)
// Follicular phase (From day 1 to 13)
// Ovulation phase (Day 14)
// Luteal phase (From day 15 to 28)

// first day of last period start date: 3/5/2022
// duration: 5
// note: avg cycle is 28 days

// STEPS:
  // 1. Need to grab the above info from firebase for signed in user
    // DONE

  // 2. CREATE FUNCTION FOR SETTING STATE AND GETTING DATE ARRAYS
  // 2. MAP ACROSS DATE ARRAYS
  // 3. PUT MAPPED ARRAY RESLTS INTO GLOBAL markedDates VARIABLE 

  // 3. Integrating logic with the API

export default function CalendarView() {
  const scheme = useColorScheme()
  // let markedDates = {};

  const userId = auth.currentUser.uid
  const userRef = db.collection('users').doc(userId)

  const [periodStart, setPeriodStart] = useState('')
  const [periodDuration, setPeriodDuration] = useState(0)

  const userInformation = async () => {
    const user = await userRef.get()
    const periodDuration = user.data().duration
    const startDate = user.data().periodStartDate.toDate()

    setPeriodStart(dateFormat(startDate, "yyyy-mm-dd"))
    setPeriodDuration(periodDuration)
  }

  const phases = async () => {
    console.log(userInformation())
    // console.log("SET DATE", startDate.setDate(startDate.getDate() + 1).toDate())
  }

  useEffect(async () => {
    userInformation()
  }, [])

  console.log("PERIOD START STATE", periodStart)
  console.log("PERIOD DURATION STATE", periodDuration)
  console.log('PERIOD START BOOLEAN', periodStart === '2022-03-08')

  const menstrualPhase = {color: 'red'};
  const periodDate = '2022-03-08'

    return (
      <View>
        <Calendar 
          markingType={'multi-dot'}
          markedDates={{
            [`${periodStart}`]: {dots: [menstrualPhase]}
          }}
        />

      <Text style={scheme === 'dark' ? styles.darktitle : styles.title}>
        Key:
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            width: 30,
            height: 8,
            backgroundColor: '#1c9ab7',
            margin: 5,
          }}
        ></View>

        <View>
          <Text
            style={
              scheme === 'dark' ? styles.darkPhaseTitle : styles.phaseTitle
            }
          >
            Menstrual Phase
          </Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            width: 30,
            height: 8,
            backgroundColor: '#9ad0ec',
            margin: 5,
          }}
        ></View>
        <Text
          style={scheme === 'dark' ? styles.darkPhaseTitle : styles.phaseTitle}
        >
          Follicular Phase
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            width: 30,
            height: 8,
            backgroundColor: '#efdad7',
            margin: 5,
          }}
        ></View>
        <Text
          style={scheme === 'dark' ? styles.darkPhaseTitle : styles.phaseTitle}
        >
          Ovulation Phase
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            width: 30,
            height: 8,
            backgroundColor: '#f98c41',
            margin: 5,
          }}
        ></View>
        <Text
          style={scheme === 'dark' ? styles.darkPhaseTitle : styles.phaseTitle}
        >
          Luteal Phase
        </Text>
      </View>
      <Button
        title="Update Period Entry"
        onPress={() => Alert.alert('Button pressed')}
        color="#1c9ab7"
      />
    </View>
  )
}
