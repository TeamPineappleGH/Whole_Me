import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../../../scenes/login'
import Registration from '../../../scenes/registration'
import Home from '../../../scenes/home'
import Profile from '../../../scenes/profile'
import Detail from '../../../scenes/details'
import Diary from '../../../scenes/diary'
import Nutrition from '../../../scenes/nutrition'
import Wellness from '../../../scenes/wellness'
import Calendar from '../../../scenes/calendar'
import AddPeriodEntry from '../../../scenes/addPeriodEntry'
import AllEntries from '../../../scenes/diary/AllEntries'
import Fitness from '../../../scenes/fitness/Fitness'
import Cycle from '../../../scenes/cycle/'
import Details from '../../../scenes/diary/Details'
import Meditation from '../../../scenes/meditation/Meditation'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

// ------------------------------------
// Navigators
// ------------------------------------

export const LoginNavigator = (props) => {
  const navigationProps = props.navigationProps
  return (
    <Stack.Navigator headerMode="screen" screenOptions={navigationProps}>
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
      />
    </Stack.Navigator>
  )
}


export const HomeNavigator = (props) => {
  const user = props.user
  const navigationProps = props.navigationProps
  return (
    <Stack.Navigator headerMode="screen" screenOptions={navigationProps}>
      <Stack.Screen name="Home">
        {props => <Home {...props} extraData={user} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export const ProfileNavigator = (props) => {
  const user = props.user
  const navigationProps = props.navigationProps
  return (
    <Stack.Navigator headerMode="screen" screenOptions={navigationProps}>
      <Stack.Screen name="Profile">
        {props => <Profile {...props} extraData={user} />}
      </Stack.Screen>
      <Stack.Screen name="Detail">
        {props => <Detail {...props} extraData={user} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export const DiaryNavigator = (props) => {
  const user = props.user;
  const navigationProps = props.navigationProps;

  return (
    
    <Stack.Navigator headerMode = "screen" screenOptions= {navigationProps}>
    <Stack.Screen name= "All Entries">
        {props => <AllEntries {...props} extraData={user} />}
      </Stack.Screen>
      <Stack.Screen name= "Diary">
        {props => <Diary {...props} extraData={user} />}
      </Stack.Screen>
      <Stack.Screen name= "Details">
        {props => <Details {...props} extraData={user} />}
      </Stack.Screen>
      
    </Stack.Navigator>
  )
}

export const WellnessNavigator = (props) => {
  const user = props.user;
  const navigationProps = props.navigationProps;

  return (
    <Stack.Navigator headerMode = "screen" screenOptions= {navigationProps}>
      <Stack.Screen name= "Wellness">
        {props => <Wellness {...props} extraData={user} />}
      </Stack.Screen>
      <Stack.Screen name= "Fitness">
        {props => <Fitness {...props} extraData={user} />}
      </Stack.Screen>
      <Stack.Screen name= "Cycle">
        {props => <Cycle {...props} extraData={user} />}
      <Stack.Screen name= "Meditation">
        {props => <Meditation {...props} extraData={user} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export const NutritionNavigator = (props) => {
  const user = props.user;
  const navigationProps = props.navigationProps;

  return (
    <Stack.Navigator headerMode = "screen" screenOptions= {navigationProps}>
      <Stack.Screen name= "Nutrition">
        {props => <Nutrition {...props} extraData={user} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export const CalendarNavigator = (props) => {
  const user = props.user;
  const navigationProps = props.navigationProps;

  return (
    <Stack.Navigator headerMode = "screen" screenOptions= {navigationProps}>
      <Stack.Screen name= "Calendar">
        {props => <Calendar {...props} extraData={user} />}
      </Stack.Screen>
      <Stack.Screen name= "Add Period Entry">
        {props => <AddPeriodEntry {...props} extraData={user} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
