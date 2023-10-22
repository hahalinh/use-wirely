import React, { useState } from 'react';
import { COLORS } from '../colors';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'; // Import the useFocusEffect hook

function Landing({navigation}) {
  const urls = [
    'https://i.chzbgr.com/full/9653439488/h21B34B56/good-job',
    'https://imgflip.com/s/meme/Smiling-Cat.jpg',
    'https://cdn.shopify.com/s/files/1/0555/1656/1573/files/2_d24748e8-2a9e-428d-8cb5-be91b011a6d3_480x480.jpg?v=1650642920',
    'https://media.makeameme.org/created/congrats-on-your-a36cdd163c.jpg',
    'https://i.imgflip.com/4m9hrb.jpg',
    'https://i.pinimg.com/474x/cd/2b/7c/cd2b7c394500ca079d80984ae108a4b4.jpg',
    'https://www.mememaker.net/static/images/memes/4841868.jpg',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F261068109637021213%2F&psig=AOvVaw2sJvleupf5i3RvOATpr8HT&ust=1698033698397000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPiQss7iiIIDFQAAAAAdAAAAABAQ'
];

    const [url, setUrl] = React.useState('');

    function getRandomUrl(urls) {
        const randomIndex = Math.floor(Math.random() * urls.length);
        return urls[randomIndex];
    }

    useFocusEffect(() => {
        setUrl(getRandomUrl(urls));
    });

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Use Wirely </Text>
        <View></View>
        <Image 
        style={styles.memimg}
        source={{ uri: url }} resizeMode="contain"/>
      </View>
    </SafeAreaView>
  )};

  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.beige,
      flex: 1,
      overflow: 'hidden',
      paddingbottom: 20 
    },
  
    title: {
      // fontFamily: 'Sofia Pro',
      marginTop: '2%',
      left: '35%',
      fontWeight: 'bold',
      color: COLORS.darkgreen,
      fontSize: 24,
      alignItems: 'center',
    },
  
    titleContainer: {
      height: 50,
      backgroundColor: COLORS.beige,
      shadowColor: COLORS.green,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.6,
      shadowRadius: 3.84,
    },
  
    utilityContainer: {
      display: 'flex',
      flexDirection: 'row',
    },

    memimg: {
          width: 300,
          height: 300,
          borderRadius: 15,
          position: 'absolute',
          top: 100,
          left: '10%',
    }
  });

  export default Landing;