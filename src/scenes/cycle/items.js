import React from 'react';
import { Image, Text, Pressable, SafeAreaView } from 'react-native';
import styles from './styles';
import * as WebBrowser from 'expo-web-browser';

export function CarouselItem({ item }) {

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

export function CarouselSkinItems({ item }) {

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

export function CarouselEmotionItems({ item }) {

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

export function CarouselSymptomsItems({ item }) {

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