import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default function CalendarPage({ month, year }) {
    const daysInMonth = new Date(year, month, 0).getDate();
    const startDay = new Date(year, month - 1, 1).getDay();

    let calendar = [];

    for (let i = 0; i < startDay; i++) {
        calendar.push(null); // padding days
    }

    for (let i = 1; i <= daysInMonth; i++) {
        calendar.push(i);
    }

    return (
        <View style={styles.container}>
            {daysOfWeek.map(day => (
                <Text key={day} style={styles.dayHeader}>
                    {day}
                </Text>
            ))}
            {calendar.map((day, index) => (
                <View key={index} style={styles.dayContainer}>
                    <Text style={styles.dayText}>{day}</Text>
                    {day && (
                        <Text style={styles.emojiText}>
                            {Math.random() > 0.5 ? '😊' : '☹️'}
                        </Text>
                    )}
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 90,
    },
    dayHeader: {
        width: '14%', 
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 5,
    },
    dayContainer: {
        width: '14.28%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dayText: {
        fontSize: 18,
    },
    emojiText: {
        fontSize: 20,
    },
});



