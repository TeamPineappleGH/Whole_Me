import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList, Text, View, ScrollView, StatusBar, ActivityIndicator, SafeAreaView, useColorScheme } from 'react-native'
import styles from './styles'
import { firebase } from '../../firebase/config'
// import { ListItem, SearchBar } from "react-native-elements";
import SearchBar from './SearchBar'
//const data = apidata

export default function Nutrition(props) {
  const userData = props.extraData
  const scheme = useColorScheme()
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // get data from the fake api endpoint

  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://api.edamam.com/api/recipes/v2?type=public&q=potato&app_id=151c33c7&app_key=78e0354faa1fdc0978f19b87851f7c7d"
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  });

  return (
    <View>
    <SafeAreaView style={{
      justifyContent: "center",
    alignItems: "center",
    }}>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />
    </SafeAreaView>
    <View style={styles.container}>
    <View style={{ flex: 1, width: '100%' }}>
      <ScrollView style={styles.main}>
        <Text style={scheme === 'dark' ? styles.darkfield : styles.field}>
          hi world
        </Text>
        </ScrollView>
      </View>
    </View>
    </View>
  );
};





