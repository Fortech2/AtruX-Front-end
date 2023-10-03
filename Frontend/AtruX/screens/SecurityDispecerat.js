import React, { useState, useEffect } from 'react'
import { StatusBar } from "expo-status-bar";
import Svg, { G, Circle, Defs, Path } from "react-native-svg";
import WrittenLogo from "../components/writtenLogo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Switch,
  SafeAreaView,
  Pressable
} from "react-native";

import {
  useFonts as useMontserrat,
  Montserrat_100Thin,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import EllipseUpperLeftCorner from "../components/EllipseUpperLeftCorner"
import CircleSecurity from "../components/CircleSecurity"
import MenuIcon from "../components/MenuIcon"
import NotificationIcon from "../components/NotificationIcon"
import Back from "../components/Back"
import SecurityIcon from "../components/SecurityIcon"
import { useTranslation } from "react-i18next"; // for the translation
import i18next, { languageResources } from "../services/i18next"; // for the translation
import languageList from "../locales/languageList.json"; // for the translation
import { changeLanguage } from "i18next"; // for the translation
import { useNavigation } from "@react-navigation/native"; //
import { useRoute } from '@react-navigation/native';
import { Dropdown } from "react-native-material-dropdown-v2-fixed";
import Arrow from "../components/arrow_language";
import { useHistory } from "react-router-dom";
import EllipseLeftSecurityDispatcher from '../components/EllipseLeftSecurityDispatcher'
import Ellipse2SecurityDisp from '../components/Ellipse2SecurityDisp'
import Modal from "react-native-modal";
import Linii from '../components/Linii';
import SettingsIcon from '../components/SettingsIcon';
import KeyWordsIcon from '../components/KeyWordsIcon';
import ExitIcon from '../components/ExitIcon';
import NotifIconMenu from '../components/NotifIconMenu'
import EllipseMenuHS1 from '../components/EllipseMenuHS1';
import EllipseMenu2 from '../components/EllipseMenu2';
import EllipseSettings from '../components/EllipseSettings'
import VectorMenu from '../components/VectorMenu';
import { BlurView } from 'expo-blur'

export default function SecurityD() {

  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [montserratLoaded] = useMontserrat({
    // load any font variation in here
    Montserrat_100Thin,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
  });

  const handleSeePastAlarms = () => {
    navigation.navigate('PastAlarms')
  };

  const handleAlarmsHistory = () => {
    // here we need to take the last 3 alarms notifications and to put them in the 2nd container
  };

  const handleNotif = () => {
    navigation.navigate('Notifications');
  };

  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };
  
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const link = 'https://atrux-prod.azurewebsites.net';
  const [alarmNotifications, setAlarmNotifications] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_BACKEND_URL' with your actual backend URL
    axios.get(`${link}/alarm_notification`)
      .then((response) => {
        setAlarmNotifications(response.data.alarm_notification);
      })
      .catch((error) => {
        console.error('Error fetching alarm notifications:', error);
      });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: "#E9EBEE"}}>
      <View style = {styles.background}>
        <EllipseLeftSecurityDispatcher/>
        <Ellipse2SecurityDisp style={{ top: "-80%", left: "0%" }}/>
        <EllipseSettings style={{ top: "-140%", left: "40%" }} />
      </View>

   
        <View style={{ height: 900 }}>
           <View style={{top: "10%", left: "5%", position: "absolute"}}>
            <SecurityIcon style={{left: "-5%", top: "-25%"}}/>
            <Text style={styles.securityText}>
              {t("security")}
            </Text>
            <Text style={styles.systemText}>
              {t("system")}
            </Text>
          </View>

          <View style={styles.contour}>
            <Text style={styles.cameraSystemText}>
              {t('camera_system')}
            </Text>

            <View style={styles.recentAlarmsView}>
              <Text style={styles.recentAlarmsText}>
                {t('recent_alarms')}
              </Text>
            </View> 
          <View>
            <ScrollView style={{maxHeight:300, top:35}}>
              <View style={{height:1000}}>
              {alarmNotifications.map((notification, index) => (
          <View key={index}>
            <Text style={{fontFamily:'Montserrat_500Medium', fontSize:20, color:'#101F41', left: '0%'}}>Driver: {notification.driver_name}</Text>
            <Text style={{fontFamily:'Montserrat_500Medium', fontSize:20, color:'#101F41', left: '0%'}}>Date: {notification.date}</Text>
            <Image
              source={{ uri: `data:image/jpeg;base64,${notification.binary_data}` }}
              style={{ width: 200, height: 200 }}
            />
          </View>
        ))}
              </View>
            </ScrollView>
          </View>
          {/* <View style={styles.inputView}>
            <Text style={styles.inputText}>
              
            </Text>
          </View>

          <View style={styles.inputView}>
            <Text style={styles.inputText}>
              
            </Text>
          </View>

          <View style={styles.inputView}>
            <Text style={styles.inputText}>
              
            </Text>
          </View> */}

            <TouchableOpacity 
              style={styles.pastAlarmsBtn}
              onPress={handleSeePastAlarms}
            >
              <Text style={styles.pastAlarmsText}>
                {t("past_alarms")}
              </Text>
            </TouchableOpacity>          

          </View>       
        </View>
     

      <TouchableOpacity style={styles.notificationButton} onPress={handleNotif}>
        <NotificationIcon style={{left: "10%", top: "3%"}}/>
      </TouchableOpacity>

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
                  navigation.navigate("SettingsS");
                  handleCloseModal();
                  // Add navigation logic here
                }}
              >
                <SettingsIcon style={{ top: "8%", left: "5%" }} />
                <Text style={styles.inputTextMenu}>{t("settings")}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.containerInputModal}>
                <KeyWordsIcon style={{ top: "8%", left: "5%" }} />
                <Text style={styles.inputTextMenu}>{t("keywords")}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.containerInputModal}
                onPress={() => {
                  navigation.navigate("Notifications");
                  handleCloseModal();
                  // Add navigation logic here
                }}
              >
                <NotifIconMenu style={{ top: "20%", left: "5%" }} />
                <Text style={styles.inputTextMenu}>{t("notifications")}</Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </Modal>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: "#E9EBEE",
    },
    contour: {
      backgroundColor: "#d9d9d9",
      shadowColor: "#000",
      shadowOffset: { width: 3, height: 5 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      height: 523,
      width: 320,
      marginLeft: 5,
      alignItems: "center",
      alignSelf: "center",
      borderRadius: 40,
      elevation: 10, //only android
      position: "absolute",
      zIndex: 1,
      opacity: 1,
      top: "20%"
    },
    pastAlarmsBtn: {
      width: 255,
      borderRadius: 40,
      height: 54,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#101F41",
      left: "10%",
      top: "85%",
      elevation: 10, //only android
      position: "absolute",
    },
    ellipseWrapper: {
      // backgroundColor: "#45b871",
      width: 280,
      height: 210,
      marginTop: -120,
      marginBottom: 624,
      marginLeft: 0,
      marginRight: 250,
      top: "7%",
      borderWidth: 0, // Border set to 0
    },
    ellipseTitle: {
      // backgroundColor: "#45b871",
      width: 150,
      height: 194,
      marginTop: -120,
      marginBottom: 624,
      marginLeft: 0,
      marginRight: 250,
      top: "-31%",
      borderWidth: 0, // Border set to 0
    },
    menuButton: {
      width: "13%",
      height: "5%",
      padding: 1,
      // backgroundColor: "#F38D68",
      borderWidth: 1,
      top: "5%",
      left: "83%",
      position: "absolute",
      borderColor: "rgba(158, 150, 150, 0)", // makes the color transparent
    },
    notificationButton: {
      width: "13%",
      height: "6%",
      padding: 1,
      // backgroundColor: "#8A89C0",
      borderWidth: 1,
      top: "10%",
      left: "82%",
      position: "absolute",
      borderColor: "rgba(158, 150, 150, 0)", // makes the color transparent
    },
    circleRightWrapper: {
      // backgroundColor: "#45b871",
      width: 170,
      height: 330,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 250,
      marginRight: 0,
      top: "45%",
      borderWidth: 0, // Border set to 0
      position: "absolute"
    },
    ellipseRightWrapper: {
      backgroundColor: "#F7A072",
      width: 377,
      height: 290,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 110,
      marginRight: 0,
      top: "30%",
      borderWidth: 0, // Border set to 0
      position: "absolute",
      transform: [{ rotate: '4.673deg' }]
    },
    recentAlarmsView: {
      borderRadius: 25,
      width: 294,
      height: 46,
      marginBottom: 20,
      alignItems: "center",
      padding: 1,
      borderColor: "#101F41",
      backgroundColor: "#101F41",
      borderWidth: 1,
      top: "8%",
      alignContent: "center",
    },
    inputView: {
      borderRadius: 25,
      width: "100%",
      height: "15%",
      marginBottom: 10,
      alignItems: "center",
      padding: 1,
      // borderColor: "#101F41",
      borderColor: '#d9d9d9',
      borderWidth: 1,
      top: "4%",
      alignContent: "center",
    },
    inputText: {
      fontFamily: 'Montserrat_500Medium',
      fontSize: 18,
      color: "#101F41",
      top: "20%"
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
    modalContainer: {
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      backgroundColor: "rgba(0,0,0,0.3)",
      top: "-2%",
      left: "-20%",
      borderRadius: 40,
      padding: 1,
      width: 311,
      height: 347,
      backgroundColor: "#999999",
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
      top: "-8%"
    },
    inputTextMenu: {
      fontFamily: 'Montserrat_500Medium',
      fontSize: 28,
      color: "#F8F8F8",
      top: "-90%",
      left: "5%"
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
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
    },
    securityText: {
      fontFamily:'Montserrat_600SemiBold',
      fontSize:30,
      color:'white',
      top:'-155%',
      left: '25%',
      zIndex: 1,
    },
    systemText: {
      fontFamily:'Montserrat_600SemiBold',
      fontSize:30,
      color:'white',
      top:'-155%',
      left: '35%',
      zIndex: 1
    },
    cameraSystemText: {
      fontFamily:'Montserrat_500Medium',
      fontSize:30,
      color:'#101F41',
      top:'5%',
      left: '0%',
      textShadowColor: "rgba(0, 0, 0, 0.15)",
      textShadowOffset: { width: 3, height: 1 },
      textShadowRadius: 4,
    },
    recentAlarmsText: {
      fontFamily: 'Montserrat_500Medium',
      fontSize: 22,
      color: "#FFFFFF",
      top: "15%",
      left: "-10%",
      textShadowColor: "rgba(0, 0, 0, 0.10)",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 4,      
    },
    pastAlarmsText: {
      fontFamily: "Montserrat_500Medium",
      fontSize: 22,
      color: "#FFFF",
      top: "0%",
      left: "0%",
      textShadowColor: "rgba(0, 0, 0, 0.10)",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 4,   
    },
  });