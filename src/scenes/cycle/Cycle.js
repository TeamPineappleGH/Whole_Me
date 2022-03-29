import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, Pressable, SafeAreaView, Dimensions } from 'react-native'
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
        <SafeAreaView style={styles.item}>
          <ParallaxImage
            source={{ uri: item.source }} 
            containerStyle={styles.imageContainer}
            style={styles.image}
            {...parallaxProps}  
          />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </SafeAreaView>
    </Pressable>
  );
}

const { width } = Dimensions.get("window");
function CustomSlider({data}) {
        const settings = {
            sliderWidth: width,
            sliderHeight: width,
            itemWidth: width - 100,
            data: data,
            renderItem: CarouselItem,
            hasParallaxImages: true,
          };
          return (
            <View style={styles.container}>
              <Carousel {...settings} />
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
            <View removeClippedSubviews={false}>
                <Text style={styles.header}>Menstrual Cycle</Text>
                <CustomSlider data={data}/>
            </View>
        )
    }
}