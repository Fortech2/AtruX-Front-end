import React from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function HomeScreen() {
  const route = useRoute();
  const { username } = route.params;
  console.log("Username:", username); // Add this log

  return (
    <View>
      <Text>Welcome!</Text>
      {/* ... other components and content ... */}
    </View>
  );
}




