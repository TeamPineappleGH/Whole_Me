import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  main: {
    flex: 1,
    width: '100%',
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  darktitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  field: {
    fontSize: 15,
    textAlign: 'center'
  },
  darkfield: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
  avatar: {
    margin: 30,
    alignSelf: "center",
  },
  button: {
    backgroundColor: '#1c9ab7',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: 'center',
    padding: 10
  },
  deletebutton: {
    backgroundColor: '#dc143c',
    marginLeft: 45,
    marginRight: 45,
    marginTop: 20,
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: 'center',
    padding: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20
  },
  footerLink: {
    color: '#f98c41',
    fontWeight: "bold",
    fontSize: 16
  },
  logo: {
    flex: 1,
    height: 180,
    width: 180,
    alignSelf: "center",
    margin: 30,
    borderRadius: 20
  },
})
