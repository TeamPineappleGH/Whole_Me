import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#B8E0D2',
  },
  title: {
    fontSize: 24,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    textAlign: 'center',
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
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: '#B8E0D2',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 70,
    marginRight: 70,
    marginTop: 10,
    marginBottom: 30,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchText: {
    fontSize: 16,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    color: '#757575',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  detailButton: {
    alignContent: 'center',
    flexDirection: 'column'
  },
  exitIcon: {
    marginRight: 10,
    color: '#757575',
    marginLeft: 5
  },
  detailText: {
    color: '#757575',
    marginRight: 10
  },
  instructions: {
    textAlign: 'center',
    fontSize: 18,
  },
  header: {
    marginTop: 60,
    fontSize: 30,
    marginBottom: 0,
    padding: 0,
    textAlign: 'center',
  },
})
