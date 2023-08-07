import React, { useState } from 'react'
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
  Modal, //
  FlatList, //
  SafeAreaView,
  Picker,
  TouchableHighlight,
  Switch
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
import PastImages_Driver from "../screens/PastImages_Driver"
// import { transparent } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';

export default function Driver_Security() {

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
  const handleSeePastImages = () => {
    navigation.navigate('PastImages')
  };

  const handleAlarmsHistory = () => {
    // here we need to take the last 3 alarms notifications and to put them in the 2nd container
  };

  const handleNotif = () => {
    navigation.navigate('Notifications');
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}> 
        <View style={styles.ellipseWrapper}>
          <EllipseUpperLeftCorner
            style={{
              position: "absolute",
              top: "5%",
            }}
          />
        </View>

        <View style={styles.circleRightWrapper}>
          <CircleSecurity
            style={{
              position: "absolute",
              top: "5%",
            }}
          />
        </View>

      {/* the message does not appear when I press the button */}
        <TouchableOpacity style={styles.menuButton} onPress={alert("menu")}>
          <MenuIcon style={{left: "10%", top: "10%"}}/>
        </TouchableOpacity>
      
      {/* the message does not appear when I press the button */}
        <TouchableOpacity style={styles.notificationButton} onPress={handleNotif}>
          <NotificationIcon style={{left: "10%", top: "3%"}}/>
        </TouchableOpacity>
      

        <View style={{top: "10%", left: "10%", position: "absolute"}}>
          <SecurityIcon style={{left: "-15%", top: "-25%"}}/>
          <Text style={{fontFamily:'Montserrat_600SemiBold', fontSize:30, color:'white', top:'-150%', left: '20%'}}>
              {t("security")}
          </Text>
          <Text style={{fontFamily:'Montserrat_600SemiBold', fontSize:30, color:'white', top:'-155%', left: '25%'}}>
              {t("system")}
          </Text>
        </View>

        <View style={styles.contour1}>
          <Text style={{fontFamily:'Montserrat_600SemiBold', fontSize:30, color:'#101F41', top:'12%', left: '0%'}}>
            {t('system_status')}
          </Text>

    {/* PROBLEM: when I press switch, it shows in the terminal the messages that are supposed to appear when I press the MENU button and the NOTIFICATION button*/}
          <View style={styles.switchContainer}>
            <Switch
              trackColor={{false: "#767577", true: "#767577"}}
              thumbColor={isEnabled ? "#101F41" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}

              // valueDimension={true}
              style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
              // onValueDimensionChange={(valueDimension) => {}}
            />
          </View>
        
          <View style={styles.switchContainerText1}>
            <Text style={styles.switchText1}>
              {t('off')}
            </Text>
          </View>

          <View style={styles.switchContainerText2}>
            <Text style={styles.switchText2}>
              {t('on')}
            </Text> 
          </View>
        </View>

        <View style={styles.contour2}>
          <Text
            style={{
              fontFamily:'Montserrat_600SemiBold',
              fontSize:30,
              color:'#FBFBFC',
              top:'5%',
              left: '0%',
              textShadowColor: "rgba(0, 0, 0, 0.15)",
              textShadowOffset: { width: 3, height: 1 },
              textShadowRadius: 4,
            }}
          >
            {t('camera_system')}
          </Text>

          <View style={styles.alarmsHistoryView}>
            <Text 
              style={{
                fontFamily: 'Montserrat_500Medium',
                fontSize: 22,
                color: "#101F41",
                top: "15%",
                left: "-13%",
                textShadowColor: "rgba(0, 0, 0, 0.10)",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 4,
              }}
            >
              {t('alarms_history')}
            </Text>
          </View> 
          
          <View style={styles.inputView}>
            <Text style={styles.inputText}>
              {/* 18:05 pm Sun - Human detected */}
            </Text>
          </View>

          <View style={styles.inputView}>
            <Text style={styles.inputText}>
              {/* 16:05 pm Sat - Human detected */}
            </Text>
          </View>

          <View style={styles.inputView}>
            <Text style={styles.inputText}>
              {/* 10:05 am Sat - Human detected */}
            </Text>
          </View>

        </View>

        <TouchableOpacity 
          style={styles.imagesBtn}
          onPress={handleSeePastImages}
          >
          <Text
            style={{
            fontFamily: "Montserrat_500Medium",
            fontSize: 16,
            color: "#FFFF",
          }}
          >
            {t("past_images")}
          </Text>
        </TouchableOpacity>
      
        <View style={{
              top: "2%",
              width: 280,
              height: 70,
              // backgroundColor: "#45b871",
              marginTop: 10,
              marginBottom: 5,
              marginLeft: 0,
              marginRight: 250,
              borderWidth: 0, // Border set to 0
            }}  
        />
      

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E9EBEE",
    },
    contour1: {
      backgroundColor: "#d9d9d9",
      shadowColor: "#000",
      shadowOffset: { width: 3, height: 5 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      height: 177,
      width: 320,
      marginLeft: 5,
      alignItems: "center",
      alignSelf: "center",
      borderRadius: 40,
      elevation: 10, //only android
      position: "absolute",
      zIndex: 1,
      opacity: 1,
      top: "18%"
    },
    contour2: {
        backgroundColor: "#d9d9d9",
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        height: 340,
        width: 320,
        marginLeft: 5,
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 40,
        elevation: 10, //only android
        position: "absolute",
        zIndex: 1,
        opacity: 1,
        top: "43%"
      },
    imagesBtn: {
      width: "64%",
      borderRadius: 18,
      height: "5%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#101F41",
      left: "20%",
      top: "88%",
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
      top: "13%",
      borderWidth: 0, // Border set to 0
    },
    menuButton: {
      width: "13%",
      height: "5%",
      padding: 1,
      // backgroundColor: "#F38D68",
      borderWidth: 1,
      top: "4%",
      left: "82%",
      position: "absolute",
      borderColor: "#E9EBEE",
    },
    notificationButton: {
      width: "13%",
      height: "6%",
      padding: 1,
      // backgroundColor: "#8A89C0",
      borderWidth: 1,
      top: "9%",
      left: "82%",
      position: "absolute",
      borderColor: "#E9EBEE",
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
    switchContainer: {
      borderColor: "#E9EBEE",
      // backgroundColor: "#9055A2",
      width: "20%",
      height: "25%",
      marginBottom: 20,
      marginLeft: 20,
      padding: 1,
      marginRight: 10,
      top: "45%",
      left: "34%",
      borderWidth: 0, // Border set to 0
      zIndex: 1,
      alignContent: "center",
      position: "absolute",
      paddingVertical: -5,
      paddingHorizontal: 5,
      borderRadius: 25
    },
    switchContainerText1: {
      width: "15%",
      height: "12%",
      alignItems: "center",
      justifyContent: "center",
      // backgroundColor: "#9055A2",
      left: "32%",
      top: "75%",
      position: "absolute",
    },
    switchText1: {
      fontFamily: 'Montserrat_500Medium',
      fontSize: 17,
      color: "#757C8D",
      textShadowColor: "rgba(0, 0, 0, 0.25)",
      textShadowRadius: 10
    },
    switchContainerText2: {
      width: "15%",
      height: "12%",
      alignItems: "center",
      justifyContent: "center",
      // backgroundColor: "#9055A2",
      left: "57%",
      top: "75%",
      position: "absolute",
    },
    switchText2: {
      fontFamily: 'Montserrat_500Medium',
      fontSize: 17,
      color: "#101F41",
      textShadowColor: "rgba(0, 0, 0, 0.25)",
      textShadowRadius: 10
    },
    alarmsHistoryView: {
      borderRadius: 25,
      width: "82%",
      height: "15%",
      marginBottom: 20,
      alignItems: "center",
      padding: 1,
      borderColor: "#101F41",
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
  });