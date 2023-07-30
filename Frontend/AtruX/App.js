import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab_Navigation from './Routes/Driver_TabNavigation';
import AuthNavigation from './Routes/Auth_Route';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthNavigation} />
        <Stack.Screen name="Tab_Navigation" component={Tab_Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;




