import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from 'theme'

const moodColors = [
  '#ddb8ba',
  '#ef7583',
  colors.lightPurple,
  colors.darkBlue,
  colors.orange,
  '#0000008A',
]

const moodPhrase = ['Sad', 'Angry', 'Meh', 'OK', 'Happy', '-']

const Entry = (props) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() =>
        navigation.navigate('Details', {
          date: props.date,
          mood: props.mood,
          writtenDiary: props.writtenDiary,
          status: props.status,
        })
      }
    >
      <Text
        style={{
          color: moodColors[props.mood],
          fontSize: 16,
          fontWeight: '700',
          marginLeft: 20,
          width: 60,
          marginVertical: 20,
        }}
      >
        {moodPhrase[props.mood].toUpperCase()}
      </Text>

      <View style={{ paddingLeft: 15 }}>
        <Text style={[{ fontSize: 15, fontWeight: '700' }, styles.text]}>
          {props.date}
        </Text>
        <Text style={[{ fontSize: 15, paddingRight: 20 }, styles.text]}>
          {props.writtenDiary.split('').splice(0, 18).join('') + '...'}
        </Text>
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#35363a66',
    borderWidth: 2,
    marginHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    color: '#656565',
  },
})

export default Entry
