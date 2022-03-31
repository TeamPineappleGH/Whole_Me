import React from 'react';
import { Image, Text, Pressable, SafeAreaView } from 'react-native';
import styles from './styles';
import * as WebBrowser from 'expo-web-browser';

export function CarouselMindfulnessItems({ item }) {

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

export function CarouselEmotionalItems({ item }) {

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

export function CarouselDistressItems({ item }) {

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

export function CarouselInterpersonalItems({ item }) {

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