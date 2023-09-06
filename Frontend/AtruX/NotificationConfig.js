import * as Notifications from 'expo-notifications';

export const registerForPushNotificationsAsync = async () => {
  try {
    const { status } = await Notifications.getPermissionsAsync();
    let finalStatus = status;

    if (status !== 'granted') {
      const { status: askStatus } = await Notifications.requestPermissionsAsync();
      finalStatus = askStatus;
    }

    if (finalStatus !== 'granted') {
      // Handle permission not granted
      return;
    }

    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('Expo Push Token:', token);
  } catch (error) {
    console.error('Error registering for push notifications:', error);
  }
};