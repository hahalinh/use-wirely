import React, { useState } from 'react';
import { COLORS } from '../colors';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'; // Import the useFocusEffect hook

function Landing({navigation}) {
  const urls = [
    'https://i.chzbgr.com/full/9653439488/h21B34B56/good-job',
    'https://imgflip.com/s/meme/Smiling-Cat.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHFsgF6njpAaEfTzTFBTfCAcTT5PCDOukUQ&usqp=CAU',
    'https://cdn.shopify.com/s/files/1/0555/1656/1573/files/2_d24748e8-2a9e-428d-8cb5-be91b011a6d3_480x480.jpg?v=1650642920',
    'https://media.makeameme.org/created/mission-accomplished-3553379e3f.jpg',
    'https://www.scienceofpeople.com/wp-content/uploads/2022/07/image-54.png',
    'https://media.licdn.com/dms/image/C4D08AQGFG_KLQlAMgQ/croft-frontend-shrinkToFit1024/0/1618353872250?e=2147483647&v=beta&t=__6DJViY8J3HREo4RC_5DDdULPuIwEkQNEf97y7Mx2o'
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
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hiiiiiiiii </Text>
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
    },
  
    title: {
      // fontFamily: 'Sofia Pro',
      marginTop: '2%',
      left: '40%',
      fontWeight: 'bold',
      fontSize: 24,
    },
  
    titleContainer: {
      backgroundColor: COLORS.green,
    },
  
    utilityContainer: {
      display: 'flex',
      flexDirection: 'row',
    },

    memimg: {
          width: 300,
          height: 300,
          position: 'absolute',
          top: 100,
          left: '10%'
    }
  });

  export default Landing;