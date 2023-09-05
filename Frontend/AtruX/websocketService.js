import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import CustomSound from './assets/mixkit-vintage-warning-alarm-990.wav';
const useWebSocket = (userData, setAllMessages, setAllMessagesA) => {
  const [socket, setSocket] = useState(null);
  const [isSocketInitialized, setIsSocketInitialized] = useState(false);

  useEffect(() => {
    const loadSoundAndInitializeSocket = async () => {
      let sound = null;

      // Load sound
      try {
        const { sound } = await Audio.Sound.createAsync(CustomSound);
        setSound(sound);
      } catch (error) {
        console.error('Error loading sound:', error);
        // Handle the error here, e.g., show an error message to the user
      }

      // Initialize WebSocket and handle notifications
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
      });

      // Other event handlers can be added here

      setSocket(newSocket);
      setIsSocketInitialized(true);
    };

    loadSoundAndInitializeSocket();

    // Clean up the sound and socket when the component unmounts
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
      if (socket) {
        socket.disconnect();
      }
    };
  }, [userData, setAllMessages, setAllMessagesA]);

  // Use socket only when it's initialized
  if (!isSocketInitialized) {
    return null;
  }

  return socket;
};

export default useWebSocket;