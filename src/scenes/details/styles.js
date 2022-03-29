import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  field: {
    fontSize: 15,
    textAlign: 'center',
  },
  darktitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
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
  progress: {
    alignSelf: 'center',
  },
  darkprogress: {
    alignSelf: 'center',
    color: 'white',
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16
  },
  darkinput: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#303030',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    color: 'white'
  },
  button: {
    display: 'flex',
    marginTop: 35,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    backgroundColor: '#1c9ab7',
    borderRadius: 10,
    padding: 10,
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
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16
  },
})
