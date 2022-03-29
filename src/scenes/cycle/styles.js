import { Dimensions, StyleSheet, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window')

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//   },
//   title: {
//     fontSize: 20,
//   },
//   item: {
//     width: '100%',
//     height: screenWidth - 125, 
//   },
//     imageContainer: {
//     flex: 1,
//     borderRadius: 15,
//     backgroundColor: 'white',
//     marginBottom: Platform.select({ ios: 2, android: 1 }),
//   },

//   image: {
//     ...StyleSheet.absoluteFillObject,
//     resizeMode: 'cover',
//     borderRadius: 15
//   },
//   dotContainer: {
//     backgroundColor: 'rgb(230,0,0)',
//   },
//   dotStyle: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: 'black',
//   },
//   inactiveDotStyle: {
//     backgroundColor: 'rgb(255,230,230)',
//   },
//   header: {
//       fontSize: 30,
//       textAlign: 'center',
//       marginTop: 20
//   }
// });

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderRadius: 15,
      width: screenWidth - 60,
      height: screenWidth - 100,
      paddingBottom: 40,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
      marginTop: 40,
      marginLeft: 20,
      marginRight: 20,
      alignItems: 'center'
    },
    image: {
      width: screenWidth - 60,
      height: 250,
    },
    header: {
      color: "#222",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      paddingTop: 20,
    },
    body: {
      color: "#222",
      fontSize: 18,
      paddingLeft: 20,
      paddingLeft: 20,
      paddingRight: 20
    },
    carouselContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    }
  })

export default styles;