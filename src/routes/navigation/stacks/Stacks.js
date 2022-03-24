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
      <Stack.Screen name= "Diary">
        {props => <Diary {...props} extraData={user} />}
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

// export const CalendarNavigator = (props) => {
//   const user = props.user;
//   const navigationProps = props.navigationProps;

//   return (
//     <Stack.Navigator headerMode = "screen" screenOptions= {navigationProps}>
//       <Stack.Screen name= "Calendar">
//         {props => <Calendar {...props} extraData={user} />}
//       </Stack.Screen>
//     </Stack.Navigator>
//   )
// }
