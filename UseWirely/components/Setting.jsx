// Setting.js
import React from 'react';
import { COLORS } from '../colors';
import { StyleSheet, View } from 'react-native';
import ReminderForm from './ReminderForm';

function Setting() {
  return (
    <View style={styles.container}>
      <ReminderForm />
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.beige,
      display: 'flex',
      flexDirection: 'column-reverse'
    },
  
    title: {
      // fontFamily: 'Sofia Pro',
      fontWeight: 'bold',
      fontSize: 24,
    },
  
    utilityContainer: {
      display: 'flex',
      flexDirection: 'row',
    }
  });

export default Setting;
