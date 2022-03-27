import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Entry from "../components/Entry";
import Constants from "expo-constants";
import { Icon, Button } from "react-native-elements";
import {connect} from 'react-redux'
import { showMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message"; 

class AllEntries extends React.Component {
  // renderEntries = ({ item, navigation }) => (
  //   <Entry {...item} date={item.date} navigation={this.props.navigation} />
  // );

  constructor(props) {
    super(props);

    this.pressHandler = this.pressHandler.bind(this);
    // console.log('this is props!!', this.props)
  }
  
  pressHandler = () => {
    this.props.navigation.navigate('Diary')
  }
  
  
  render() {
    return (
      <View style={styles.container}>
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.h1}>Entries</Text>
        </View>
        <View>
          <FlatList
            renderItem={this.renderEntries}
            data={this.props.entries.sort(
              (a, b) => new Date(b.date) - new Date(a.date)
            )}
            style={{ marginBottom: 60 }}
            keyExtractor={(item) => item.date.toString()}
          />
        </View>
        <FlashMessage position="top" /> */}
        <Text>This is the All Entries Page!!</Text>
        <Button title='Add New Entry' onPress={this.pressHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
  h1: {
    fontSize: 30,
    padding: 20,
    paddingBottom: 10,
  },
});

const mapStateToProps = state => ({
  entries: state.entries,
})

export default connect(mapStateToProps)(AllEntries)
