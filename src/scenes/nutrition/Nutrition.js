import React from 'react';
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
} from 'react-native';
import { connect } from 'react-redux';
import {fetchRecipes} from '../../store/nutrition'
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as WebBrowser from 'expo-web-browser';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class AllRecipes extends React.Component {
  constructor() {
    super();
    this.state = {
      ingredient: '',
    };
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(item) {
    WebBrowser.openBrowserAsync(item);
  }

  render() {
    if (this.props.currentPhase.color === '#1c9ab7') {
      return (
      <ScrollView style = {{flex : 1}}>
      <View style = {styles.phaseContainer}>
        <View style = {styles.flexLeft1}>
        <View style = {styles.flexLeftInner1}>
          <Text style = {styles.phaseHeader}>MENSTRUAL PHASE</Text>
          <Text style = {styles.phaseDetails}>Chocolate</Text>
          <Text style = {styles.phaseDetails}>Sweet Potato</Text>
          <Text style = {styles.phaseDetails}>Zucchini</Text>
          <Text style = {styles.phaseDetails}>Cauliflower</Text>
          <Text style = {styles.phaseDetails}>Carrots</Text>
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
                  marginTop: 35,
                  marginLeft: 20,
                  marginRight: 20,
                  alignItems: 'center',
                  backgroundColor: '#1c9ab7',
                  borderRadius: 10,
                  padding: 10,
                }}
                onPress={ () => {
                  this.props.fetchRecipes(this.state.ingredient);
                  Keyboard.dismiss();
                }}
              >
                <Text style={{color: 'white', fontSize: 15}}>Search</Text>
              </TouchableOpacity>
            </View>
            
            {this.props.allRecipes ? (
              <SafeAreaView> 
              <ScrollView>
                {this.props.allRecipes.map((recipe) => {
                  return (
                    <View key={recipe.website} >
                      <View style = {styles.container}>
                        <Image
                          style={styles.tinyLogo}
                          source={{
                            uri: recipe.imageUrl,
                          }}
                        />
                        <Text style={styles.text}>{recipe.label}</Text>
                         <TouchableOpacity
                        onPress={() => this.handlePress(recipe.website)}
                        style = {styles.detailButton}
                      >
                      <Text style = {styles.detailText}>View Recipe</Text>
                      </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
              </SafeAreaView>
            ) : (
              <View>
                <Text style={styles.instructions}>
                  Search for recipes by ingredient!
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
      <ScrollView style = {{flex : 1}}>
      <View style = {styles.phaseContainer}>
      <View style = {styles.flexLeft1}>
      <View style = {styles.flexLeftInner1}>
        <Text>FOLLICULAR PHASE</Text>
        <Text style = {styles.phaseDetails}>Grassfed Beef</Text>
        <Text style = {styles.phaseDetails}>Kale</Text>
        <Text style = {styles.phaseDetails}>Lentils</Text>
        <Text style = {styles.phaseDetails}>Chickpeas</Text>
        <Text style = {styles.phaseDetails}>Salmon</Text>
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
                  marginTop: 35,
                  marginLeft: 20,
                  marginRight: 20,
                  alignItems: 'center',
                  backgroundColor: '#1c9ab7',
                  borderRadius: 10,
                  padding: 10,
                }}
                onPress={ () => {
                  this.props.fetchRecipes(this.state.ingredient);
                  Keyboard.dismiss();
                }}
              >
                <Text style={{color: 'white', fontSize: 15}}>Search</Text>
              </TouchableOpacity>
            </View>
            
            {this.props.allRecipes ? (
              <SafeAreaView> 
              <ScrollView>
                {this.props.allRecipes.map((recipe) => {
                  return (
                    <View key={recipe.website} >
                      <View style = {styles.container}>
                        <Image
                          style={styles.tinyLogo}
                          source={{
                            uri: recipe.imageUrl,
                          }}
                        />
                        <Text style={styles.text}>{recipe.label}</Text>
                         <TouchableOpacity
                        onPress={() => this.handlePress(recipe.website)}
                        style = {styles.detailButton}
                      >
                      <Text style = {styles.detailText}>View Recipe</Text>
                      </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
              </SafeAreaView>
            ) : (
              <View>
                <Text style={styles.instructions}>
                  Search for recipes by ingredient!
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
      <ScrollView style = {{flex : 1}}>
      <View style = {styles.phaseContainer}>
      <View style = {styles.flexLeft1}>
      <View style = {styles.flexLeftInner1}>
        <Text>OVULATORY PHASE</Text>
        <Text style = {styles.phaseDetails}>Eggs</Text>
        <Text style = {styles.phaseDetails}>Quinoa</Text>
        <Text style = {styles.phaseDetails}>Brussel Sprouts</Text>
        <Text style = {styles.phaseDetails}>Berries</Text>
        <Text style = {styles.phaseDetails}>Asperagus</Text>
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
                  marginTop: 35,
                  marginLeft: 20,
                  marginRight: 20,
                  alignItems: 'center',
                  backgroundColor: '#1c9ab7',
                  borderRadius: 10,
                  padding: 10,
                }}
                onPress={ () => {
                  this.props.fetchRecipes(this.state.ingredient);
                  Keyboard.dismiss();
                }}
              >
                <Text style={{color: 'white', fontSize: 15}}>Search</Text>
              </TouchableOpacity>
            </View>
            
            {this.props.allRecipes ? (
              <SafeAreaView> 
              <ScrollView>
                {this.props.allRecipes.map((recipe) => {
                  return (
                    <View key={recipe.website} >
                      <View style = {styles.container}>
                        <Image
                          style={styles.tinyLogo}
                          source={{
                            uri: recipe.imageUrl,
                          }}
                        />
                        <Text style={styles.text}>{recipe.label}</Text>
                         <TouchableOpacity
                        onPress={() => this.handlePress(recipe.website)}
                        style = {styles.detailButton}
                      >
                      <Text style = {styles.detailText}>View Recipe</Text>
                      </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
              </SafeAreaView>
            ) : (
              <View>
                <Text style={styles.instructions}>
                  Search for recipes by ingredient!
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
        <ScrollView style = {{flex : 1}}>
        <View style = {styles.phaseContainer}>
        <View style = {styles.flexLeft1}>
        <View style = {styles.flexLeftInner1}>
          <Text style = {styles.phaseHeader}>LUTEAL PHASE</Text>
          <Text style = {styles.phaseDetails}>Butternut Squash</Text>
          <Text style = {styles.phaseDetails}>Avocado</Text>
          <Text style = {styles.phaseDetails}>Parsnip</Text>
          <Text style = {styles.phaseDetails}>Pumpkin</Text>
          <Text style = {styles.phaseDetails}>Tuna</Text>
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
                    marginTop: 35,
                    marginLeft: 20,
                    marginRight: 20,
                    alignItems: 'center',
                    backgroundColor: '#1c9ab7',
                    borderRadius: 10,
                    padding: 10,
                  }}
                  onPress={ () => {
                    this.props.fetchRecipes(this.state.ingredient);
                    Keyboard.dismiss();
                  }}
                >
                  <Text style={{color: 'white', fontSize: 15}}>Search</Text>
                </TouchableOpacity>
              </View>
              
              {this.props.allRecipes ? (
                <SafeAreaView> 
                <ScrollView>
                  {this.props.allRecipes.map((recipe) => {
                    return (
                      <View key={recipe.website} >
                        <View style = {styles.container}>
                          <Image
                            style={styles.tinyLogo}
                            source={{
                              uri: recipe.imageUrl,
                            }}
                          />
                          <Text style={styles.text}>{recipe.label}</Text>
                           <TouchableOpacity
                          onPress={() => this.handlePress(recipe.website)}
                          style = {styles.detailButton}
                        >
                        <Text style = {styles.detailText}>View Recipe</Text>
                        </TouchableOpacity>
                        </View>
                      </View>
                    );
                  })}
                </ScrollView>
                </SafeAreaView>
              ) : (
                <View>
                  <Text style={styles.instructions}>
                    Search for recipes by ingredient!
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
  return {
    allRecipes: state.allRecipes,
    currentPhase: state.currentPhase
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchRecipes: (ingredient) => dispatch(fetchRecipes(ingredient)),
  };
};

export default connect(mapState, mapDispatch)(AllRecipes);
//open-in-new material icons
