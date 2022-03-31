import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, SafeAreaView } from 'react-native'
import styles from './styles'
import mindfulnessData from './mindfulnessData'
import {CustomMindfulnessSlider} from './sliders'

export default function MentalHealth () {
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
            <ScrollView style={{flex: 1}}>

                <Text style={styles.header}>All About Your Cycle</Text>
                <CustomMindfulnessSlider data={mindfulnessData}/>

            </ScrollView>
            </SafeAreaView>
        )
    }
}