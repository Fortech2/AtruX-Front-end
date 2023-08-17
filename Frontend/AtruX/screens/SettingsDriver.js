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
import { useTranslation } from "react-i18next"; // for the translation
import i18next, { languageResources } from "../services/i18next"; // for the translation
import languageList from "../locales/languageList.json"; // for the translation
import { changeLanguage } from "i18next"; // for the translation
import { useNavigation } from "@react-navigation/native"; //
import { useRoute } from '@react-navigation/native';
import { Dropdown } from "react-native-material-dropdown-v2-fixed";
import Arrow from "../components/arrow_language";
import EllipseSettings from '../components/EllipseSettings'
import CircleSettings from '../components/CircleSettings'
import SettingsIcon from '../components/SettingsIcon'
import LineSettings from '../components/LineSettings'
import LogOutIcon from '../components/LogOutIcon'
import EditAccountIcon from '../components/EditAccountIcon'

export default function Settings_Driver() {

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

  const handleBack = () => {
    navigation.navigate('Homes')
  };

  const handleEditAccount = () => {

    // now we will navigate to the HomeScreen
    // but we need to navigate to the the EditDriverProfile
    
    navigation.navigate('Homes');
  };

  const handleLogOut = () => {
    // the user will be directed to the LogIn Profile

    // navigation.navigate('');
  };

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

        <View style={styles.ellipseRightWrapper}>
          <EllipseSettings
            style={{
              position: "absolute",
              top: "5%",
            }}
          />
        </View>

        <View style={styles.circleLeftWrapper}>
          <CircleSettings
            style={{
              position: "absolute",
              top: "5%",
            }}
          />
        </View>

        <TouchableOpacity style={styles.menuButton}>
          <MenuIcon style={{left: "10%", top: "10%"}}/>
        </TouchableOpacity> 

        <View style={{top: "10%", left: "10%", position: "absolute"}}>
          <SettingsIcon style={{left: "-5%", top: "0%"}}/>
          <Text style={{fontFamily:'Montserrat_600SemiBold', fontSize:30, color:'white', top:'-105%', left: '30%'}}>
              {t("settings")}
          </Text>
        </View>

        <View style={styles.contour1}>
          <Text style={{fontFamily:'Montserrat_500Medium', fontSize:30, color:'#101F41', top:'5%', left: '0%'}}>
            {t("account_settings")}
          </Text>

          <LineSettings style={{ top: "6%", left: "5%" }}/>

          <View style={styles.logOutView}>
            <Text 
              style={{
                fontFamily: 'Montserrat_500Medium',
                fontSize: 28,
                color: "#101F41",
                top: "5%",
                left: "-20%",
                textShadowColor: "rgba(0, 0, 0, 0.10)",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 4,
              }}
            >
              {t('log_out')}
            </Text>
            <TouchableOpacity style = {styles.logOutButton} onPress={handleLogOut}>
              <LogOutIcon style={{ top: "2%" }}/>
            </TouchableOpacity>
          </View> 

          <View style={styles.editAccountView}>
            <Text 
              style={{
                fontFamily: 'Montserrat_500Medium',
                fontSize: 28,
                color: "#101F41",
                top: "5%",
                left: "-10%",
                textShadowColor: "rgba(0, 0, 0, 0.10)",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 4,
              }}
            >
              {t('edit_account')}
            </Text>
            <TouchableOpacity style = {styles.editAccountButton} onPress={handleEditAccount}>
              <EditAccountIcon style={{ top: "2%" }}/>
            </TouchableOpacity>
          </View> 
        </View>

        <View style={styles.contour2}>
          <Text
            style={{
                fontFamily: 'Montserrat_500Medium',
                fontSize: 28,
                color: "#101F41",
                top: "25%",
                left: "-15%",
                textShadowColor: "rgba(0, 0, 0, 0.10)",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 4,
            }}
          >
            {t("notifications")}
          </Text>

          <View style={styles.switchContainer}>
            <Switch
              trackColor={{false: "#767577", true: "#767577"}}
              thumbColor={isEnabled ? "#101F41" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}

              // valueDimension={true}
              style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
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
      
        <View style={{
              top: "2%",
              width: 280,
              height: 70,
              marginTop: 10,
              marginBottom: 5,
              marginLeft: 0,
              marginRight: 250,
              borderWidth: 0, // Border set to 0
            }}  
        />
      
        <TouchableOpacity style={styles.back} onPress={handleBack}>
            <Back />
        </TouchableOpacity>

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
      height: 269,
      width: 320,
      marginLeft: 5,
      alignItems: "center",
      alignSelf: "center",
      borderRadius: 40,
      elevation: 10, //only android
      position: "absolute",
      zIndex: 1,
      opacity: 1,
      top: "25%"
    },
    contour2: {
      backgroundColor: "#d9d9d9",
      shadowColor: "#000",
      shadowOffset: { width: 3, height: 5 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      height: 73,
      width: 320,
      marginLeft: 5,
      alignItems: "center",
      alignSelf: "center",
      borderRadius: 40,
      elevation: 10, //only android
      position: "absolute",
      zIndex: 1,
      opacity: 1,
      top: "62%"
    },
    ellipseWrapper: {
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
      borderWidth: 1,
      top: "9%",
      left: "82%",
      position: "absolute",
      borderColor: "#E9EBEE",
    },
    ellipseRightWrapper: {
      width: 377,
      height: 290,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 110,
      marginRight: 0,
      top: "70%",
      borderWidth: 0, // Border set to 0
      position: "absolute",
      transform: [{ rotate: '4.673deg' }]
      
    },
    circleLeftWrapper: {
      width: 150,
      height: 300,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 0,
      marginRight: 0,
      top: "35%",
      borderWidth: 0, // Border set to 0
      position: "absolute",
    },
    switchContainer: {
      borderColor: "#D9D9D9",
      width: "18%",
      height: "45%",
      marginBottom: 0,
      marginLeft: 0,
      padding: 1,
      marginRight: 10,
      top: "25%",
      left: "77%",
      borderTopLeftRadius: 300,
      borderTopRightRadius: 300,
      borderWidth: 0, // Border set to 0
      zIndex: 1,
      alignContent: "center",
      position: "absolute",
      paddingHorizontal: 8,
      paddingVertical: -5,
      borderRadius: 25,
    },
    switchContainerText1: {
      width: "15%",
      height: "20%",
      alignItems: "center",
      justifyContent: "center",
      left: "70%",
      top: "15%",
      position: "absolute",
    },
    switchText1: {
      fontFamily: 'Montserrat_500Medium',
      fontSize: 12,
      color: "#757C8D",
      textShadowColor: "rgba(0, 0, 0, 0.25)",
      textShadowRadius: 10
    },
    switchContainerText2: {
      width: "15%",
      height: "20%",
      alignItems: "center",
      justifyContent: "center",
      left: "84%",
      top: "15%",
      position: "absolute",
    },
    switchText2: {
      fontFamily: 'Montserrat_500Medium',
      fontSize: 12,
      color: "#101F41",
      textShadowColor: "rgba(0, 0, 0, 0.25)",
      textShadowRadius: 10
    },
    logOutView: {
      borderRadius: 25,
      width: "82%",
      height: "18%",
      marginBottom: 20,
      alignItems: "center",
      padding: 1,
      borderColor: "#101F41",
      borderWidth: 1,
      top: "-80%",
      alignContent: "center",
    },
    editAccountView: {
      borderRadius: 25,
      width: "82%",
      height: "18%",
      marginBottom: 20,
      alignItems: "center",
      padding: 1,
      borderColor: "#101F41",
      borderWidth: 1,
      top: "-80%",
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
    logOutButton: {
      width: "13%",
      height: "80%",
      padding: 1,
      borderColor: "#D9D9D9",
      borderWidth: 1,
      top: "10%",
      left: "84%",
      position: "absolute",
    },
    editAccountButton: {
      width: "13%",
      height: "80%",
      padding: 1,
      borderWidth: 1,
      top: "10%",
      left: "82%",
      position: "absolute",
      borderColor: "#D9D9D9",
    },
  });