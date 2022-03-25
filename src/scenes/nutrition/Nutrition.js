import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
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
       <DismissKeyboard>
        <View style={styles.body}>
          <Text style={styles.header}>Discover New Recipes</Text>
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
                  // Keyboard.dismiss();
                }}
              >
                <Text style={styles.searchText}>Search</Text>
              </TouchableOpacity>
            </View>
            {/* {this.props.allRecipes ? ( */}
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
                      <Text style = {styles.detailText}>Details</Text>
                      </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
            {/* ) : (
              <View>
                <Text style={styles.instructions}>
                  Search for recipes by ingredient!
                </Text>
              </View>
            )} */}
          </View>
        </View>
      </DismissKeyboard>
            
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




