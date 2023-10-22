import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLayout from './AppLayout';
import Landing from './components/Landing';
import CalendarPage from './components/CalendarPage';;
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    <StatusBar style="auto" />
    <AppLayout />
    
    

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
