import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ReminderForm = () => {
  const [reminderText, setReminderText] = useState('');
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [reminders, setReminders] = useState([]);

  const handleTimeChange = (event, selected) => {
    if (event.type === 'set') {
      setSelectedTime(selected);
      setShowTimePicker(false);
    } else {
      setShowTimePicker(false);
    }
  };

  const handleReminderSubmit = () => {
    const formattedTime =
      selectedTime.getHours().toString().padStart(2, '0') +
      ':' +
      selectedTime.getMinutes().toString().padStart(2, '0');

    const newReminder = {
      text: reminderText,
      time: formattedTime,
    };

    setReminders([...reminders, newReminder]);
    setReminderText('');
    setSelectedTime(new Date());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your reminder"
        value={reminderText}
        onChangeText={(text) => setReminderText(text)}
      />

      <TouchableOpacity style={styles.timePicker} onPress={() => setShowTimePicker(true)}>
        <Text style={styles.timeText}>
          {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </TouchableOpacity>

      {showTimePicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={handleTimeChange}
        />
      )}

      <Button
        title="Add Reminder"
        onPress={handleReminderSubmit}
      />

      <ScrollView style={styles.reminderList}>
        {reminders.map((reminder, index) => (
          <View key={index} style={styles.reminderItem}>
            <Text style={styles.reminderItemText}>{reminder.text}</Text>
            <Text style={styles.reminderItemText}>{reminder.time}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 80,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  timePicker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  reminderList: {
    marginTop: 20,
  },
  reminderItem: {
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
  },
  reminderItemText: {
    fontSize: 16,
  },
});

export default ReminderForm;
