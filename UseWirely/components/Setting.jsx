// Setting.js
import React from 'react';
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Setting;
