import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarView() {
  const [markedDates, setMarkedDates] = useState({})

  return (
      <Calendar 
        markingType="multi-period"
        markedDates={{
          '2022-03-01': {
            periods: [
              {startingDay: true, endingDay: false, color: '#5f9ea0'},
            ]
          },
          '2022-03-05': {
            periods: [
              {startingDay: false, endingDay: true, color: '#5f9ea0'}
            ]
          }
        }}
      />
  )
}
