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
import * as Linking from 'expo-linking';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

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
    Linking.openURL(item);
  }
  

  render() {
    return (
      <View>
      <View style = {styles.phaseContainer}>
      <View style = {styles.flexLeft1}>
        <View style = {styles.flexLeftInner1}>
        <Text style = {styles.phaseHeader}>MENSTRUAL PHASE</Text>
        <Text style = {styles.phaseDetails}>- dark chocolate</Text>
        <Text style = {styles.phaseDetails}>- sweet potato</Text>
        <Text style = {styles.phaseDetails}>- zucchini</Text>
        <Text style = {styles.phaseDetails}>- cauliflower</Text>
        <Text style = {styles.phaseDetails}>- carrots</Text>
        </View>
      </View>
      <View style = {styles.flexRight1}>
      <View style = {styles.flexLeftInner1}>
      <Text style = {styles.phaseHeader}>FOLLICULAR PHASE</Text>
        <Text style = {styles.phaseDetails}>- grassfed beef</Text>
        <Text style = {styles.phaseDetails}>- kale</Text>
        <Text style = {styles.phaseDetails}>- lentils</Text>
        <Text style = {styles.phaseDetails}>- chickpeas</Text>
        <Text style = {styles.phaseDetails}>- salmon</Text>
        </View>
      </View>
      <View style = {styles.flexRight2}>
      <View style = {styles.flexLeftInner1}>
      <Text style = {styles.phaseHeader}>OVULATORY PHASE</Text>
        <Text style = {styles.phaseDetails}>- eggs</Text>
        <Text style = {styles.phaseDetails}>- quinoa</Text>
        <Text style = {styles.phaseDetails}>- brussel sprouts</Text>
        <Text style = {styles.phaseDetails}>- berries</Text>
        <Text style = {styles.phaseDetails}>- asperagus</Text>
        </View>
      </View>
      <View style = {styles.flexLeft2}>
      <View style = {styles.flexLeftInner1}>
      <Text style = {styles.phaseHeader}>LUTEAL PHASE</Text>
        <Text style = {styles.phaseDetails}>- butternut squash</Text>
        <Text style = {styles.phaseDetails}>- avocado</Text>
        <Text style = {styles.phaseDetails}>- parsnip</Text>
        <Text style = {styles.phaseDetails}>- pumpkin</Text>
        <Text style = {styles.phaseDetails}>- tuna</Text>
        </View>
      </View>
      </View>
       <View>
        <View style={{ width: '100%' }}>
          <Text style={styles.header}>Find Recipes for Your Phase</Text>
          <Text style={styles.instructions}>Search by Ingredient</Text>
          <View
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always"
          >
            <View>
              <TextInput
                style={styles.input}
                placeholder="Ingredient"
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => this.setState({ ingredient: text })}
                value={this.state.ingredient}
                autoCapitalize="none"
              />
              <TouchableOpacity
                style={styles.button}
                onPress={ () => {
                  this.props.fetchRecipes(this.state.ingredient);
                  Keyboard.dismiss();
                }}
              >
                <Text style={styles.searchText}>Search</Text>
              </TouchableOpacity>
            </View>
            
            {this.props.allRecipes ? (
              <SafeAreaView> 
              <ScrollView>
                {this.props.allRecipes.map((recipe) => {
                  console.log("what my recipe ho", recipe)
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
                      {/* <MaterialIcons name = "open-in-new" style = {styles.exitIcon} size = {30}/> */}
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
      </View>
            
    );
  }
}

const mapState = (state) => {
  console.log('what is my recipe state', state)
  return {
    allRecipes: state.allRecipes,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchRecipes: (ingredient) => dispatch(fetchRecipes(ingredient)),
  };
};

export default connect(mapState, mapDispatch)(AllRecipes);
//open-in-new material icons




