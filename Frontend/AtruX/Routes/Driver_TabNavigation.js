import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DriverProfile from '../screens/Driver_Profile';
import EditProfile from '../screens/EditDriverProfile';
import Driver_Security from '../screens/Security_Driver';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function ProfileStackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={DriverProfile} options={{ headerShown: false }} />
      <Stack.Screen name="ProfileEdit" component={EditProfile} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function SecurityStackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Security" component={Driver_Security} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 60 }
      }}
    >
      <Tab.Screen name="Homes" component={HomeStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileStackScreens} options={{ headerShown: false }} />
      <Tab.Screen name="Security" component={SecurityStackScreens} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
