import { StyleSheet } from 'react-native';
import { colors } from 'theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    textAlign: 'center',
  },
  h1: {
    fontSize: 30,
    padding: 20,
    paddingBottom: 10,
    textAlign: "center",
  },
  emoji: {},
  input: {
    marginHorizontal: 30,
    marginVertical: 40,
    textAlign: "justify",
    // fontFamily: "sans-serif-light",
    fontSize: 16,
  },
  darktitle: {
    fontSize: 24,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    textAlign: 'center',
    color: 'white',
  },
  field: {
    fontSize: 15,
    marginBottom: 5,
    marginLeft: 10,
    textAlign: 'center',
  },
  darkfield: {
    fontSize: 15,
    marginBottom: 5,
    marginLeft: 10,
    color: 'white',
    textAlign: 'center',
  },
  main: {
    flex: 1,
    width: '100%',
  },
  journalText: {
    textAlign: "center",
    margin: 40,
  },
  linebreak: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    marginVertical: 30, 
    alignSelf: 'center',
    width: '85%',
    // flex:1
  }
})