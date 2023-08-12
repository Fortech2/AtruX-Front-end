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
import MenuIcon from "../components/MenuIcon"
import NotificationIcon from "../components/NotificationIcon"
import Back from "../components/Back"
import SecurityIcon from "../components/SecurityIcon"
import Ellipse1Images from "../components/Ellipse1Images"
import Ellipse2Images from "../components/Ellipse2Images"
import { useTranslation } from "react-i18next"; // for the translation
import i18next, { languageResources } from "../services/i18next"; // for the translation
import languageList from "../locales/languageList.json"; // for the translation
import { changeLanguage } from "i18next"; // for the translation
import { useNavigation } from "@react-navigation/native"; //
import { useRoute } from '@react-navigation/native';
import { useHistory } from "react-router-dom";
import SeeMoreIcon from '../components/SeeMoreIcon'
import SettingsDriver from './SettingsDriver';

export default function PastImages_Driver() {

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

  const handleBack = ()  => {
    navigation.navigate("Security");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#101F41" }}>
      <View style={styles.background}>
        <View style={styles.circleRightWrapper}>
          <Ellipse1Images
            style={{
              position: "absolute",
              top: "5%",
              left: "0%"
            }}
          />
        </View>
        <View style = {styles.ellipseWrapper}>
          <Ellipse2Images
            style={{
              position: "absolute",
              top: "5%",
            }}
          />
        </View>
      </View>
      
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={{ height: 800 }}>
          <View style={{top: "10%", left: "10%", position: "absolute"}}>
            <SecurityIcon style={{left: "-15%", top: "-25%"}}/>
            <Text style={{fontFamily:'Montserrat_600SemiBold', fontSize:30, color:'white', top:'-150%', left: '20%'}}>
                {t("past")}
            </Text>
            <Text style={{fontFamily:'Montserrat_600SemiBold', fontSize:30, color:'white', top:'-155%', left: '25%'}}>
                {t("images")}
            </Text>
          </View>

          <View style={styles.contour}>
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

            <View style={styles.capturedImagesView}>
              <Text 
                style={{
                  fontFamily: 'Montserrat_500Medium',
                  fontSize: 22,
                  color: "#FDFDFD",
                  top: "15%",
                  left: "-10%",
                  textShadowColor: "rgba(0, 0, 0, 0.10)",
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 4,
                }}
              >
                {t('captured_images')}
              </Text>
            </View>

            <View style={styles.inputView}>
              <Text style={styles.inputText1}>
              {/* add here the time when the a human was detected on the camera */}
                16:05 pm Sat - Human detected
              </Text>
              
              {/* we need to add the image that it will be saved in the database */}
              <Image
                source={require('../assets/thief.jpg')}
                style = {{ top: "25%", width: 100, height: 100 }}
              />

              <TouchableOpacity style = {styles.seeMoreContainer1}>
                <Text style = {styles.seeMoreText}>
                  {t('see_more')}
                </Text>
                <SeeMoreIcon style={{ top: "-70%", left: "80%" }}/>
              </TouchableOpacity>
            </View>

            <View style={styles.inputView}>
              <Text style={styles.inputText2}>
              {/* add here the time when the a human was detected on the camera */}
                15:05 pm Sat - Human detected
              </Text>

              {/* we need to add the image that it will be saved in the database */}
              <Image
                source={require('../assets/thief.jpg')}
                style = {{ top: "85%", width: 100, height: 100 }}
              />
              <TouchableOpacity style = {styles.seeMoreContainer2}>
                <Text style = {styles.seeMoreText}>
                  {t('see_more')}
                </Text>
                <SeeMoreIcon style={{ top: "-70%", left: "80%" }}/>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.seeAllImagesView}>
              <Text 
                style={{
                  fontFamily: 'Montserrat_500Medium',
                  fontSize: 22,
                  color: "#FDFDFD",
                  top: "16%",
                  left: "0%",
                  textShadowColor: "rgba(0, 0, 0, 0.10)",
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 4,
                }}
              >
                {t('see_all_images')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.menuButton} >
        <MenuIcon style={{left: "10%", top: "10%", zIndex: 1}}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.back} onPress={handleBack}>
        <Back />
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    background: {
      position:'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
    },  
    container: {
      flexGrow: 1,
      // backgroundColor: "#DE6E4B",
      height: 500,
      top: "15%"
    },
    contour: {
      backgroundColor: "#d9d9d9",
      shadowColor: "#000",
      shadowOffset: { width: 3, height: 5 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      height: 531,
      width: 331,
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
    imagesBtn: {
      width: "64%",
      borderRadius: 18,
      height: "5%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#101F41",
      left: "20%",
      top: "89%",
      elevation: 10, //only android
      position: "absolute",
      
    },
    ellipseWrapper: {
      // backgroundColor: "#45b871",
      width: 233,
      height: 353,
      marginTop: -120,
      marginBottom: 624,
      marginLeft: 0,
      marginRight: 250,
      top: "70%",
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
      borderColor: "#D9D9D900",
    },
    circleRightWrapper: {
      // backgroundColor: "#45b871",
      width: 313,
      height: 330,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 250,
      marginRight: 0,
      top: "-5%",
      left: "-13%",
      borderWidth: 0, // Border set to 0
      position: "absolute"
    },
    capturedImagesView: {
      borderRadius: 25,
      width: 294,
      height: 46,
      marginBottom: 20,
      alignItems: "center",
      padding: 1,
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
      borderColor: '#d9d9d9',
      borderWidth: 1,
      top: "4%",
      alignContent: "center",
    },
    inputText1: {
      fontFamily: 'Montserrat_500Medium',
      fontSize: 12,
      color: "#101F41",
      top: "20%"
    },
    inputText2: {
      fontFamily: 'Montserrat_500Medium',
      fontSize: 12,
      color: "#101F41",
      top: "80%"
    },
    seeMoreContainer1: {
      borderRadius: 40,
      width: 76,
      height: 24,
      marginBottom: 20,
      alignItems: "center",
      padding: 1,
      backgroundColor: "#101F41",
      borderWidth: 1,
      top: "10%",
      left: "35%",
      alignContent: "center",
    },
    seeMoreContainer2: {
      borderRadius: 40,
      width: 76,
      height: 24,
      marginBottom: 20,
      alignItems: "center",
      padding: 1,
      backgroundColor: "#101F41",
      borderWidth: 1,
      top: "60%",
      left: "35%",
      alignContent: "center",
    },
    seeMoreText: {
      fontFamily: 'Montserrat_500Medium',
      fontSize: 12,
      color: "#FDFDFD",
      top: "10%",
      left: "-8%",
      textShadowColor: "rgba(0, 0, 0, 0.10)",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 4,
    },
    seeAllImagesView: {
      borderRadius: 40,
      width: 255,
      height: 54,
      marginBottom: 20,
      alignItems: "center",
      padding: 1,
      backgroundColor: "#101F41",
      borderWidth: 1,
      top: "28%",
      alignContent: "center",
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
      left: "4%",
      alignItems: "center",
    },
  });