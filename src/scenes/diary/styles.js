import { StyleSheet } from 'react-native';
import { colors } from 'theme'

export default StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  container: {
    // display: 'flex',
    // flexDirection: 'row',
    flex: 1,
    borderColor: 'black',
    // borderWidth: 1,
    marginBottom: 15,
    // padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    // justifyContent: 'space-between',
    justifyContent: 'center',
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: colors.lightBlue,
  },
  flatList: {

    flex: 1,
      marginBottom: 60 

  },
  flexLeftInner1: {
    backgroundColor: 'white',
    borderRadius: 15,
    // width: '90%',
    padding: 30,
    flex: 1
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
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "#656565",
  },
  journalText: {
    textAlign: "center",
    margin: 40,
  },
  customButton: {
    display: 'flex',
    marginTop: 7,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
    alignItems: 'center',
    backgroundColor: '#1c9ab7',
    borderRadius: 10,
    padding: 10,
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