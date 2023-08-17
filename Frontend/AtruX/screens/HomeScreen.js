import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  useFonts as useMontserrat,
  Montserrat_100Thin,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import ShapeHomescreen from '../components/shapeHomeScreen';
import ShapeHomeScreen2 from '../components/shapeHomeScreen2';
import ShapeHomeScreen3 from '../components/shapeHomeScreen3';
import Linii from '../components/Linii';
import Assistant from '../components/Assistant';
import Telefon from '../components/telefon';
import TelefonMic from '../components/TelefonMic';
import Harta from '../components/harta';
import Politist from '../components/politist';

const HomeScreen = () => {
  const roundDispatcher = () => {
    // Function for "Call the dispatcher" button
    console.log("Calling the dispatcher...");
  }

    const roundRoute = () => {
      // Function for "See your route" button
      console.log("Seeing your route...");
    }

      const roundSystem = () => {
        // Function for "Security system" button
        console.log("Accessing the security system...");
      }

  const callDispatcher = () => {
    // Function for "Call the dispatcher" button
    console.log("Calling the dispatcher...");
  };

  const seeRoute = () => {
    // Function for "See your route" button
    console.log("Seeing your route...");
  };

  const securitySystem = () => {
    // Function for "Security system" button
    console.log("Accessing the settings...");
  };

  const emergencyCall = () => {
    // Function for "Emergency call" button
    console.log("Initiating emergency call...");
  };

  const yourAssistant = () => {
    // Function for "Your assistant" button
    console.log("Accessing your assistant...");
  };
  const navigation = useNavigation(); // for the navigation
  const handleNotif = () => {

    // now we will navigate to the HomeScreen
    // but we need to navigate to the the EditDriverProfile

    navigation.navigate('Notifications');
  };
  return (
    
    <View style={styles.container}>
      {/* textul cu marius */}
      <View style = {{top: '60%'}}>

      <View style={styles.welcomeContainer}>
        <Text style={styles.salutText}>Welcome,</Text>
        <Text style={styles.salutText}>  Marius!</Text>
      </View>

<View style = {styles.grey_rectangle}>

<View style={styles.mesajInspirational}>
    <Text style = {styles.InspirationalText}>Remember to</Text>
    <Text style = {styles.InspirationalText}>  take care of</Text>
    <Text style = {styles.InspirationalText}>      yourself</Text>
  </View>

        {/* Butoanele rotunde 3 */}
        <TouchableOpacity  style={styles.roundButtons2} onPress={roundDispatcher}></TouchableOpacity>
      <TouchableOpacity  style={styles.roundButtons2} onPress={roundRoute}></TouchableOpacity>
      <TouchableOpacity  style={styles.roundButtons2} onPress={roundSystem}></TouchableOpacity>

      {/* Butoanele pentru functii */}
      <TouchableOpacity style={styles.ButoaneDreptunghiulare} onPress={handleNotif}> 
        <Text style={styles.textButoaneDreptunghiulare}>Call the dispatcher</Text>
        <TelefonMic style = {{top: '-30%', zIndex: 1, left: '86%'}}/>
      {/* </View>   */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButoaneDreptunghiulare} onPress={seeRoute}>
        <Text style={styles.textButoaneDreptunghiulare}>See your route</Text>
        <Harta style = {{top: '-28%', zIndex: 1, left: '84.5%'}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButoaneDreptunghiulare} onPress={securitySystem}>
        <Text style={styles.textButoaneDreptunghiulare}>Settings</Text>
        <Politist style = {{top: '-32%', zIndex: 1, left: '85.5%'}}/>
      </TouchableOpacity>

</View>
      {/* Butoane Rotunde de Jos */}
      <View style={styles.roundButtonsContainer}>
      <TouchableOpacity  style={styles.ButoaneAlbe2} onPress={emergencyCall}></TouchableOpacity>
        <TouchableOpacity style={styles.emergencyButton} onPress={emergencyCall}>
          <Text style={styles.textButoaneRotunde}>Emergency</Text>
          <Text style={styles.textButoaneRotunde}>call</Text>
          <Telefon style = {{top: '-31.5%', zIndex: 1, left: '2%'}}/>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.ButoaneAlbe} onPress={yourAssistant}></TouchableOpacity>
        <TouchableOpacity style={styles.AssistantButton} onPress={yourAssistant}>
          <Text style={styles.textButoaneRotunde}>Your</Text>
          <Text style={styles.textButoaneRotunde}>assistant</Text>
          <Assistant style = {{top: '-32%', zIndex: 1, left: '-2%',}}/>
        </TouchableOpacity>
      </View>
      </View>
      <ShapeHomescreen style = {{top: '48%'}}/>
      <ShapeHomeScreen2 style = {{top: '-5%', left: '0%'}}/>
      <ShapeHomeScreen3 style = {{top: '-83.5%', left: '35%',}}/>
      <Linii style = {{top: '-179%', left: '40%', zIndex: 1,}}/>
    </View>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcomeContainer: {
    position: 'absolute',
    top: '87%',
    left: '5%',
  },
  salutText: {
    color: '#FFFFFF',
    fontSize: 35,
    fontFamily: 'Montserrat_600SemiBold',
    zIndex: 1
  },
  mesajInspirational:{
    position: 'absolute',
    top: '-52%',
    left: '10%',
  },
  InspirationalText:{
    color: '#101F41',
    fontSize: 35,
    fontFamily: 'Montserrat_600SemiBold',
    zIndex: 1
  },
  ButoaneDreptunghiulare: {
    width: 284,
    height: 57,
    borderRadius: 40,
    borderColor: '#101F41',
    borderWidth: 2,
    justifyContent: 'center',
    marginVertical: 5,
    top: '-47%',
  },
  grey_rectangle: {
    color: '#FFFFFF',
    width: 320,
    height: 324,
    borderRadius: 40,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    top: '192%',
    zIndex: 1,
  },
  ButoaneAlbe: {
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    right: '140%',
    marginTop: '0%',
    top: '163.5%',
    zIndex: 1,
    elevation: 15,
  },

  ButoaneAlbe2: {
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    right: '-225%',
    marginTop: '0%',
    top: '163.5%',
    zIndex: 1,
    elevation: 15,
  },

  emergencyButton: {
    width: 85,
    height: 85,
    borderRadius: 60,
    backgroundColor: '#CA0000',
    justifyContent: 'center',
    alignItems: 'center',
    left: '132.5%',
    top: '161.3%',
    zIndex: 1,
    elevation: 15,
  },
  AssistantButton: {
    width: 85,
    height: 85,
    borderRadius: 60,
    backgroundColor: '#101F41',
    justifyContent: 'center',
    alignItems: 'center',
    right: '232%',
    zIndex: 1,
    marginTop: '0%',
    top: '161.3%',
    elevation: 15,
  },  

  roundButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: '-28%',
  },
  textButoaneDreptunghiulare: {
    color: '#101F41',
    fontSize: 22,
    fontFamily: 'Montserrat_500Medium',
    left: 20,
    marginTop: 'center',
    left: '4%',
    top: 15,
    textShadowColor: "#B3B3B3",
                textShadowOffset: { width: 4, height: 3 },
                textShadowRadius: 4,
  },
  textButoaneRotunde: {
    color: '#FFFFFF',
    fontSize: 9,
    fontFamily: 'Montserrat_600SemiBold',
    top: '47%',
},
roundButtons2: {
  width: 47,
  height: 47,
  borderRadius: 40,
  backgroundColor: '#101F41',
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 10,
  top: '15%',
  right: '-35%',
  // zIndex: 1,
},

});

export default HomeScreen;