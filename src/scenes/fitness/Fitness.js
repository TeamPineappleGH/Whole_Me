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
import DropDownPicker from 'react-native-dropdown-picker'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

class AllExercises extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
      value: null,
      items: [
        { label: 'abductors', value: 'abductors' },
        { label: 'abs', value: 'abs' },
        { label: 'adductors', value: 'adductors' },
        { label: 'biceps', value: 'biceps' },
        { label: 'calves', value: 'calves' },
        { label: 'cardiovascular system', value: 'cardiovascular system' },
        { label: 'delts', value: 'delts' },
        { label: 'forearms', value: 'forearms' },
        { label: 'glutes', value: 'glutes' },
        { label: 'hamstrings', value: 'hamstrings' },
        { label: 'lats', value: 'lats' },
        { label: 'levator scapulae', value: 'levator scapulae' },
        { label: 'pectorals', value: 'pectorals' },
        { label: 'quads', value: 'quads' },
        { label: 'serratus', value: 'serratus' },
        { label: 'spine', value: 'spine' },
        { label: 'traps', value: 'traps' },
        { label: 'triceps', value: 'triceps' },
        { label: 'upper back', value: 'upper back' },
      ],
    }
    this.handlePress = this.handlePress.bind(this)
    this.setOpen = this.setOpen.bind(this)
    this.setValue = this.setValue.bind(this)
    this.setItems = this.setItems.bind(this)
  }
  handlePress(item) {
    WebBrowser.openBrowserAsync(item)
  }

  setOpen(open) {
    this.setState({
      open,
    })
  }

  setValue(callback) {
    this.setState((state) => ({
      value: callback(state.value),
    }))
  }

  setItems(callback) {
    this.setState((state) => ({
      items: callback(state.items),
    }))
  }

  render() {
    const { open, value, items } = this.state

    if (this.props.currentPhase.color === '#1c9ab7') {
      return (
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <View style={styles.phaseContainer}>
            <View style={styles.flexLeft1}>
              <View style={styles.flexLeftInner1}>
                <Text style={styles.phaseHeader}>MENSTRUAL PHASE</Text>
                <Text style={styles.phaseDetails}>
                  Walking or any form of mild exercise is recommended during
                  your menstrual phase, even if you're not feeling major
                  discomfort.
                </Text>
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
                <View
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    zIndex: 2,
                    elevation: 2,
                  }}
                >
                  <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={this.setOpen}
                    setValue={this.setValue}
                    setItems={this.setItems}
                  />
                </View>
                <View>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginTop: 20,
                      marginLeft: 50,
                      marginRight: 50,
                      marginBottom: 10,
                      alignItems: 'center',
                      backgroundColor: '#1c9ab7',
                      borderRadius: 10,
                      padding: 10,
                    }}
                    onPress={() => {
                      this.props.fetchExercises(this.state.value)
                      Keyboard.dismiss()
                    }}
                  >
                    <Text style={{ color: 'white', fontSize: 15 }}>Search</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      marginTop: 10,
                      marginBottom: 15,
                      textAlign: 'center',
                      fontStyle: 'italic',
                    }}
                  >
                    Please be patient while your results load.
                  </Text>
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
                <Text style={styles.phaseDetails}>
                  The follicular phase is the week or so after your period.
                  Running or another form of cardio is recommended mid-day, as
                  your estrogen will be low and your cortisol levels will be
                  just right for a challenging cardio burst.
                </Text>
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
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={this.setOpen}
                  setValue={this.setValue}
                  setItems={this.setItems}
                />
                <View>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginTop: 20,
                      marginLeft: 20,
                      marginRight: 20,
                      marginBottom: 40,
                      alignItems: 'center',
                      backgroundColor: '#1c9ab7',
                      borderRadius: 10,
                      padding: 10,
                    }}
                    onPress={() => {
                      this.props.fetchExercises(this.state.value)
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
                <Text style={styles.phaseDetails}>
                  During ovulation, high-intensity interval training or
                  bodyweight circuit is recommended in the early morning. Your
                  testosterone is higher and you'll have tons of energy during
                  this time of the month.
                </Text>
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
                <DropDownPicker
                  style={styles.picker}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={this.setOpen}
                  setValue={this.setValue}
                  setItems={this.setItems}
                />
                <View>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginTop: 20,
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
                    <Text style={styles.instructions}>Select a body part</Text>
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
                <Text style={styles.phaseDetails}>
                  As you transition to the luteal phase, keep your intense
                  workouts early in the day and pilates or strength training in
                  the early evening. As estrogen and testoterone drop during the
                  luteal phase, your energy for high intensity workouts will
                  drop. Restorative yoga before bed can help combat moodiness
                  and bloat.
                </Text>
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
                <DropDownPicker
                  min={0}
                  max={10}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={this.setOpen}
                  setValue={this.setValue}
                  setItems={this.setItems}
                  loading={this.setLoading}
                />
                <View>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginTop: 20,
                      marginLeft: 20,
                      marginRight: 20,
                      marginBottom: 40,
                      alignItems: 'center',
                      backgroundColor: '#1c9ab7',
                      borderRadius: 10,
                      padding: 10,
                    }}
                    onPress={() => {
                      this.props.fetchExercises(this.state.value)
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
                    </View>
                  </SafeAreaView>
                ) : (
                  <View>
                    <Text style={styles.instructions}>Select a body part</Text>
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
