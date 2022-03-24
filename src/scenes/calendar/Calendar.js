import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { Text, View, Button, useColorScheme, Alert } from 'react-native';
import styles from './styles';

// Menstrual phase (From day 1 to 5)
// Follicular phase (From day 1 to 13)
// Ovulation phase (Day 14)
// Luteal phase (From day 15 to 28)

// first day of last period start date: 3/5/2022
// duration: 5
// note: avg cycle is 28 days

// STEPS:
  // Need to grab the above info from firebase for signed in user



export default function CalendarView() {
  const scheme = useColorScheme()

  const [periodDates, setperiodDates] = useState({})
  const [follicularDates, setFollicularDates] = useState({})
  const [ovulationDate, setOvulationDate] = useState({})
  const [lutealDates, setLutealDates] = useState({})

  return (
    <View>
      <Calendar 
        markingType="multi-period"
        markedDates={{
          '2022-03-01': {
            periods: [
              {selected: true, startingDay: true, endingDay: false, color: '#1c9ab7'},
            ]
          },
          '2022-03-02': {
            periods: [
              {selected: true, startingDay: false, endingDay: false, color: '#1c9ab7'},
            ]
          },
          '2022-03-03': {
            periods: [
              {selected: true, startingDay: false, endingDay: false, color: '#1c9ab7'},
            ]
          },
          '2022-03-04': {
            periods: [
              {selected: true, startingDay: false, endingDay: false, color: '#1c9ab7'},
            ]
          },
          '2022-03-05': {
            periods: [
              {selected: true, startingDay: false, endingDay: true, color: '#1c9ab7'}
            ]
          }
        }}
      />
      <Text style={scheme === 'dark' ? styles.darktitle : styles.title}>Key:</Text>
      <View style={{flex: 1, flexDirection: "row"}}>
        <View style={{width: 30, height: 8, backgroundColor: '#1c9ab7', margin: 5, flexDirection: 'row'}}></View>
        <Text style={scheme === 'dark' ? styles.darkPhaseTitle : styles.phaseTitle}>Menstrual Phase</Text>
      </View>

      <View style={{flex: 1, flexDirection: "row"}}>
        <View style={{width: 30, height: 8, backgroundColor: '#9ad0ec', margin: 5, flexDirection: 'row'}}></View>
        <Text style={scheme === 'dark' ? styles.darkPhaseTitle : styles.phaseTitle}>Follicular Phase</Text>
      </View>

      <View style={{flex: 1, flexDirection: "row"}}>
        <View style={{width: 30, height: 8, backgroundColor: '#efdad7', margin: 5}}></View>
        <Text style={scheme === 'dark' ? styles.darkPhaseTitle : styles.phaseTitle}>Ovulation Phase</Text>
      </View>

      <View style={{flex: 1, flexDirection: "row"}}>
        <View style={{width: 30, height: 8, backgroundColor: '#f98c41', margin: 5}}></View>
        <Text style={scheme === 'dark' ? styles.darkPhaseTitle : styles.phaseTitle}>Luteal Phase</Text>
      </View>


      <Button
        title="Update Period Entry"
        onPress={() => Alert.alert('Button pressed')}
        color='#1c9ab7'
      />
    </View>
  )
}
