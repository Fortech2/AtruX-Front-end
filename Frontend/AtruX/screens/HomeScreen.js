import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  useFonts as useMontserrat,
  Montserrat_100Thin,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";

function HomeScreen() {
  const callDispatcher = () => {
    // Function for "Call the dispatcher" button
    // Implement your logic here
    console.log("Calling the dispatcher...");
  };

  const seeRoute = () => {
    // Function for "See your route" button
    // Implement your logic here
    console.log("Seeing your route...");
  };

  const securitySystem = () => {
    // Function for "Security system" button
    // Implement your logic here
    console.log("Accessing the security system...");
  };

  const emergencyCall = () => {
    // Function for "Emergency call" button
    // Implement your logic here
    console.log("Initiating emergency call...");
  };

  const yourAssistant = () => {
    // Function for "Your assistant" button
    // Implement your logic here
    console.log("Accessing your assistant...");
  };

  return (
    <View style={styles.container}>
      {/* textul cu marius */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.salutText}>Welcome,</Text>
        <Text style={styles.salutText}>  Marius!</Text>
      </View>

      {/* Butoanele pentru functii */}
      <TouchableOpacity style={styles.roundedButton} onPress={callDispatcher}>
        <Text style={styles.buttonText}>Call the dispatcher</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.roundedButton} onPress={seeRoute}>
        <Text style={styles.buttonText}>See your route</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.roundedButton} onPress={securitySystem}>
        <Text style={styles.buttonText}>Security system</Text>
      </TouchableOpacity>

      {/* Butoane Rotunde de Jos */}
      <View style={styles.roundButtonsContainer}>
        <TouchableOpacity style={styles.emergencyButton} onPress={emergencyCall}>
          <Text style={styles.buttonText}>Emergency call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton} onPress={yourAssistant}>
          <Text style={styles.buttonText}>Your assistant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContainer: {
    position: 'absolute',
    top: 20,
    left: 25,
  },
  salutText: {
    color: '#101F41',
    fontSize: 24,
    fontFamily: 'Montserrat',
  },
  roundedButton: {
    width: 200,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#101F41',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  emergencyButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#CA0000',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  roundButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#101F41',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  roundButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Montserrat',
  },
});

export default HomeScreen;