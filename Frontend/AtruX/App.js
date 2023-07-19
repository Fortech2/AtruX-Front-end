import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LogIn from './screens/LogIn';
import HomeScreen from './screens/HomeScreen';
import ForgotPassword from './screens/ForgotPassword';
import SignUp from './screens/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SignUp_D from './screens/SignUp_Dispecerat';
// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/login" component={LogIn} />
//         <Route exact path="/signup" component={SignUp} />
//         <Route exact path="/forgotpassword" component={ForgotPassword} />
//         <PrivateRoute exact path="/home" component={HomeScreen} />
//         <Route path="*" render={() => <Redirect to="/login" />} />
//       </Switch>
//     </Router>
//   );
// };


// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const isLoggedIn = !!localStorage.getItem('logged_in'); 
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

// export default App;

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
      <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false
        }}
          
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false
        }}
          
        />
         <Stack.Screen
          name="SignUp_D"
          component={SignUp_D}
          options={{
            headerShown: false
        }}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;