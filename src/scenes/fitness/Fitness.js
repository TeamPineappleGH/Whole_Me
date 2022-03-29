import React from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { connect } from 'react-redux'
import { fetchExercises } from '../../store/fitness'
import styles from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as WebBrowser from 'expo-web-browser'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

class AllExercises extends React.Component {
  constructor() {
    super()
    this.state = {
      exercise: '',
    }
    this.handlePress = this.handlePress.bind(this)
  }
  handlePress(item) {
    WebBrowser.openBrowserAsync(item)
  }

  render() {
    if (this.props.currentPhase.color === '#1c9ab7') {
      return (
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <View style={styles.phaseContainer}>
            <View style={styles.flexLeft1}>
              <View style={styles.flexLeftInner1}>
                <Text style={styles.phaseHeader}>MENSTRUAL PHASE</Text>
                <Text style={styles.phaseDetails}>Walking or any form of mild exercise is recommended during your menstrual phase, even if you're not feeling major discomfort.</Text>
              </View>
            </View>
          </View>

          <View>
            <View style={{ width: '100%' }}>
              <Text style={styles.header}>Discover Exercises</Text>
              <View
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always"
              >
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Search by Category"
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ exercise: text })}
                    value={this.state.ingredient}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginTop: 7,
                      marginLeft: 20,
                      marginRight: 20,
                      marginBottom: 40,
                      alignItems: 'center',
                      backgroundColor: '#1c9ab7',
                      borderRadius: 10,
                      padding: 10,
                    }}
                    onPress={() => {
                      this.props.fetchExercises(this.state.exercise)
                      Keyboard.dismiss()
                    }}
                  >
                    <Text style={{ color: 'white', fontSize: 15 }}>Search</Text>
                  </TouchableOpacity>
                </View>

                {this.props.allExercises ? (
                  <SafeAreaView>
                    <ScrollView>
                      {this.props.allExercises.map((exercise) => {
                        return (
                          <View key={exercise.id}>
                            <View style={styles.container}>
                              <Image
                                style={styles.tinyLogo}
                                source={{
                                  uri: exercise.gif,
                                }}
                              />
                              <Text style={styles.text}>{exercise.name}</Text>
                              <TouchableOpacity
                                onPress={() => this.handlePress(exercise.gif)}
                                style={styles.detailButton}
                              >
                                <Text style={styles.detailText}>
                                  View Exercise
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        )
                      })}
                    </ScrollView>
                  </SafeAreaView>
                ) : (
                  <View>
                    <Text style={styles.instructions}>
                      Search for exercises by category!
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      )
    } else if (this.props.currentPhase.color === '#9ad0ec') {
      return (
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.phaseContainer}>
            <View style={styles.flexRight1}>
              <View style={styles.flexLeftInner1}>
                <Text style={styles.phaseHeader}>FOLLICULAR PHASE</Text>
                <Text style={styles.phaseDetails}>The follicular phase is the week or so after your period.  Running or another form of cardio is recommended mid-day, as your estrogen will be low and your cortisol levels will be just right for a challenging cardio burst.</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{ width: '100%' }}>
              <Text style={styles.header}>Discover Exercises</Text>
              <View
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always"
              >
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Search by Category"
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ exercise: text })}
                    value={this.state.exercise}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginTop: 7,
                      marginLeft: 20,
                      marginRight: 20,
                      marginBottom: 40,
                      alignItems: 'center',
                      backgroundColor: '#1c9ab7',
                      borderRadius: 10,
                      padding: 10,
                    }}
                    onPress={() => {
                      this.props.fetchExercises(this.state.exercise)
                      Keyboard.dismiss()
                    }}
                  >
                    <Text style={{ color: 'white', fontSize: 15 }}>Search</Text>
                  </TouchableOpacity>
                </View>

                {this.props.allExercises ? (
                  <SafeAreaView>
                    <ScrollView>
                      {this.props.allExercises.map((exercise) => {
                        return (
                          <View key={exercise.id}>
                            <View style={styles.container}>
                              <Image
                                style={styles.tinyLogo}
                                source={{
                                  uri: exercise.gif,
                                }}
                              />
                              <Text style={styles.text}>{exercise.name}</Text>
                              <TouchableOpacity
                                onPress={() => this.handlePress(exercise.gif)}
                                style={styles.detailButton}
                              >
                                <Text style={styles.detailText}>
                                  View Exercise
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        )
                      })}
                    </ScrollView>
                  </SafeAreaView>
                ) : (
                  <View>
                    <Text style={styles.instructions}>
                      Search for exercises by category!
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      )
    } else if (this.props.currentPhase.color === '#efdad7') {
      return (
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.phaseContainer}>
            <View style={styles.flexRight2}>
              <View style={styles.flexLeftInner1}>
                <Text style={styles.phaseHeader}>OVULATORY PHASE</Text>
                <Text style={styles.phaseDetails}>During ovulation, high-intensity interval training or bodyweight circuit is recommended in the early morning.  Your testosterone is higher and you'll have tons of energy during this time of the month.</Text>
              </View>
            </View>
          </View>

          <View>
            <View style={{ width: '100%' }}>
              <Text style={styles.header}>Discover Exercises</Text>
              <View
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always"
              >
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Search by Category"
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ exercise: text })}
                    value={this.state.exercise}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginTop: 7,
                      marginLeft: 20,
                      marginRight: 20,
                      marginBottom: 40,
                      alignItems: 'center',
                      backgroundColor: '#1c9ab7',
                      borderRadius: 10,
                      padding: 10,
                    }}
                    onPress={() => {
                      this.props.fetchExercises(this.state.exercise)
                      Keyboard.dismiss()
                    }}
                  >
                    <Text style={{ color: 'white', fontSize: 15 }}>Search</Text>
                  </TouchableOpacity>
                </View>

                {this.props.allExercises ? (
                  <SafeAreaView>
                    <ScrollView>
                      {this.props.allExercises.map((exercise) => {
                        return (
                          <View key={exercise.id}>
                            <View style={styles.container}>
                              <Image
                                style={styles.tinyLogo}
                                source={{
                                  uri: exercise.gif,
                                }}
                              />
                              <Text style={styles.text}>{exercise.name}</Text>
                              <TouchableOpacity
                                onPress={() => this.handlePress(exercise.gif)}
                                style={styles.detailButton}
                              >
                                <Text style={styles.detailText}>
                                  View Exercise
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        )
                      })}
                    </ScrollView>
                  </SafeAreaView>
                ) : (
                  <View>
                    <Text style={styles.instructions}>
                      Search for exercises by category!
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      )
    } else {
      return (
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.phaseContainer}>
            <View style={styles.flexLeft2}>
              <View style={styles.flexLeftInner1}>
                <Text style={styles.phaseHeader}>LUTEAL PHASE</Text>
                <Text style={styles.phaseDetails}>As you transition to the luteal phase, keep your intense workouts early in the day and pilates or strength training in the early evening.  As estrogen and testoterone drop during the luteal phase, your energy for high intensity workouts will drop.  Restorative yoga before bed can help combat moodiness and bloat.</Text>
              </View>
            </View>
          </View>

          <View>
            <View style={{ width: '100%' }}>
              <Text style={styles.header}>Discover Exercises</Text>
              <View
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always"
              >
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Search by Category"
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ exercise: text })}
                    value={this.state.exercise}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginTop: 7,
                      marginLeft: 20,
                      marginRight: 20,
                      marginBottom: 40,
                      alignItems: 'center',
                      backgroundColor: '#1c9ab7',
                      borderRadius: 10,
                      padding: 10,
                    }}
                    onPress={() => {
                      this.props.fetchExercises(this.state.exercise)
                      Keyboard.dismiss()
                    }}
                  >
                    <Text style={{ color: 'white', fontSize: 15 }}>Search</Text>
                  </TouchableOpacity>
                </View>

                {this.props.allExercises ? (
                  <SafeAreaView>
                    <View>
                      {this.props.allExercises.map((exercise) => {
                        console.log('HELLLOOOOOOO WORLD!!!!!!!!!!')
                        console.log(
                          'EXERCISE------------------------->',
                          exercise,
                        )
                        return (
                          <View key={exercise.id}>
                            <View style={styles.container}>
                              <Image
                                style={styles.tinyLogo}
                                source={{
                                  uri: exercise.gif,
                                }}
                              />
                              <Text style={styles.text}>{exercise.name}</Text>
                              <TouchableOpacity
                                onPress={() =>
                                  this.handlePress(exercise.gifUrl)
                                }
                                style={styles.detailButton}
                              >
                                <Text style={styles.detailText}>
                                  View Exercise
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        )
                      })}
                    </View>
                  </SafeAreaView>
                ) : (
                  <View>
                    <Text style={styles.instructions}>
                      Search for exercises by category!
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      )
    }
  }
}

const mapState = (state) => {
  // console.log('state-->', state);
  return {
    allExercises: state.allExercises,
    currentPhase: state.currentPhase,
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchExercises: (target) => dispatch(fetchExercises(target)),
  }
}

export default connect(mapState, mapDispatch)(AllExercises)
//open-in-new material icons
