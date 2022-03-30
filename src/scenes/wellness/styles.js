import { StyleSheet } from 'react-native';
import colors from '../../theme/colors'
import {Dimensions} from 'react-native'

const { width } = Dimensions.get('window')


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
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 55,
    justifyContent: 'space-around'
  },
  flexLeft1: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    width: 180,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    marginLeft: 5
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
    flex: 1,
    backgroundColor: colors.lightBlue,
    width: 180,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    marginLeft: 5
  },
  flexRight2: {
    flex: 1,
    backgroundColor: colors.palePink,
    width: 180,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    marginLeft: 5
  },
  flexLeft2: {
    flex: 1,
    backgroundColor: colors.orange,
    width: 180,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    marginLeft: 5
  },
  tinyLogo: {
    alignItems: 'center',
    alignContent: 'center',
    width: 110,
    height: 110,
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginTop: 15,
  },
})
