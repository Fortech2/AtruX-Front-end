import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Pressable, ScrollView } from 'react-native';
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
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next"; // for the translation
import { BlurView } from 'expo-blur'
import axios from "axios";
import call from 'react-native-phone-call';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const [montserratLoaded] = useMontserrat({
    // load any font variation in here
    Montserrat_100Thin,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [userData, setUserData] = useState(null);
  const link = 'https://atrux-prod.azurewebsites.net'
  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${link}/user`);
      const userData = response.data;
      setUserData(userData); // Update the state with fetched user data
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleOpenModal = () => {
    setModalVisible(true);
  };
  
  const handleCloseModal = () => {
    setModalVisible(false);
  };
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
    const args = {
      number: userData.dispatcher_phone_number,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
    console.log("Calling the dispatcher...");
  };

  const seeRoute = () => {
    // Function for "See your route" button
    
    navigation.navigate('YourRoutes')
  };

  const securitySystem = () => {
    // Function for "Security system" button
    navigation.navigate('YourSecuritySystem');
  };

  const emergencyCall = () => {
    const args2 = {
      number: '999999999',
      prompt: true,
    };
    // Make a call
    call(args2).catch(console.error);

    console.log("Initiating emergency call...");
  };

  const yourAssistant = () => {
    // Function for "Your assistant" button
    navigation.navigate('YourAssistant');
  };
  const handleNotif = () => {

    // now we will navigate to the HomeScreen
    // but we need to navigate to the the EditDriverProfile

    navigation.navigate('Notifications');
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <View style={styles.container}>
      <View style = {styles.background}>
        <ShapeHomescreen/>
        <ShapeHomeScreen2 style = {{top: '-50%', left: '0%'}}/>
        <ShapeHomeScreen3 style = {{top: '-140%', left: '78%',}}/>
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
      <View style={styles.welcomeContainer}>
            <Text style={styles.salutText}>{t('welcome')}</Text>
            {userData ? (
            <Text style={styles.salutText}>{userData.name}</Text>
            ) : (
              <Text>Loading...</Text>
              )}
          </View>
      <ScrollView style={{ top:'15%'}}>
        <View style = {{ height: 900, top:'-10%', alignContent:'center', alignItems:'center'}}>
            {/* textul cu marius */}
         

          <View style = {styles.grey_rectangle}>
            <View style={styles.mesajInspirational}>
              <Text style = {styles.InspirationalText}>{t('remember')}</Text>
              <Text style = {styles.InspirationalText}>  {t('take')}</Text>
              <Text style = {styles.InspirationalText}>      {t('yourself')}</Text>
            </View>

              {/* Butoanele rotunde 3 */}
            <TouchableOpacity  style={styles.roundButtons2} onPress={roundDispatcher}></TouchableOpacity>
            <TouchableOpacity  style={styles.roundButtons2} onPress={roundRoute}></TouchableOpacity>
            <TouchableOpacity  style={styles.roundButtons2} onPress={roundSystem}></TouchableOpacity>

              {/* Butoanele pentru functii */}
            <TouchableOpacity style={styles.ButoaneDreptunghiulare} onPress={callDispatcher}>
              <Text style={styles.textButoaneDreptunghiulare}>{t('call_dispatcher')}</Text>
              <TelefonMic style = {{top: '-30%', zIndex: 1, left: '86%'}}/>
            {/* </View>   */}
            </TouchableOpacity>

            <TouchableOpacity style={styles.ButoaneDreptunghiulare} onPress={seeRoute}>
              <Text style={styles.textButoaneDreptunghiulare}>{t('see_route')}</Text>
              <Harta style = {{top: '-28%', zIndex: 1, left: '84.5%'}}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ButoaneDreptunghiulare} onPress={securitySystem}>
              <Text style={styles.textButoaneDreptunghiulare}>{t('security')} {t('system')}</Text>
              <Politist style = {{top: '-32%', zIndex: 1, left: '85.5%'}}/>
            </TouchableOpacity>
          </View>

            {/* Butoane Rotunde de Jos */}
          <View style={styles.roundButtonsContainer}>
            <TouchableOpacity  style={styles.ButoaneAlbe2} onPress={emergencyCall}></TouchableOpacity>
            <TouchableOpacity style={styles.emergencyButton} onPress={emergencyCall}>
              <Text style={styles.textButoaneRotunde}>{t('emergency')}</Text>
              <Text style={styles.textButoaneRotunde}>{t('call')}</Text>
              <Telefon style = {{top: '-31.5%', zIndex: 1, left: '2%'}}/>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.ButoaneAlbe} onPress={yourAssistant}></TouchableOpacity>
            <TouchableOpacity style={styles.AssistantButton} onPress={yourAssistant}>
              <Text style={styles.textButoaneRotunde}>{t('your')}</Text>
              <Text style={styles.textButoaneRotunde}>{t('assistant')}</Text>
              <Assistant style = {{top: '-32%', zIndex: 1, left: '-2%',}}/>
            </TouchableOpacity>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  welcomeContainer: {
    position: 'absolute',
    top: '6%',
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
    height: 344,
    borderRadius: 40,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    top: '35%',
    zIndex: 1,
  },
  ButoaneAlbe: {
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    right: '125%',
    marginTop: '0%',
    top: '77%',
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
    top: '77%',
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
    top: '75%',
    zIndex: 1,
    elevation: 15
  },
  AssistantButton: {
    width: 85,
    height: 85,
    borderRadius: 60,
    backgroundColor: '#101F41',
    justifyContent: 'center',
    alignItems: 'center',
    right: '218%',
    zIndex: 1,
    marginTop: '0%',
    top: '75%',
    elevation: 15,
  },  

  roundButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: '-27%',
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
  top: '11.5%',
  right: '-35%',
  // zIndex: 1,
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
  // width: "70%",
  // height: "40%",
  borderRadius: 40,
  padding: 1,
  width: 311,
  height: 347,
  // backgroundColor: "#D9D9D9"
  // backgroundColor: "#B6B6B6"
  backgroundColor: "#999999",
  
},
exitButton: {
  width: "12%",
  height: "10%",
  padding: 1,
  // backgroundColor: "#F38D68",
  borderWidth: 1,
  top: "4%",
  left: "85%",
  position: "absolute",
  borderColor: "#B6B6B6",
},
ellipseWrapper1: {
  // backgroundColor: "#45b871",
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
  // width: "70%",
  // height: "40%",
  borderRadius: 40,
  padding: 1,
  width: 311,
  height: 347,
  // backgroundColor: "#D9D9D9"
  // backgroundColor: "#B6B6B6"
  backgroundColor: "#999999",
  top:'-5%',
  left:'-20%'
},
ellipseWrapper2: {
  // backgroundColor: "#45b871",
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
  // backgroundColor: "#45b871",
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

});

export default HomeScreen;