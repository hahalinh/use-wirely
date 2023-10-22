import React, { useState, useEffect } from 'react';
import { COLORS } from '../colors';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const urls = [
    'https://i.chzbgr.com/full/9653439488/h21B34B56/good-job',
    'https://imgflip.com/s/meme/Smiling-Cat.jpg',
    'https://cdn.shopify.com/s/files/1/0555/1656/1573/files/2_d24748e8-2a9e-428d-8cb5-be91b011a6d3_480x480.jpg?v=1650642920',
    'https://media.makeameme.org/created/congrats-on-your-a36cdd163c.jpg',
    'https://i.imgflip.com/4m9hrb.jpg',
    'https://i.pinimg.com/474x/cd/2b/7c/cd2b7c394500ca079d80984ae108a4b4.jpg',
    'https://www.mememaker.net/static/images/memes/4841868.jpg',
    'https://i.pinimg.com/736x/67/b2/75/67b2750d58f7fa5257b98450b5ac879b.jpg'
];

function Landing({ navigation, route }) {
  const [url, setUrl] = React.useState(urls[0]);
  const [notificationData, setNotificationData] = useState(null);

  function getRandomUrl(urls) {
      const randomIndex = Math.floor(Math.random() * urls.length);
      return urls[randomIndex];
  }

  useFocusEffect(() => {
      setUrl(getRandomUrl(urls));
  });

  useEffect(() => {
      if (route.params?.notificationData) {
          const { body, title } = route.params.notificationData;
          console.log('Received notification data:', body, title);

          setNotificationData(route.params.notificationData);
      }
  }, [route.params?.notificationData]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Use Wirely</Text>
      </View>
            {/* Render the notification data */}
            {notificationData ? (
                <View style={styles.notificationData}>
                    <TouchableOpacity onPress={() => setNotificationData(null)}>
                        <Text style={styles.notificationText}>{notificationData.title}</Text>
                        <Text style={styles.notificationText}>{notificationData.body}</Text>
                    </TouchableOpacity>
                </View>
            )
                :
                (
                    <Image source={{ uri: url }} style={styles.image} resizeMode="contain" />
                )}
    </SafeAreaView>
  );
}

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

  image: {
    width: 300,
    height: 300,
    borderRadius: 15,
    position: 'absolute',
    top: 200,
    left: '10%',
  },

  notificationData: {
    marginTop: 20,
    alignItems: 'center',
  },

  notificationText: {
    fontSize: 18,
  },

    notificationData: {
        marginTop: 20,
        alignItems: 'center',
    },
    notificationText: {
        fontSize: 18,
    },
});

export default Landing;