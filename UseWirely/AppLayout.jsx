import React from 'react';
import { COLORS } from './colors';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Ionicons} from '@expo/vector-icons';

//components
import Landing from './components/Landing';
// import Setting from './components/Setting';
import CalendarPage from './components/CalendarPage';
import ReminderForm from './components/ReminderForm';

function CalendarPageWrapper(props) {
    return <CalendarPage {...props} month={9} year={2023} />;
  }

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const iconSize = 24;

const navigatorRoutes = [
    // { name: "Setting", component: Setting, icon: <Ionicons name='settings' size={iconSize} /> },   
    { name: "Landing", component: Landing, icon: <FontAwesome name='home' size={iconSize} /> },
    // { name: "Setting", component: Setting, icon: <Ionicons name='settings' size={iconSize} /> },
    { name: "Reminder", component: ReminderForm, icon: <Ionicons name='settings' size={iconSize} />},
    {
        name: "CalendarPage",
        component: CalendarPageWrapper,
        icon: <Ionicons name='calendar' size={iconSize} />
      }
    ]

const pageRoutes = [
]

function TabNavigator() {
    return (
        <Tab.Navigator
        screenOptions={{
                tabBarActiveTintColor: COLORS.darkgreen,
                tabBarInactiveTintColor: COLORS.beige,
                tabBarStyle: {
                    height: 60,
                    width:'95%',
                    paddingHorizontal: 5,
                    borderRadius: 20,
                    paddingTop: 10,
                    paddingBottom: 10,
                    bottom:'1.4%',
                    left:' 2%',
                    backgroundColor: COLORS.green,
                    position: 'absolute',
                },
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
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="App"
                component={TabNavigator}
                options={{
                    headerShown: false,
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