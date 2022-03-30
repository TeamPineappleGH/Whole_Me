import React from 'react'
import { Dimensions, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { CarouselItem } from "./items";
import { CarouselSkinItems } from "./items";
import { CarouselEmotionItems } from "./items";

const { width } = Dimensions.get("window");
const sliderWidth = Dimensions.get('window').width + 80

export function CustomSlider({data}) {
    const isCarousel = React.useRef(null)
          return (
              <View style={{height: width - 50}}>
              <Carousel
                ref={isCarousel}
                data={data}
                renderItem={CarouselItem}
                sliderWidth={sliderWidth - 100}
                itemWidth={width}
                inactiveSlideShift={1}
                useScrollView={true}
                />
            </View>
          )
  }

  export function CustomSkinSlider({skinData}) {
    const isCarousel = React.useRef(null)
    
          return (
            <View style={{height: width - 50}}>
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

  export function CustomEmotionSlider({emotionData}) {
    const isCarousel = React.useRef(null)
    
          return (
            <View style={{height: width - 50}}>
              <Carousel
                ref={isCarousel}
                data={emotionData}
                renderItem={CarouselEmotionItems}
                sliderWidth={sliderWidth - 100}
                itemWidth={width}
                inactiveSlideShift={0}
                useScrollView={true}
            />
            </View>
          )
  }