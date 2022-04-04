import color from 'color';
import { StyleSheet } from 'react-native';
import colors from '../../theme/colors'
import {fonts} from '../../theme/fonts'

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
    backgroundColor: colors.lightBlue,
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
    backgroundColor: colors.darkBlue,
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
    color: 'black',
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
    color: colors.darkBlue,
    marginLeft: 5
  },
  detailText: {
    color: 'black',
    marginRight: 10
  },
  instructions: {
    textAlign: 'center',
    fontSize: 18,
  },
  header: {
    marginTop: 25,
    fontSize: 22,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  phaseContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12
  },
  flexLeft1: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    width: '100%',
    padding: 10,
    margin: 10,
    borderRadius: 15
  },
  flexLeftInner1: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10
  },
  flexRight1: {
    flex: 1,
    backgroundColor: colors.lightBlue,
    width: '100%',
    padding: 10,
    margin: 10,
    borderRadius: 15
  },
  flexRight2: {
    flex: 1,
    backgroundColor: colors.palePink,
    width: '100%',
    padding: 10,
    margin: 10,
    borderRadius: 15
  },
  flexLeft2: {
    flex: 1,
    backgroundColor: colors.orange,
    width: '100%',
    padding: 10,
    margin: 10,
    borderRadius: 15
  },
  phaseHeader: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10
  },
  phaseDetails: {
    fontSize: 15,
    textAlign: 'center',
    padding: 2,
    flexDirection: 'column',
  }
})