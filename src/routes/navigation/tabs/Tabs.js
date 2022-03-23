import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import FontIcon2 from 'react-native-vector-icons/Ionicons'
import { colors } from 'theme'
// import Diary from '../../../../assets/images/diary.png'

// stack navigators
import { HomeNavigator, ProfileNavigator, DiaryNavigator, NutritionNavigator, WellnessNavigator} from '../stacks'

const Tab = createBottomTabNavigator()

const TabNavigator = (props) => {
  const user = props.user
  const navigationProps = props.navigationProps
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case 'Home':
              return (
                <FontIcon
                  name="home"
                  color={focused ? colors.lightPurple : colors.gray}
                  size={20}
                  solid
                />
              )
            case 'Profile':
              return (
                <FontIcon
                  name="user"
                  color={focused ? colors.lightPurple : colors.gray}
                  size={20}
                  solid
                />
              )

            case 'Diary':
              return (
                <FontIcon
                  name="book-open"
                  color={focused ? colors.lightPurple : colors.gray}
                  size={20}
                  solid
                />
              )
            case 'Nutrition':
            return(
              <FontIcon
                  name="utensils"
                  color={focused ? colors.lightPurple : colors.gray}
                  size={20}
                  solid
                />
            )
            case 'Wellness':
            return(
              <FontIcon2
                  name="fitness"
                  color={focused ? colors.lightPurple : colors.gray}
                  size={20}
                  solid
                />
            )
            default:
              return <View />
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.lightPurple,
        inactiveTintColor: colors.gray,
      }}
      initialRouteName="Home"
      swipeEnabled={false}
    >
      <Tab.Screen
        name="Home"
        children={() => (
          <HomeNavigator user={user} navigationProps={navigationProps} />
        )}
      />
      <Tab.Screen
        name="Profile"
        children={() => (
          <ProfileNavigator user={user} navigationProps={navigationProps} />
        )}
      />
      <Tab.Screen
      name= "Diary"
      children = {() => (
        <DiaryNavigator user= {user} navigationProps={navigationProps} />
      )} />
      <Tab.Screen
      name= "Nutrition"
      children = {() => (
        <NutritionNavigator user= {user} navigationProps={navigationProps} />
      )} />
       <Tab.Screen
      name= "Wellness"
      children = {() => (
        <WellnessNavigator user= {user} navigationProps={navigationProps} />
      )} />
    </Tab.Navigator>
  )
}

export default TabNavigator
