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
  const menstrualPhase = {color: '#1c9ab7'};
  const follicularPhase = {color: '#9ad0ec'}
  const ovulationPhase = {color: '#efdad7'}
  const lutealPhase = {color: '#f98c41'}
  let menstrualPhaseArray = [];
  let follicularPhaseArray = [];
  let ovulationPhaseArray = [];
  let lutealPhaseArray = [];

  const userId = auth.currentUser.uid
  const userRef = db.collection('users').doc(userId)

  const [markedDates, setMarkedDates] = useState({})

  const phases = async () => {
    const user = await userRef.get()
    const periodDuration = user.data().duration
    const startDate = user.data().periodStartDate.toDate()
    const markedDatesObj = {};

    for (let i = 1; i <= 28; i++) {
      if (i <= periodDuration) {
        menstrualPhaseArray.push(dateFormat(startDate, "yyyy-mm-dd"))
        startDate.setDate(startDate.getDate() + 1)
      } else if (i > periodDuration && i <= 13) {
        follicularPhaseArray.push(dateFormat(startDate, "yyyy-mm-dd"))
        startDate.setDate(startDate.getDate() + 1)
      } else if (i === 14) {
        ovulationPhaseArray.push(dateFormat(startDate, "yyyy-mm-dd"))
        startDate.setDate(startDate.getDate() + 1)
      } else {
        lutealPhaseArray.push(dateFormat(startDate, "yyyy-mm-dd"))
        startDate.setDate(startDate.getDate() + 1)
      }
    }

    menstrualPhaseArray.map((date) => {
      markedDatesObj[`${date}`] = {dots: [menstrualPhase], selected: true, selectedColor: '#1c9ab7'}
    })

    follicularPhaseArray.map((date) => {
      markedDatesObj[`${date}`] = {dots: [follicularPhase], selected: true, selectedColor: '#9ad0ec'}
    })

    ovulationPhaseArray.map((date) => {
      markedDatesObj[`${date}`] = {dots: [ovulationPhase], selected: true, selectedColor: '#efdad7'}
    })

    lutealPhaseArray.map((date) => {
      markedDatesObj[`${date}`] = {dots: [lutealPhase], selected: true, selectedColor: '#f98c41'}
    })

    setMarkedDates(markedDatesObj)
  }

  useEffect(async () => {
    await phases()
  }, [])

    return (
      <View style={{margin: 20, borderRadius: 15, backgroundColor: 'white', paddingTop: 15}}>
        <Calendar 
          markingType={'multi-dot'}
          markedDates={markedDates}
        />

      <View style={{margin: 20}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
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
          alignItems: 'center',
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
          alignItems: 'center',
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
          alignItems: 'center',
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
        style={{margin: 50}}
      />
    </View>
    </View>
  )
}
