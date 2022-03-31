import React from 'react'
import { Dimensions, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import mindfulnessData from './mindfulnessData';
import emotionalData from './emotionalData';
import distressData from './distressData';
import interpersonalData from './interpersonalData';
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
                data={mindfulnessData}
                renderItem={CarouselMindfulnessItems}
                sliderWidth={sliderWidth - 100}
                itemWidth={width}
                inactiveSlideShift={1}
                useScrollView={true}
                />
            </View>
          )
  }

  export function CustomEmotionalSlider({data}) {
    const isCarousel = React.useRef(null)
    
          return (
            <View style={{height: width - 50}}>
              <Carousel
                ref={isCarousel}
                data={emotionalData}
                renderItem={CarouselEmotionalItems}
                sliderWidth={sliderWidth - 100}
                itemWidth={width}
                inactiveSlideShift={0}
                useScrollView={true}
            />
            </View>
          )
  }

  export function CustomDistressSlider({data}) {
    const isCarousel = React.useRef(null)
    
          return (
            <View style={{height: width - 50}}>
              <Carousel
                ref={isCarousel}
                data={distressData}
                renderItem={CarouselDistressItems}
                sliderWidth={sliderWidth - 100}
                itemWidth={width}
                inactiveSlideShift={0}
                useScrollView={true}
            />
            </View>
          )
  }

  export function CustomInterpersonalSlider({data}) {
    const isCarousel = React.useRef(null)
    
          return (
            <View style={{height: width - 50}}>
              <Carousel
                ref={isCarousel}
                data={interpersonalData}
                renderItem={CarouselInterpersonalItems}
                sliderWidth={sliderWidth - 100}
                itemWidth={width}
                inactiveSlideShift={0}
                useScrollView={true}
            />
            </View>
          )
  }