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
  ActivityIndicator,
} from 'react-native'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../store/nutrition'
import styles from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as WebBrowser from 'expo-web-browser'
import DropDownPicker from 'react-native-dropdown-picker'
import colors from '../../theme/colors'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

class AllRecipes extends React.Component {
  constructor() {
    super()
    this.state = {
      ingredient: '',
      open: false,
      value: null,
      items: [
        { label: 'chocolate', value: 'chocolate' },
        { label: 'sweet potato', value: 'sweet potato' },
        { label: 'zucchini', value: 'zucchini' },
        { label: 'cauliflower', value: 'cauliflower' },
        { label: 'carrots', value: 'carrots' },
      ],
      loading: false,
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
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.phaseContainer}>
            <View style={styles.flexLeft1}>
              <View style={styles.flexLeftInner1}>
                <Text style={styles.phaseHeader}>MENSTRUAL PHASE</Text>
                <Text style={{ fontSize: '15px', textAlign: 'center', marginBottom: 10 }}>
                  As your hormones fluctuate throughout your cycle, so do your
                  nutritional requirements. Select the recommended foods in the dropdown below to
                  include in your diet during your menstrual phase.
                </Text>
                <Text style={styles.phaseDetails}>Chocolate</Text>
                <Text style={styles.phaseDetails}>Sweet Potato</Text>
                <Text style={styles.phaseDetails}>Zucchini</Text>
                <Text style={styles.phaseDetails}>Cauliflower</Text>
                <Text style={styles.phaseDetails}>Carrots</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{ width: '100%' }}>
              <Text style={styles.header}>Recommended Foods</Text>
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
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginTop: 20,
                      marginLeft: 50,
                      marginRight: 50,
                      alignItems: 'center',
                      backgroundColor: '#1c9ab7',
                      borderRadius: 10,
                      padding: 10,
                    }}
                    onPress={async () => {
                      this.setState({ loading: true })
                      await this.props.fetchRecipes(this.state.value)
                      Keyboard.dismiss()
                      this.setState({ loading: false })
                    }}
                  >
                    <Text style={{ color: 'white', fontSize: 15 }}>
                      Search Recommended
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.header}>Find More Recipes</Text>
                <View
                  style={{ flex: 1, width: '100%' }}
                  keyboardShouldPersistTaps="always"
                ></View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="search by ingredient"
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ ingredient: text })}
                    value={this.state.ingredient}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginTop: 10,
                      marginLeft: 50,
                      marginRight: 50,
                      marginBottom: 40,
                      alignItems: 'center',
                      backgroundColor: '#1c9ab7',
                      borderRadius: 10,
                      padding: 10,
                    }}
                    onPress={async () => {
                      this.setState({ loading: true })
                      await this.props.fetchRecipes(this.state.ingredient)
                      Keyboard.dismiss()
                      this.setState({ loading: false })
                    }}
                  >
                    <Text style={{ color: 'white', fontSize: 15 }}>
                      Search Recipes
                    </Text>
                  </TouchableOpacity>
                </View>

                {this.state.loading ? (
                  <ActivityIndicator size="large" color={colors.lightBlue} />
                ) : this.props.allRecipes ? (
                  <SafeAreaView>
                    <ScrollView>
                      {this.props.allRecipes.map((recipe) => {
                        return (
                          <View key={recipe.website}>
                            <TouchableOpacity
                                onPress={() => this.handlePress(recipe.website)}
                                style={styles.detailButton}
                              >
                            <View style={styles.container}>
                              <Image
                                style={styles.tinyLogo}
                                source={{
                                  uri: recipe.imageUrl,
                                }}
                              />
                              <Text style={styles.text}>{recipe.label}</Text>
                              
                                <Text style={styles.detailText}>
                                  View Recipe
                                </Text>
                            </View>
                            </TouchableOpacity>
                          </View>
                        )
                      })}
                    </ScrollView>
                  </SafeAreaView>
                ) : null}
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
                <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                  As your hormones fluctuate throughout your cycle, so do your
                  nutritional requirements. Here are some top foods to include
                  in your diet during this phase.
                </Text>
                <Text style={styles.phaseDetails}>Grassfed Beef</Text>
                <Text style={styles.phaseDetails}>Kale</Text>
                <Text style={styles.phaseDetails}>Lentils</Text>
                <Text style={styles.phaseDetails}>Chickpeas</Text>
                <Text style={styles.phaseDetails}>Salmon</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{ width: '100%' }}>
              <Text style={styles.header}>Discover Recipes</Text>
              <View
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always"
              >
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Search by Ingredient"
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ ingredient: text })}
                    value={this.state.ingredient}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginTop: 7,
                      marginLeft: 50,
                      marginRight: 50,
                      marginBottom: 40,
                      alignItems: 'center',
                      backgroundColor: '#1c9ab7',
                      borderRadius: 10,
                      padding: 10,
                    }}
                    onPress={() => {
                      this.props.fetchRecipes(this.state.ingredient)
                      Keyboard.dismiss()
                    }}
                  >
                    <Text style={{ color: 'white', fontSize: 15 }}>Search</Text>
                  </TouchableOpacity>
                </View>

                {this.props.allRecipes.length > 0 ? (
                  <SafeAreaView>
                    <ScrollView>
                      {this.props.allRecipes.map((recipe) => {
                        return (
                          <View key={recipe.website}>
                            <View style={styles.container}>
                              <Image
                                style={styles.tinyLogo}
                                source={{
                                  uri: recipe.imageUrl,
                                }}
                              />
                              <Text style={styles.text}>{recipe.label}</Text>
                              <TouchableOpacity
                                onPress={() => this.handlePress(recipe.website)}
                                style={styles.detailButton}
                              >
                                <Text style={styles.detailText}>
                                  View Recipe
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
                    <Text style={styles.instructions}></Text>
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
                <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                  As your hormones fluctuate throughout your cycle, so do your
                  nutritional requirements. Here are some top foods to include
                  in your diet during this phase.
                </Text>
                <Text style={styles.phaseDetails}>Eggs</Text>
                <Text style={styles.phaseDetails}>Quinoa</Text>
                <Text style={styles.phaseDetails}>Brussel Sprouts</Text>
                <Text style={styles.phaseDetails}>Berries</Text>
                <Text style={styles.phaseDetails}>Asperagus</Text>
              </View>
            </View>
          </View>

          <View>
            <View style={{ width: '100%' }}>
              <Text style={styles.header}>Discover Recipes</Text>
              <View
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always"
              >
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Search by Ingredient"
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ ingredient: text })}
                    value={this.state.ingredient}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginTop: 7,
                      marginLeft: 50,
                      marginRight: 50,
                      marginBottom: 40,
                      alignItems: 'center',
                      backgroundColor: '#1c9ab7',
                      borderRadius: 10,
                      padding: 10,
                    }}
                    onPress={() => {
                      this.props.fetchRecipes(this.state.ingredient)
                      Keyboard.dismiss()
                    }}
                  >
                    <Text style={{ color: 'white', fontSize: 15 }}>Search</Text>
                  </TouchableOpacity>
                </View>

                {this.props.allRecipes ? (
                  <SafeAreaView>
                    <ScrollView>
                      {this.props.allRecipes.map((recipe) => {
                        return (
                          <View key={recipe.website}>
                            <View style={styles.container}>
                              <Image
                                style={styles.tinyLogo}
                                source={{
                                  uri: recipe.imageUrl,
                                }}
                              />
                              <Text style={styles.text}>{recipe.label}</Text>
                              <TouchableOpacity
                                onPress={() => this.handlePress(recipe.website)}
                                style={styles.detailButton}
                              >
                                <Text style={styles.detailText}>
                                  View Recipe
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
                    <Text style={styles.instructions}></Text>
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
                <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                  As your hormones fluctuate throughout your cycle, so do your
                  nutritional requirements. Here are some top foods to include
                  in your diet during this phase.
                </Text>
                <Text style={styles.phaseDetails}>Butternut Squash</Text>
                <Text style={styles.phaseDetails}>Avocado</Text>
                <Text style={styles.phaseDetails}>Parsnip</Text>
                <Text style={styles.phaseDetails}>Pumpkin</Text>
                <Text style={styles.phaseDetails}>Tuna</Text>
              </View>
            </View>
          </View>

          <View>
            <View style={{ width: '100%' }}>
              <Text style={styles.header}>Discover Recipes</Text>
              <View
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always"
              >
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Search by Ingredient"
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ ingredient: text })}
                    value={this.state.ingredient}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginTop: 7,
                      marginLeft: 50,
                      marginRight: 50,
                      marginBottom: 40,
                      alignItems: 'center',
                      backgroundColor: '#1c9ab7',
                      borderRadius: 10,
                      padding: 10,
                    }}
                    onPress={() => {
                      this.props.fetchRecipes(this.state.ingredient)
                      Keyboard.dismiss()
                    }}
                  >
                    <Text style={{ color: 'white', fontSize: 15 }}>Search</Text>
                  </TouchableOpacity>
                </View>

                {this.props.allRecipes.length ? (
                  <SafeAreaView>
                    <ScrollView>
                      {this.props.allRecipes.map((recipe) => {
                        return (
                          <View key={recipe.website}>
                            <View style={styles.container}>
                              <Image
                                style={styles.tinyLogo}
                                source={{
                                  uri: recipe.imageUrl,
                                }}
                              />
                              <Text style={styles.text}>{recipe.label}</Text>
                              <TouchableOpacity
                                onPress={() => this.handlePress(recipe.website)}
                                style={styles.detailButton}
                              >
                                <Text style={styles.detailText}>
                                  View Recipe
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        )
                      })}
                    </ScrollView>
                  </SafeAreaView>
                ) : null}
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
    allRecipes: state.allRecipes,
    currentPhase: state.currentPhase,
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchRecipes: (ingredient) => dispatch(fetchRecipes(ingredient)),
  }
}

export default connect(mapState, mapDispatch)(AllRecipes)
//open-in-new material icons

{
  /* <TouchableOpacity
                    style={{
                      display: 'flex',
                      marginTop: 7,
                      marginLeft: 50,
                      marginRight: 50,
                      marginBottom: 40,
                      alignItems: 'center',
                      backgroundColor: '#1c9ab7',
                      borderRadius: 10,
                      padding: 10,
                    }}
                    onPress={() => {
                      this.props.fetchRecipes(this.state.ingredient)
                      Keyboard.dismiss()
                    }}
                  >
                    <Text style={{ color: 'white', fontSize: 15 }}>Search</Text>
                  </TouchableOpacity>
 */
}
