import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { View, StyleSheet } from "react-native";
import DriverProfile from "../screens/Driver_Profile";
import EditProfile from "../screens/EditDriverProfile";
import Driver_Security from "../screens/Security_Driver";
import HomeIcon from "../components/HomeTabIcon";
import SecurityIcon from "../components/SecurityTabIcon";
import ProfileIcon from "../components/ProfileTabIcon";
import HomeD from '../screens/HomeScreenDisp';
import ProfileD from '../screens/DispatcherProfile';
import SecurityD from '../screens/SecurityDispecerat';
import Edit_Profile_D from '../screens/EditProfile_Disp';
import ListDrivers from '../screens/ListOfDrivers';
import SendRoute from '../screens/SendRoute';
import SeeUpdates from '../screens/SeeUpdates';
import SettingsDispatcher from '../screens/SettingsDisp';
import NotificationD from '../screens/NotificationsDisp';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeD}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListOfDrivers"
        component={ListDrivers}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SendRoute"
        component={SendRoute}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SeeUpdates"
        component={SeeUpdates}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingsDisp"
        component={SettingsDispatcher}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationD}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function ProfileStackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileD}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileEditD"
        component={Edit_Profile_D}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function SecurityStackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Security"
        component={SecurityD}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationD}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingsS"
        component={SettingsDispatcher}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function Tab_Navigation_Disp() {
  return (
    <Tab.Navigator
      initialRouteName="Homes"
      tabBarOptions={{
        showLabel: false,
       // Apply the custom style to the tab bar container
      }} 
      tabBarStyle={{ backgroundColor: "#D9D9D9" }}

    >
      <Tab.Screen
        name="Security"
        component={SecurityStackScreens}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SecurityIcon
              name="Home"
              size={size}
              color={color}
              alignItems={"center"}
              top={"10%"}
              left={"32%"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Homes"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon
              name="Home"
              size={size}
              color={color}
              alignItems={"center"}
              top={"10%"}
              left={"32%"}
            />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStackScreens}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon
              name="Profile"
              size={size}
              color={color}
              alignItems={"center"}
              top={"10%"}
              left={"32%"}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    backgroundColor: "#D9D9D9", // Adjust the background color as needed
    borderTopWidth: 1,
    borderTopColor: "#ccc", // Adjust the border color as needed
    alignSelf: "center",
  },
});
