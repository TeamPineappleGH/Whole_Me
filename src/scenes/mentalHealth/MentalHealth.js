import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, SafeAreaView } from 'react-native'
import styles from './styles'
import mindfulnessData from './mindfulnessData'
import emotionalData from './emotionalData'
import distressData from './distressData'
import interpersonalData from './interpersonalData'
import {CustomMindfulnessSlider} from './sliders'
import { CustomEmotionalSlider } from './sliders'
import { CustomInterpersonalSlider } from './sliders'
import { CustomDistressSlider } from './sliders'

export default function MentalHealth() {
  const [loading, isLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      isLoading(false)
    }, 10)
  })

  if (loading) {
    return null
  } else {
    return (
      <SafeAreaView
        removeClippedSubviews={false}
        style={styles.carouselContainer}
      >
        <ScrollView style={{ flex: 1 }}>

          <Text style={styles.header}>Heal Your Mind</Text>
          <CustomMindfulnessSlider data={mindfulnessData} />

          <Text style={styles.header}>Emotional Regulation</Text>
          <CustomEmotionalSlider data={emotionalData} />

          <Text style={styles.header}>Distress Tolerance</Text>
          <CustomDistressSlider data={distressData} />

          <Text style={styles.header}>Interpersonal Effectiveness</Text>
          <CustomInterpersonalSlider data={interpersonalData} />

        </ScrollView>
      </SafeAreaView>
    )
  }
}