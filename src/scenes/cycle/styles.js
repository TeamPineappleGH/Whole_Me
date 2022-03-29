import { Dimensions, StyleSheet, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
  },
  item: {
    width: '100%',
    height: screenWidth - 125, 
  },
    imageContainer: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: 'lightblue',
    marginBottom: Platform.select({ ios: 2, android: 1 }),
  },

  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  dotContainer: {
    backgroundColor: 'rgb(230,0,0)',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  inactiveDotStyle: {
    backgroundColor: 'rgb(255,230,230)',
  },
  header: {
      fontSize: 30,
      textAlign: 'center',
      marginTop: 20
  }
});

export default styles;