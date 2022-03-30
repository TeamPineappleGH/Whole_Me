import { Dimensions, StyleSheet, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderRadius: 15,
      width: screenWidth - 60,
      height: screenWidth - 90,
      paddingBottom: 40,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
      marginTop: 30,
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
      marginTop: 50,
    },
    carouselContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        marginBottom: 50
    },
    sections: {
      marginTop: 20,
      marginBottom: 2
    },
    caption: {
      color: "#222",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      paddingTop: 20,
    },
  })

export default styles;