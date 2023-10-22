import React, { useState, useEffect } from 'react';
import { COLORS } from '../colors';
import { View, TextInput, Button, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Notifications from 'expo-notifications';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const ReminderForm = () => {
    const [reminderText, setReminderText] = useState('');
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [reminders, setReminders] = useState([]);
    const navigation = useNavigation();

    const handleTimeChange = (event, selected) => {
        if (event.type === 'set') {
            // Ensure that the selected time is in the future
            const currentTime = new Date();
            if (selected <= currentTime) {
                selected.setDate(selected.getDate() + 1);
            }

            setSelectedTime(selected);
            setShowTimePicker(false);
        } else {
            setShowTimePicker(false);
        }
    };

    useEffect(() => {
        const notificationListener = Notifications.addNotificationResponseReceivedListener((response) => {
          const notification = response.notification;
          const screenToOpen = notification.request.content.data.screenToOpen;

          const {body, title} = notification.request.content
    
          if (screenToOpen === 'Landing') {
            navigation.navigate('Landing', {
              notificationData: {body: body, title: title},
            });
          }
        });
    
        return () => {
          Notifications.removeNotificationSubscription(notificationListener);
        };
      }, []);


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

    const scheduleDailyReminder = () => {
        reminders.forEach(async (item) => {
            const trigger = new Date();
            const timeParts = item.time.split(':');
            const hours = parseInt(timeParts[0], 10);
            const minutes = parseInt(timeParts[1], 10);
    
            if (isNaN(hours) || isNaN(minutes)) {
                console.error('Invalid time format:', item.time);
                return; // Skip this reminder
            }
    
            trigger.setHours(hours);
            trigger.setMinutes(minutes);
    
            if (trigger <= new Date()) {
                trigger.setDate(trigger.getDate() + 1);
            }
    
            console.log('Scheduling reminder for', item.text, 'at', trigger);
    
            await Notifications.scheduleNotificationAsync({
                content: {
                    title: item.time,
                    body: item.text,
                    data: {
                        screenToOpen: 'Landing', // Specify the screen to open
                    },
                },
                trigger: {
                    //perhaps the setting is wrong so no repeated for everyday?
                    date: trigger,
                    repeats: true,
                },
            });
        });
    }

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

            <Button
                title="Schedule Daily Reminder"
                onPress={scheduleDailyReminder}
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