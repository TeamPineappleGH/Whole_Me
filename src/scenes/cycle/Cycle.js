import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, Pressable, SafeAreaView, Dimensions } from 'react-native'
import styles from './styles'
import data from './data'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';


function CarouselItem({ item, index }, parallaxProps) {
    return (
      <Pressable onPress={() => alert('Image description:' + item.description)}>
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
            itemWidth: width - 90,
            data: data,
            renderItem: CarouselItem,
            hasParallaxImages: false,
          };
          return (
            <View style={styles.container}>
              <Carousel {...settings} />
            </View>
          )
  }


export default function CycleResources () {
    return (
        <View>
            <Text>Menstrual Cycle</Text>
            <CustomSlider data={data}/>
        </View>
    )
}