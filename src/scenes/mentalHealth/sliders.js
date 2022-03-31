import React from 'react'
import { Dimensions, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { CarouselMindfulnessItems} from "./items";
import { CarouselEmotionalItems } from "./items";
import { CarouselDistressItems } from "./items";
import { CarouselInterpersonalItems } from "./items";

const { width } = Dimensions.get("window");
const sliderWidth = Dimensions.get('window').width + 80

export function CustomMindfulnessSlider({data}) {
    const isCarousel = React.useRef(null)
          return (
              <View style={{height: width - 50}}>
              <Carousel
                ref={isCarousel}
                data={data}
                renderItem={CarouselMindfulnessItems}
                sliderWidth={sliderWidth - 100}
                itemWidth={width}
                inactiveSlideShift={1}
                useScrollView={true}
                />
            </View>
          )
  }

  export function CustomEmotionalSlider({skinData}) {
    const isCarousel = React.useRef(null)
    
          return (
            <View style={{height: width - 50}}>
              <Carousel
                ref={isCarousel}
                data={skinData}
                renderItem={CarouselEmotionalItems}
                sliderWidth={sliderWidth - 100}
                itemWidth={width}
                inactiveSlideShift={0}
                useScrollView={true}
            />
            </View>
          )
  }

  export function CustomDistressSlider({emotionData}) {
    const isCarousel = React.useRef(null)
    
          return (
            <View style={{height: width - 50}}>
              <Carousel
                ref={isCarousel}
                data={emotionData}
                renderItem={CarouselDistressItems}
                sliderWidth={sliderWidth - 100}
                itemWidth={width}
                inactiveSlideShift={0}
                useScrollView={true}
            />
            </View>
          )
  }

  export function CustomInterpersonalSlider({symptomsData}) {
    const isCarousel = React.useRef(null)
    
          return (
            <View style={{height: width - 50}}>
              <Carousel
                ref={isCarousel}
                data={symptomsData}
                renderItem={CarouselInterpersonalItems}
                sliderWidth={sliderWidth - 100}
                itemWidth={width}
                inactiveSlideShift={0}
                useScrollView={true}
            />
            </View>
          )
  }