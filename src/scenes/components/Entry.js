import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const decodedMoods = [
  "sentiment-very-dissatisfied",
  "sentiment-dissatisfied",
  "sentiment-neutral",
  "sentiment-satisfied",
  "sentiment-very-satisfied",
  "circle-outline",
];

const decodedMoodColours = [
  "#54539D",
  "#7187D6",
  "#a6808c",
  "#ee964b",
  "#F67251",
  "#0000008A",
];
const Entry = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.container, ]}
      onPress={() =>
        navigation.navigate("Details", {
          date: props.date,
          mood: props.mood,
          writtenDiary: props.writtenDiary,
          status: props.status,
        })
      }
    >
      <Icon
        name={decodedMoods[props.mood]}
        color={decodedMoodColours[props.mood]}
        size={50}
        style={{ paddingLeft: 15 }}
        type={props.mood < 5 ? "ionicons" : "material-community"}
      />
      <View style={{ paddingHorizontal: 15 }}>
        <Text style={[{ fontSize: 15, fontWeight: "700" }, styles.text]}>
          {props.date}
        </Text>
        {/* <Text style={[{ fontSize: 14 }, styles.text]}>{props.writtenDiary}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: '#35363a66',
    borderWidth: 1,
    marginHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    color: "#656565",
  },
});


export default Entry;
