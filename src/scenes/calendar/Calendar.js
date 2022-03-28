import React, { useEffect, useState } from 'react'
import { Calendar } from 'react-native-calendars'
import { Text, View, TouchableOpacity, useColorScheme } from 'react-native'
import styles from './styles'
import { auth, db } from '../../firebase/config.js'
import dateFormat from 'dateformat'
import { connect } from 'react-redux';
import { setPhase } from '../../store/calendar.js'
import FontIcon2 from 'react-native-vector-icons/Ionicons'
import { useIsFocused } from '@react-navigation/native';

function CalendarView(props) {
  const scheme = useColorScheme()
  const menstrualPhase = {color: '#1c9ab7'};
  const follicularPhase = {color: '#9ad0ec'}
  const ovulationPhase = {color: '#efdad7'}
  const lutealPhase = {color: '#f98c41'}
  let menstrualPhaseArray = [];
  let follicularPhaseArray = [];
  let ovulationPhaseArray = [];
  let lutealPhaseArray = [];
  const isFocused = useIsFocused();

  const onAddEntryPress = () => {
    console.log('Hello world')
    props.navigation.navigate('Add Period Entry')
  }

  const todaysDate = dateFormat(new Date (), "yyyy-mm-dd")

  const userId = auth.currentUser.uid
  const userRef = db.collection('users').doc(userId)

  const [markedDates, setMarkedDates] = useState({})

  const phases = async () => {
    const user = await userRef.get()
    const periodDuration = user.data().duration
    const startDate = user.data().periodStartDate.toDate()
    const markedDatesObj = {};
    console.log(startDate)

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

  useEffect(async () => {
    await phases()
  }, [isFocused])

  useEffect (() => {
    for (const key in markedDates) {
      if (key === todaysDate) {
        const colorArray = markedDates[key]["dots"]
        const currentPhaseColor = colorArray[0]["color"]
        props.setCurrentPhase(currentPhaseColor)
      }
    }
  })

    return (
      <View style={{margin: 20, borderRadius: 15, backgroundColor: 'white', paddingTop: 15}}>
        <Calendar 
          markingType={'multi-dot'}
          markedDates={markedDates}
          hideExtraDays={true}
          enableSwipeMonths={true}
          style={{height: 325}}
          theme={{
            arrowColor: '#1c9ab7',
            textDayFontSize: 14,
            textDayFontWeight: '400',
          }}
        />

      <View style={{margin: 15}}>
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
            borderRadius: 30
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
            borderRadius: 30
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
            borderRadius: 30
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
            borderRadius: 30
          }}
        ></View>
        <Text
          style={scheme === 'dark' ? styles.darkPhaseTitle : styles.phaseTitle}
        >
          Luteal Phase
        </Text>
      </View>
      <TouchableOpacity
        title="Add Period Entry"
        onPress={onAddEntryPress}
        color="#1c9ab7"
        style={{
          display: 'flex',
          marginTop: 35,
          marginLeft: 20,
          marginRight: 20,
          alignItems: 'center',
          backgroundColor: '#1c9ab7',
          borderRadius: 10,
          padding: 10,
        }}
      >
        <Text style={{color: 'white', fontSize: 15}}>
          <FontIcon2 
            name='add-circle-outline'
            size={15}
            margin={20}
          />
          Add Period Entry
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

const mapDispatch = (dispatch) => {
  return {
    setCurrentPhase: (phaseColor) => dispatch(setPhase(phaseColor)),
  };
};

export default connect(null, mapDispatch)(CalendarView);
