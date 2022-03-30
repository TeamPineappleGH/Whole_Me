import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, Pressable, SafeAreaView, Dimensions, Image } from 'react-native'
import styles from './styles'
import data from './data'
import skinData from './skinData'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import * as WebBrowser from 'expo-web-browser';

const { width } = Dimensions.get("window");
const sliderWidth = Dimensions.get('window').width + 80


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
        <Text style={styles.caption} numberOfLines={2}>
          {item.title}
        </Text>
      </SafeAreaView>
    </Pressable>
  );
}

function CarouselSkinItems({ item, index }) {

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
        <Text style={styles.caption} numberOfLines={2}>
          {item.title}
        </Text>
      </SafeAreaView>
    </Pressable>
  );
}



function CustomSlider({data}) {
    const isCarousel = React.useRef(null)
          return (
            <View>
              <Carousel
                layoutCardOffset={2}
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

  function CustomSkinSlider({skinData}) {
    const isCarousel = React.useRef(null)
    
          return (
            <View>
              <Carousel
                ref={isCarousel}
                data={skinData}
                renderItem={CarouselSkinItems}
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
            <ScrollView>
            <SafeAreaView removeClippedSubviews={false} style={styles.carouselContainer}>
                <Text style={styles.header}>All About Your Cycle</Text>
                <CustomSlider data={data}/>

                <Text style={styles.header}>Skin and Your Cycle</Text>
                <CustomSkinSlider skinData={skinData}/>
            </SafeAreaView>
            </ScrollView>
        )
    }
}