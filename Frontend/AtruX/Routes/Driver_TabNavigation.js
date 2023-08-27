import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { View, StyleSheet } from "react-native";
import DriverProfile from "../screens/Driver_Profile";
import EditDriverProfile from "../screens/EditDriverProfile";
import Driver_Security from "../screens/Security_Driver";
import PastImages_Driver from "../screens/PastImages_Driver";
import HomeIcon from "../components/HomeTabIcon";
import SecurityIcon from "../components/SecurityTabIcon";
import ProfileIcon from "../components/ProfileTabIcon";
import Notification from "../screens/Notification";
import SettingsDriver from "../screens/SettingsDriver";
import YourRoute from "../screens/SeeYourRoute"
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Settings"
        component={SettingsDriver}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notificationss"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Stack.Screen

        name="YourRoutes"
        component={YourRoute}
options={{ headerShown: false }}
      />
 <Stack.Screen
        name="ProfileEditFromHome"
        component={EditDriverProfile}

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
        component={DriverProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileEdit"
        component={EditDriverProfile}
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
        component={Driver_Security}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PastImages"
        component={PastImages_Driver}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingsSecurity"
        component={SettingsDriver}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function TabNavigation() {
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
