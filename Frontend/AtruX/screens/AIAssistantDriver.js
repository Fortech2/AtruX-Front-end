import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Pressable, ScrollView, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
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
import ExitIcon from '../components/ExitIcon';
import EllipseMenuHS1 from '../components/EllipseMenuHS1';
import EllipseMenu2 from '../components/EllipseMenu2';
import VectorMenu from '../components/VectorMenu';
import SettingsIcon from '../components/SettingsIcon';
import KeyWordsIcon from '../components/KeyWordsIcon';
import Modal from "react-native-modal";
import NotifIconMenu from '../components/NotifIconMenu'
import EllipseSettings from '../components/EllipseSettings'
import CircleSettings from '../components/CircleSettings'
import EllipseCenterAi from '../components/EllipseCenterAi'
import Circle2Assistant from '../components/Circle2Assistant'
import SmallCircle4Assistant from '../components/SmallCircle4Assistant'
import Circle3Assistant from '../components/Circle3Assistant'
import AssistantBigSvg from '../components/AssistantBigSvg'
import GreyCenterEllipse from '../components/GreyCenterEllipseAI'
import Circle1Assistant from '../components/Circle1Assistant'
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next"; // for the translation
import { BlurView } from 'expo-blur'
import axios from "axios";
import * as Speech from 'expo-speech';
 // You'll need to install and configure a voice recognition library

const AIAssistant_Driver = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const [stops, setUserRoute] = useState([]);
  const link = 'https://atrux-prod.azurewebsites.net'
  useEffect(() => {
    // Make an API call to get user data
    axios.get(`${link}/user`, { withCredentials: true })
      .then(response => {
        const StopForUser = response.data.route;
        const stopsArray = StopForUser.slice(1, -1).split(',');

        // Set the state with the array of stops
        setUserRoute(stopsArray);
        console.log(stopsArray);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };
  
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const speak = () => {
    // Join the stops array into a single string with spaces
    const stopsToSpeak = stops.join(' ');

  // Function to speak each stop in sequence with a delay
  const speakStopAtIndex = (index) => {
    if (index < stops.length) {
      // Speak the stop at the current index
      Speech.speak(stops[index]);

      // Schedule the next stop to be spoken with a delay
      setTimeout(() => {
        speakStopAtIndex(index + 1);
      }, 2000); // 3000 milliseconds = 3 seconds
    }
  };

  // Start speaking with the first stop
  speakStopAtIndex(0);
};



  return (
    <View style={styles.container}>
      <View style = {styles.background}>
        <ShapeHomescreen/>
        <EllipseSettings style={{ top: "-23%", left: "35%" }}/>
        <CircleSettings style={{ top: "-165%", left: "0%" }}/>
        
        {/* <GreyCenterEllipse style={{ top: "-260%", left: "20%" }} /> */}
        {/*<AssistantBigSvg style = {{top: '-458.5%', zIndex: 1, left: '50%'}}/>
         
       */}
      </View>

      <TouchableOpacity style = {styles.menuButton} onPress={handleOpenModal}>
        <Linii style = {{zIndex: 1}}/>
      </TouchableOpacity>

      <SafeAreaView style={{ top: "-183%", left: "38%", zIndex: 1, flex: 1 }}>
        <Modal
          visible={modalVisible}
          animationType="fade"
          transparent={true}
          onRequestClose={handleCloseModal}
        >
          <BlurView intensity={20} style={styles.blurContainer}>
            <View style={styles.modalContainer}>
              <View style={styles.ellipseWrapper1}>
                <EllipseMenuHS1 style={{ top: "0%", left: "0%" }} />
              </View>

              <View style={styles.ellipseWrapper2}>
                <EllipseMenu2 style={{ top: "-1%", left: "0%" }} />
              </View>

              <View style={styles.vectorWrapper}>
                <VectorMenu style={{ top: "2%", left: "5%" }} />
              </View>
              <Pressable style={styles.exitButton} onPress={handleCloseModal}>
                <ExitIcon />
              </Pressable>
              <Text style={styles.menuText}>{t("menu")}</Text>

              <TouchableOpacity
                style={styles.containerInputModal}
                onPress={() => {
                  console.log("Navigating to Settings");
                  navigation.navigate("Settings");
                  handleCloseModal();
                  // Add navigation logic here
                }}
              >
                <SettingsIcon style={{ top: "8%", left: "5%" }} />
                <Text style={styles.inputText}>{t("settings")}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.containerInputModal}>
                <KeyWordsIcon style={{ top: "8%", left: "5%" }} />
                <Text style={styles.inputText}>{t("keywords")}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.containerInputModal}
                onPress={() => {
                  navigation.navigate("Notificationss");
                  handleCloseModal();
                  // Add navigation logic here
                }}
              >
                <NotifIconMenu style={{ top: "20%", left: "5%" }} />
                <Text style={styles.inputText}>{t("notifications")}</Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </Modal>
      </SafeAreaView>

      <View style={styles.titleContainer}>
        <Assistant style = {{top: '25%', zIndex: 1, left: '-2%',}}/>
        <Text style={styles.aiText}>{t('ai')}</Text>
        <Text style={styles.aiText}>{t('Assistant')}</Text>
      </View>

      <View style={styles.containerPressButton2}>
        <Text style={styles.textKeywords}>
          {t('wanna_find')}{" "}
        </Text>
        <Text style={styles.textKeywordsBlue}>
          {t('keyword')}{" "}
          <Text style={styles.textKeywords}>
            {t('different')}{" "}
          </Text>
        </Text>
        <Text style={styles.textKeywordsRed}>
          {t('functions')}
          <Text style={styles.textKeywords}>
              {", "}{t('access')}{" "}{t('menuAI')}
          </Text>
        </Text>
      </View>
      
      <ScrollView style={{ top:'10%'}}>
        <View style = {{ height: 900, top:'-10%', alignContent:'center', alignItems:'center'}}>
          <Circle1Assistant style = {{top: '10%', left: '60%'}}/>
          <Circle2Assistant style = {{top: '-85%', left: '70%'}}/>
          <Circle3Assistant style = {{top: '-185%', left: '82%'}}/>
          
          <GreyCenterEllipse style={{ top: "-280%", left: "20%" }}/>
          
          <Circle2Assistant style = {{top: '-360%', left: '20%'}}/>
          <Circle3Assistant style = {{top: '-455%', left: '30%'}}/>
          <SmallCircle4Assistant style = {{top: '-565%', left: '6%'}}/>
          
          <TouchableOpacity style={styles.containerStartAI} onPress={speak}>
        
  <EllipseCenterAi style={{ top: "5%", left: "3.5%", zIndex: 1 }}/>  
  <AssistantBigSvg style={{ top: "-100%", left: "20%", zIndex: 1 }}/>
</TouchableOpacity>

          <View style={styles.containerPressButton}>
            <Text style={styles.textPressButton}>
              {t('say')}{" "}
              <Text style={styles.textPressButton2}>
                {t('helloAtruX')}{" "}
                <Text style={styles.textPressButton}>
                  {t('or')}{" "}
                </Text>
              </Text>
            </Text>

            <Text style={styles.textPressButton}>
              {t('pressButton')}{" "}
              <Text style={styles.textPressButton}>
                {t('to')}{" "}
                <Text style={styles.textPressButton3}>
                  {t('start')}{" "}
                  <Text style={styles.textPressButton}>
                    {t('theAI')}{" "}
                  </Text>
                </Text>
              </Text>
            </Text>

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
  },

  titleContainer: {
    position: 'absolute',
    top: '6%',
    left: '5%',
  },
  aiText: {
    color: '#FFFFFF',
    fontSize: 35,
    fontFamily: 'Montserrat_600SemiBold',
    zIndex: 1,
    left: "33%",
    top: "-25%"
  },
  containerStartAI: {
    width: "65%",
    height: "28%",
    alignContent: "center",
    alignItems: "center",
    // backgroundColor: "#52AD9C",
    top: "-680%",
    left: "3%",
    borderRadius: 150
  },
menuButton: {
  padding: 16,
  borderRadius: 8,
  alignSelf: "center",
  top:'5%',
  zIndex:1,
  left:'40%'
},
modalContainer: {
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  backgroundColor: "rgba(0,0,0,0.3)",
  top: "20%",
  borderRadius: 40,
  padding: 1,
  width: 311,
  height: 347,
  backgroundColor: "#999999",
},
exitButton: {
  width: "12%",
  height: "10%",
  padding: 1,
  borderWidth: 1,
  top: "4%",
  left: "85%",
  position: "absolute",
  borderColor: "#B6B6B6",
},
ellipseWrapper1: {
  borderLeftWidth: 15,
  borderLeftColor: "#E9EBEE",
  width: 150,
  height: 300,
  marginTop: 10,
  marginBottom: 10,
  marginLeft: 0,
  marginRight: 0,
  top: "10%",
  left: "0%",
  borderWidth: 0, // Border set to 0
  position: "absolute",
  borderBottomLeftRadius: 35
},
blurContainer: {
  flex: 1,
justifyContent: "center",
alignItems: "center",
position: "absolute",
height:'200%',
width:'200%',
left:'-10%',
top:'-50%'

},
modalContainer: {
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  backgroundColor: "rgba(0,0,0,0.3)",
  top: "20%",
  borderRadius: 40,
  padding: 1,
  width: 311,
  height: 347,
  backgroundColor: "#999999",
  top:'-5%',
  left:'-20%'
},
ellipseWrapper2: {
  borderRightWidth: 40,
  borderRightColor: "#B6B6B6",
  width: 126,
  height: 190,
  marginTop: 10,
  marginBottom: 10,
  marginLeft: 0,
  marginRight: 0,
  top: "-3%",
  left: "60%",
  borderWidth: 0, // Border set to 0
  position: "absolute",
  borderTopRightRadius: 20
},
vectorWrapper: {
  width: 125,
  height: 200,
  marginTop: 10,
  marginBottom: 10,
  marginLeft: 0,
  marginRight: 0,
  top: "20%",
  left: "58%",
  borderWidth: 0, // Border set to 0
  position: "absolute",
},
menuText: {
  fontFamily: 'Montserrat_500Medium',
  fontSize: 30,
  color: "#101F41",
  top: "-10%"
},
containerInputModal: {
  borderRadius: 25,
  width: "82%",
  height: "15%",
  marginBottom: 20,
  alignItems: "center",
  padding: 1,
  borderColor: "#101F41",
  borderWidth: 1,
  top: "0%",
  alignContent: "center",
  backgroundColor: "#101F41"
},
inputText: {
  fontFamily: 'Montserrat_500Medium',
  fontSize: 28,
  color: "#F8F8F8",
  top: "-90%",
  left: "5%"
},
background: {
  position:'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
},
textPressButton: {
  color: '#101F41',
  fontSize: 15,
  fontFamily: 'Montserrat_500Medium',
  left: 20,
  marginTop: 'center',
  left: '4%',
  top: 15,
  textShadowColor: "#B3B3B3",
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 4,
},
containerPressButton: {
  width: "100%",
  height: "10%",
  alignContent: "center",
  alignItems: "center",
  // backgroundColor: "#52AD9C",
  top: "-680%",
  left: "0%",
  
},
containerPressButton2: {
  width: "60%",
  height: "10%",
  alignContent: "center",
  alignItems: "center",
  // backgroundColor: "#52AD9C",
  top: "80%",
  left: "50%",
},
textPressButton2: {
  color: '#73B3D3',
  fontSize: 15,
  fontFamily: 'Montserrat_500Medium',
  left: 20,
  marginTop: 'center',
  left: '4%',
  top: 15,
},
textPressButton3: {
  color: '#CA0000',
  fontSize: 15,
  fontFamily: 'Montserrat_500Medium',
  left: 20,
  marginTop: 'center',
  left: '4%',
  top: 15,
},
textKeywords: {
  color: '#FFFFFF',
  fontSize: 10,
  fontFamily: 'Montserrat_500Medium',
  left: 20,
  marginTop: 'center',
  left: '4%',
  top: 15,
},
textKeywordsBlue: {
  color: '#73B3D3',
  fontSize: 10,
  fontFamily: 'Montserrat_500Medium',
  left: 20,
  marginTop: 'center',
  left: '4%',
  top: 15,
},
textKeywordsRed: {
  color: '#CA0000',
  fontSize: 10,
  fontFamily: 'Montserrat_500Medium',
  left: 20,
  marginTop: 'center',
  left: '4%',
  top: 15,
},
});

export default AIAssistant_Driver;