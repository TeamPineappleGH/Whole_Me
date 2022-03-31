import React, { useEffect, useState } from 'react'
import { Text, ScrollView, SafeAreaView } from 'react-native'
import styles from './styles'
import data from './data'
import skinData from './skinData'
import emotionData from './emotionData'
import symptomsData from './symptomsData'
import { CustomSlider } from './sliders'
import { CustomSkinSlider } from './sliders'
import { CustomEmotionSlider } from './sliders'
import { CustomSymptomsSlider } from './sliders'


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
            <ScrollView style={{flex: 1}}>

                <Text style={styles.header}>All About Your Cycle</Text>
                <CustomSlider data={data}/>

                <Text style={styles.header}>Skin and Your Cycle</Text>
                <CustomSkinSlider skinData={skinData}/>

                <Text style={styles.header}>Emotions</Text>
                <CustomEmotionSlider emotionData={emotionData}/>

                <Text style={styles.header}>Relieving Common Symptoms</Text>
                <CustomSymptomsSlider symptomsData={symptomsData}/>
            </ScrollView>
            </SafeAreaView>
        )
    }
}