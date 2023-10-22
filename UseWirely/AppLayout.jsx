import React from 'react';
import { COLORS } from './colors';
import { StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Ionicons} from '@expo/vector-icons';

//components
import Landing from './components/Landing';
import Setting from './components/Setting';
import CalendarPage from './components/CalendarPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const iconSize = 24;

const navigatorRoutes = [
    { name: "Landing", component: Landing, icon: <FontAwesome name='home' sizex={iconSize} /> },
    { name: "Setting", component: Setting, icon: <Ionicons name='settings' size={iconSize} /> },
    { name: "CalendarPage", component: (props) => <CalendarPage {...props} month={9} year={2023} />, icon: <Ionicons name='calendar' size={iconSize} /> },    
]

const pageRoutes = [
]

function TabNavigator() {
    return (
        <Tab.Navigator
        screenOptions={{
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            {navigatorRoutes.map((item, index) => {
                return (
                    <Tab.Screen
                        key={index}
                        name={item.name}
                        component={item.component}
                        options={{
                            headerShown: false,
                            tabBarIcon: () => item.icon,
                        }}
                    />
                )
            })
            }
            {pageRoutes.map((item, index) => {
                return (
                    <Tab.Screen
                        key={index}
                        name={item.name}
                        component={item.component}
                        options={{
                            tabBarButton: () => { },
                            headerShown: false,
                        }}
                    />
                )
            })
            }
        </Tab.Navigator>
    );
}

function AppLayout() {
    return (
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen
                name="App"
                component={TabNavigator}
                style = {styles.container}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.green,
    },
});

export default AppLayout;