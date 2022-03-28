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
import { fetchMeditations } from '../../store/meditation';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as WebBrowser from 'expo-web-browser';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class AllMeditations extends React.Component {
  constructor() {
    super();
    this.state = {
      meditation: '',
    };
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(item) {
    WebBrowser.openBrowserAsync(item);
  }

  render() {
    if (this.props.currentPhase.color === '#1c9ab7') {
      return (
      <ScrollView style = {{flex : 1, width: '100%'}}>
      <View style = {styles.phaseContainer}>
        <View style = {styles.flexLeft1}>
        <View style = {styles.flexLeftInner1}>
          <Text style = {styles.phaseHeader}>MENSTRUAL PHASE</Text>
          <Text style = {styles.phaseDetails}>Chocolate</Text>
        </View>
        </View>
        </View>

       <View>
        <View style={{ width: '100%' }}>
          <Text style={styles.header}>Discover Meditations</Text>
          <View
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always"
          >
            <View>
              <TextInput
                style={styles.input}
                placeholder="Search by Category"
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => this.setState({ meditation: text })}
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
                onPress={ () => {
                  this.props.fetchmeditations(this.state.meditation);
                  Keyboard.dismiss();
                }}
              >
                <Text style={{color: 'white', fontSize: 15}}>Search</Text>
              </TouchableOpacity>
            </View>
            
            {this.props.allmeditations ? (
              <SafeAreaView> 
              <ScrollView>
                {this.props.allmeditations.map((meditation) => {
                  return (
                    <View key={meditation.id} >
                      <View style = {styles.container}>
                        <Image
                          style={styles.tinyLogo}
                          source={{
                            uri: meditation.gif,
                          }}
                        />
                        <Text style={styles.text}>{meditation.name}</Text>
                         <TouchableOpacity
                        onPress={() => this.handlePress(meditation.gif)}
                        style = {styles.detailButton}
                      >
                      <Text style = {styles.detailText}>View Meditations</Text>
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
                  Search for meditations by category!
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
      <View style = {styles.flexRight1}>
      <View style = {styles.flexLeftInner1}>
        <Text style = {styles.phaseHeader}>FOLLICULAR PHASE</Text>
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
          <Text style={styles.header}>Discover Meditations</Text>
          <View
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always"
          >
            <View>
              <TextInput
                style={styles.input}
                placeholder="Search by Category"
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => this.setState({ meditation: text })}
                value={this.state.meditation}
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
                onPress={ () => {
                  this.props.fetchmeditations(this.state.meditation);
                  Keyboard.dismiss();
                }}
              >
                <Text style={{color: 'white', fontSize: 15}}>Search</Text>
              </TouchableOpacity>
            </View>
            
            {this.props.allmeditations ? (
              <SafeAreaView> 
              <ScrollView>
                {this.props.allmeditations.map((meditation) => {
                  return (
                    <View key={meditation.id} >
                      <View style = {styles.container}>
                        <Image
                          style={styles.tinyLogo}
                          source={{
                            uri: meditation.gif,
                          }}
                        />
                        <Text style={styles.text}>{meditation.name}</Text>
                         <TouchableOpacity
                        onPress={() => this.handlePress(meditation.gif)}
                        style = {styles.detailButton}
                      >
                      <Text style = {styles.detailText}>View meditation</Text>
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
                  Search for meditations by category!
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
      <View style = {styles.flexRight2}>
      <View style = {styles.flexLeftInner1}>
        <Text style = {styles.phaseHeader}>OVULATORY PHASE</Text>
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
          <Text style={styles.header}>Discover Meditations</Text>
          <View
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always"
          >
            <View>
              <TextInput
                style={styles.input}
                placeholder="Search by Category"
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => this.setState({ meditation: text })}
                value={this.state.meditation}
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
                onPress={ () => {
                  this.props.fetchmeditations(this.state.meditation);
                  Keyboard.dismiss();
                }}
              >
                <Text style={{color: 'white', fontSize: 15}}>Search</Text>
              </TouchableOpacity>
            </View>
            
            {this.props.allmeditations ? (
              <SafeAreaView> 
              <ScrollView>
                {this.props.allmeditations.map((meditation) => {
                  return (
                    <View key={meditation.id} >
                      <View style = {styles.container}>
                        <Image
                          style={styles.tinyLogo}
                          source={{
                            uri: meditation.gif,
                          }}
                        />
                        <Text style={styles.text}>{meditation.name}</Text>
                         <TouchableOpacity
                        onPress={() => this.handlePress(meditation.gif)}
                        style = {styles.detailButton}
                      >
                      <Text style = {styles.detailText}>View meditation</Text>
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
                  Search for meditations by category!
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
        <View style = {styles.flexLeft2}>
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
            <Text style={styles.header}>Discover Meditations</Text>
            <View
              style={{ flex: 1, width: '100%' }}
              keyboardShouldPersistTaps="always"
            >
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Search by Category"
                  placeholderTextColor="#aaaaaa"
                  onChangeText={(text) => this.setState({ meditation: text })}
                  value={this.state.meditation}
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
                  onPress={ () => {
                    this.props.fetchMeditations(this.state.meditations);
                    Keyboard.dismiss();
                  }}
                >
                  <Text style={{color: 'white', fontSize: 15}}>Search</Text>
                </TouchableOpacity>
              </View>
              
              {this.props.meditations ? (
                <SafeAreaView> 
                <View>
                  {this.props.meditations.map((meditation) => {
                    console.log('HELLLOOOOOOO WORLD!!!!!!!!!!');
                    console.log('meditation------------------------->', meditation);
                    return (
                      <View key={meditation.id} >
                        <View style = {styles.container}>
                          <Image
                            style={styles.tinyLogo}
                            source={{
                              uri: meditation.gif,
                            }}
                          />
                          <Text style={styles.text}>{meditation.name}</Text>
                           <TouchableOpacity
                          onPress={() => this.handlePress(meditation.gifUrl)}
                          style = {styles.detailButton}
                        >
                        <Text style = {styles.detailText}>View Meditation</Text>
                        </TouchableOpacity>
                        </View>
                      </View>
                    );
                  })}
                </View>
                </SafeAreaView>
              ) : (
                <View>
                  <Text style={styles.instructions}>
                    Search for Meditations to Soothe Your Soul!
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
   meditations: state.meditations,
   currentPhase: state.currentPhase
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchMeditations: (meditation) => dispatch(fetchMeditations(meditation)),
  };
};

export default connect(mapState, mapDispatch)(AllMeditations);
//open-in-new material icons
