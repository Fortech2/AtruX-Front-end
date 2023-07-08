import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LogIn from './screens/LogIn';
import HomeScreen from './screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{
            headerShown: false
        }}
          
        />
        <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{
          headerShown: false
      }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;