import React, { useEffect, useState } from 'react'
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
  FlatList, //
  SafeAreaView,
  Picker,
  TouchableHighlight,
  Switch,
  Pressable,
  BackHandler
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
import Modal from "react-native-modal";
import Linii from '../components/Linii';
import KeyWordsIcon from '../components/KeyWordsIcon';
import ExitIcon from '../components/ExitIcon';
import NotifIconMenu from '../components/NotifIconMenu'
import EllipseMenuHS1 from '../components/EllipseMenuHS1';
import EllipseMenu2 from '../components/EllipseMenu2';
import VectorMenu from '../components/VectorMenu';
import { BlurView } from 'expo-blur'

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
    // navigation.navigate('Homes')
    navigation.goBack()
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

  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };
  
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{flex: 1}}>
      <View style = {styles.background}>
        <EllipseUpperLeftCorner/>
        <EllipseSettings style={{ top: "-30%", left: "40%" }}/>
        <CircleSettings style={{ top: "-165%", left: "0%" }}/>
      </View>    

      <ScrollView> 
       <View style = {{ height: 800 }}>
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

        <TouchableOpacity style={styles.back} onPress={handleBack}>
          <Back />
        </TouchableOpacity>        
       </View>
      </ScrollView>

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
                <Text style={styles.inputTextMenu}>{t("settings")}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.containerInputModal}>
                <KeyWordsIcon style={{ top: "8%", left: "5%" }} />
                <Text style={styles.inputTextMenu}>{t("keywords")}</Text>
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
      borderColor: "rgba(158, 150, 150, 0)", // makes the color transparent
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
  });