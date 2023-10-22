import React from 'react';
import {COLORS} from '../colors';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';

const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function CalendarPage({ month, year }) {
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
            
            <Text style={styles.titleText}>Record of electricity saving!!</Text>
            <Image source={{ uri: 'https://pbs.twimg.com/media/ES6-7GXXkAEgxg0.png' }} style={styles.memeStyle} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.beige,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 90,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 40,         // Space below the title
        textAlign: 'center',      // Center-align the text
        color: COLORS.darkpink
    },
    dayHeader: {
        width: '14%', 
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 5,
    },
    memeStyle: {
        width: 300,  
        height: 300,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 20,
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

export default CalendarPage;

