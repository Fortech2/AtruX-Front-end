import React, {useState, useEffect, useRef} from "react";
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
import NotificationsDriver from "../screens/Notification";
import SettingsDriver from "../screens/SettingsDriver";
import YourRoute from "../screens/SeeYourRoute"
import axios from "axios";
import { Audio } from 'expo-av';
import { io } from 'socket.io-client';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { NativeModules } from "react-native";
import * as Device from 'expo-device';

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
        component={NotificationsDriver}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileEditFromHome"
        component={EditDriverProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="YourRoutes"
        component={YourRoute}
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
        component={NotificationsDriver}
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

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  }),
});

async function schedulePushNotification() {
  // Your custom data goes here
  // const customData = alarmNotifications;
  

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "ALARM! 🚨",
      body: 'HUMAN DETECTED!',
      // Add your custom data here
      data: 'da',
    },
    trigger: { seconds: 2 },
  });
}


// async function schedulePushImageNotification() {
//   // Your custom data goes here
//   // const customData = alarmNotifications;
  

//   await Notifications.scheduleNotificationAsync({
//     content: {
//       title: "ALARM! 🚨",
//       body: 'NEW ROUTE!',
//       // Add your custom data here
//       data: 'da',
//     },
//     trigger: { seconds: 2 },
//   });
// }

export default function TabNavigation() {
  const [userData, setUserData] = useState(null);
  const [socket, setSocket] = useState(null);
  const [sound, setSound] = useState(null);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState([]);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    const loadSoundAndFetchUserData = async () => {
      try {
        const { sound: loadedSound } = await Audio.Sound.createAsync(
          require('../assets/mixkit-vintage-warning-alarm-990.wav')
        );
        setSound(loadedSound);
      } catch (error) {
        console.error('Error loading sound:', error);
      }
    };

    loadSoundAndFetchUserData();
  }, []);

  useEffect(() => {
    if (sound) {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://atrux.azurewebsites.net/user");
          const userData = response.data;
          setUserData(userData);

          const newSocket = io('wss://atrux.azurewebsites.net');
          newSocket.on('connect', () => {
            console.log('Connected to WebSocket server');

            if (userData && userData.email) {
              console.log(userData.email);
              newSocket.emit('subscribe', { driver_email: userData.email });
              console.log(`Joining room: ${userData.email}`);
            }
          });

          newSocket.on('notification-sent', () => {
            handleNotificationSent(sound);
            schedulePushNotification();
          });
          newSocket.on('image-notification-sent', () => {
            // Update the individual message
            console.log('Received image as alarm');
            handleNotificationSent(sound);
         });
          setSocket(newSocket);

          
          // Register for push notifications here 
          registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
         
          // notificationListener.current = Notifications.addNotificationReceivedListener(() => {
          //   setNotification(notification);
          // });
          // responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          //   console.log("response: ", response);
          // });

        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchData();

      // return () => {
      //   Notifications.removeNotificationSubscription(notificationListener.current);
      //   Notifications.removeNotificationSubscription(responseListener.current);
      // };

    }
  }, [sound]);

  const handleNotificationSent = async (sound) => {
    console.log('Received notifications event:');
    if (sound) {
      await sound.replayAsync();
    }
    // schedulePushNotification();
  };

  // Function to register for push notifications
  

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

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    token = (await Notifications.getExpoPushTokenAsync({ projectId: Constants.expoConfig.extra.eas.projectId })).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
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
