import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, Pressable, SafeAreaView, Dimensions, Image } from 'react-native'
import styles from './styles'
import data from './data'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import * as WebBrowser from 'expo-web-browser';


function CarouselItem({ item, index }, parallaxProps) {

    async function handlePress (item) {
        await WebBrowser.openBrowserAsync(encodeURI(item))
    }
    
    return (
      <Pressable onPress={() => handlePress(item.link)}>
        <SafeAreaView style={styles.container}>
          <Image
            source={{ uri: item.source }} 
            style={styles.image} 
          />
        <Text style={styles.header} numberOfLines={2}>
          {item.title}
        </Text>
      </SafeAreaView>
    </Pressable>
  );
}

const { width } = Dimensions.get("window");
const sliderWidth = Dimensions.get('window').width + 80

function CustomSlider({data}) {
    const isCarousel = React.useRef(null)

          return (
            <View>
              <Carousel
                layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={CarouselItem}
                sliderWidth={sliderWidth - 100}
                itemWidth={width}
                inactiveSlideShift={0}
                useScrollView={true}
      />
            </View>
          )
  }


export default function CycleResources () {
    const [loading, isLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            isLoading(false)
        }, 10)
    })

    if (loading) {
        return null;
    } else {
        return (
            <SafeAreaView removeClippedSubviews={false} style={styles.carouselContainer}>
                <Text style={styles.header}>Menstrual Cycle</Text>
                <CustomSlider data={data}/>
            </SafeAreaView>
        )
    }
}