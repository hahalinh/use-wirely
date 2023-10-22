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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Setting;
