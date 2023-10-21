import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';

function Setting({navigation}) {
  
  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Setting</Text>
        <Text style={styles.title}></Text>
      </View>
    </SafeAreaView>
  )}

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column-reverse'
    },
  
    title: {
      // fontFamily: 'Sofia Pro',
      fontWeight: 'bold',
      fontSize: 24,
    },
  
    address: {
  
    },
  
    utilityContainer: {
      display: 'flex',
      flexDirection: 'row',
    }
  });

export default Setting;