import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
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
import { useNavigation } from "@react-navigation/native";
import Assistant from '../components/Assistant';
import Telefon from '../components/telefon';
import TelefonMic from '../components/TelefonMic';
import Harta from '../components/harta';
import Politist from '../components/politist';
import ShapeH from '../components/shapehomedisp';
import CircleShape from '../components/CircleShape';
import { t } from 'i18next';
import SendRoute from '../components/sendroute';
import ListDrivers from '../components/ListDrivers';

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
const sendRoute = () => {
  // Function for "See your route" button
  console.log("Seeing your route...");
};

const securitySystem = () => {
  // Function for "Security system" button
  console.log("Accessing the security system...");
};

const emergencyCall = () => {
  // Function for "Emergency call" button
  console.log("Initiating emergency call...");
};

const yourAssistant = () => {
  // Function for "Your assistant" button
  console.log("Accessing your assistant...");
};
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: '#E9EBEE', flex: 1 }}>
      <View style={styles.background}>
      <ShapeHomescreen />
     
      <ShapeH style = {{top: '-45%', left: '0%'}}/>
      <CircleShape style = {{top: '-153.5%', left: '60%',}}/>
      </View>
      <TouchableOpacity style={styles.back} >
        <Linii/>
     </TouchableOpacity>
      
    <ScrollView>
      <View style={{height:900}}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.salutText}>{t("hello_")}</Text>
        <Text style={styles.salutText}> Marius!</Text>
      </View>
      <View style={styles.mesajInspirational}>
    <Text style = {styles.InspirationalText}>{t("remeber")}</Text>
    <Text style = {styles.InspirationalText}>  {t("take")}</Text>
    <Text style = {styles.InspirationalText}>  {t("drivers")}!</Text>
  </View>
      <View style = {styles.grey_rectangle}>
      
      <TouchableOpacity  style={styles.roundButtons2} onPress={roundDispatcher}></TouchableOpacity>
      <TouchableOpacity  style={styles.roundButtons2} onPress={roundRoute}></TouchableOpacity>
      <TouchableOpacity  style={styles.roundButtons2} onPress={roundSystem}></TouchableOpacity>
      <TouchableOpacity style={styles.ButoaneDreptunghiulare} onPress={()=>navigation.navigate('SendRoute')}>
        <Text style={{ color: '#101F41',
    fontSize: 20,
    fontFamily: 'Montserrat_500Medium',
    left: 20,
    marginTop: 'center',
    left: '4%',
    top: '50%'}}>{t("send_route")}</Text>
        <SendRoute style = {{top: '0%', zIndex: 1, left: '85%'}}/>
      {/* </View>   */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButoaneDreptunghiulare} onPress={()=>navigation.navigate('SeeUpdates')}>
        <Text style={{ color: '#101F41',
    fontSize: 20,
    fontFamily: 'Montserrat_500Medium',
    left: 20,
    marginTop: 'center',
    left: '4%',
    top: '25%'}}>{t("see_updates")}</Text>
        <Harta style = {{top: '-28%', zIndex: 1, left: '84.5%'}}/>
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.ButoaneDreptunghiulare} onPress={()=>navigation.navigate('ListOfDrivers')}>
        <Text style={{ color: '#101F41',
    fontSize: 20,
    fontFamily: 'Montserrat_500Medium',
    left: 20,
    marginTop: 'center',
    left: '4%',
    top: '50%'}}>{t("list_of_drivers")}</Text>
        <ListDrivers style = {{top: '-4%', zIndex: 1, left: '84%'}}/>
      </TouchableOpacity>
      <View style={styles.roundButtonsContainer}>
      <TouchableOpacity  style={styles.ButoaneAlbe2} onPress={emergencyCall}></TouchableOpacity>
        <TouchableOpacity style={styles.emergencyButton} onPress={emergencyCall}>
          <Text style={styles.textButoaneRotunde}>Emergency</Text>
          <Text style={styles.textButoaneRotunde}>call</Text>
          <Telefon style = {{top: '-31.5%', zIndex: 1, left: '2%'}}/>
        </TouchableOpacity>
        
       
      </View>
        </View>
      </View>
    </ScrollView>
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
  back: {
    height: 40,
    width: 40,
    marginLeft: 5,
    borderRadius: 10,

    position: "absolute",
    zIndex: 1,
    opacity: 1,
    top: "5%",
    left: "80%",
    alignItems: "center",
  },
  welcomeContainer: {
    position: 'absolute',
    top: '7%',
    left: '5%',
  },
  salutText: {
    color: '#FFFFFF',
    fontSize: 35,
    fontFamily: 'Montserrat_500Medium',
    zIndex: 1
  },
  background: {
    position:'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  mesajInspirational:{
    position: 'absolute',
   top:'24%',
    left: '15%',
  },
  InspirationalText:{
    color: '#101F41',
    fontSize: 35,
    fontFamily: 'Montserrat_500Medium',
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
    top: '-30%',
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
    top: '45%',
    zIndex: 1,
    alignSelf:'center'
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
  },

  ButoaneAlbe2: {
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
   
    marginTop: '0%',
 
    
  },

  emergencyButton: {
    width: 85,
    height: 85,
    borderRadius: 60,
    backgroundColor: '#CA0000',
    justifyContent: 'center',
    alignItems: 'center',
    left:'-92%',
    top:'-2.5%'
  
  
  },
  
  roundButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
   top:'-30%',
   alignContent:'center',
   alignSelf:'center',
   left:'14%'
  },
  textButoaneDreptunghiulare: {
    color: '#101F41',
    fontSize: 20,
    fontFamily: 'Montserrat_500Medium',
    left: 20,
    marginTop: 'center',
    left: '4%',
    top: '16%'
  },
  textButoaneRotunde: {
    color: '#FFFFFF',
    fontSize: 9,
    fontFamily: 'Montserrat_500Medium',
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
  top: '32%',
  right: '-35%',
  // zIndex: 1,
},

});
export default HomeScreen;



