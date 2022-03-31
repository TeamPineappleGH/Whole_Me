import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '50%',
  },
  input: {
    height: 48,
    width: 325,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16
  },
  darkinput: {
    height: 48,
    width: 150,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#303030',
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    color: 'white'
  },
  button: {
    display: 'flex',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#1c9ab7',
    borderRadius: 10,
    padding: 10,
  }
})