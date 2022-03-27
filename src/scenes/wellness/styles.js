import { StyleSheet } from 'react-native';
import colors from '../../theme/colors'

export default StyleSheet.create({
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
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 55
  },
  flexLeft1: {
    backgroundColor: colors.darkBlue,
    width: 190,
    height: 250,
    padding: 10,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15
  },
  flexLeftInner1: {
    backgroundColor: 'white',
    width: '97%',
    marginTop: 1,
    marginLeft: 3,
    borderColor: 'black',
    borderWidth: 0.5
  },
  flexRight1: {
    backgroundColor: colors.lightBlue,
    width: 190,
    height: 250,
    padding: 10,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15
  },
  flexRight2: {
    backgroundColor: colors.palePink,
    width: 190,
    height: 250,
    padding: 10,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15
  },
  flexLeft2: {
    backgroundColor: colors.orange,
    width: 190,
    padding: 10,
    height: 250,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15
  },
  tinyLogo: {
    alignItems: 'center',
    alignContent: 'center',
    width: 110,
    height: 110,
    marginLeft: 32,
    marginTop: 35
  },
  text: {
    fontSize: 20,
    color: 'black',
    flex: 1,
    textAlign: 'center',
    marginTop: 15
  },
})
