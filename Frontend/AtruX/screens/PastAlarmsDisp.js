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
    Pressable,
} from "react-native";
  
import Component from "../components/UpcomponentList";
import BlueArrow from "../components/BlueAr";
import BlueMenu from "../components/BlueList";
import Modal from "react-native-modal";
import axios from "axios";
import {
    useFonts as useMontserrat,
    Montserrat_100Thin,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import React, { useState, useEffect, useTransition } from "react";
import { t } from "i18next";
import { useNavigation } from "@react-navigation/native";
import Linii from '../components/Linii';
import ExitIcon from "../components/ExitIcon";
import ExitIcon2 from "../components/ExitIconGrey";
import NotificationIcon from "../components/NotificationIcon"
import EllipseMenuHS1 from "../components/EllipseMenuHS1";
import EllipseMenu2 from "../components/EllipseMenu2";
import VectorMenu from "../components/VectorMenu";
import SettingsIcon from "../components/SettingsIcon";
import KeyWordsIcon from "../components/KeyWordsIcon";
import NotifIconMenu from "../components/NotifIconMenu";
import MoreButton from "../components/MoreButton";
import CircleJ from "../components/circle";
import AlarmDetector from "../components/AlarmDetector"
import BlueCirc from "../components/BlueForm";
import Back from "../components/Back";
import BigCircle from "../components/BigEllipse";
import { BlurView } from "expo-blur";
import SendRouteIcon from "../components/SendRouteIc";
import { useTranslation } from "react-i18next";

export default function PastAlarms_Disp() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const [montserratLoaded] = useMontserrat({
    // load any font variation in here
    Montserrat_100Thin,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
  });

  const handleNotif = () => {
    navigation.navigate('Notifications');
  };

  const handleBack = () => {
    navigation.navigate('Security');
  };

  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };
  
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ backgroundColor: "#E9EBEE", flex: 1 }}>
     <View>
      <BlueCirc />

      <TouchableOpacity style={{ top: "-98.5%", left: "4%" }} onPress={handleBack}>
       <Back style={{ top: "-0.3%" }} />
      </TouchableOpacity>

      <Text
        style={{
          top: "-199.1%",
          color: "white",
          fontSize: 33,
          left: "25%",
          width: "44%",
          fontFamily: "Montserrat_500Medium",
        }}
      >
        {t("title_past_alarms")}
      </Text>
      <AlarmDetector style={{ top: "-201.5%", left: "13%" }} />
     </View>
    
     <View style={styles.contour}>
        <Text style={styles.cameraSystemText}>
            {t('alarms_history')}
        </Text>

        <ScrollView style={{ top: "3%" }}>
         <View style={{ height: 1000 }}>
          <View style={styles.alarmContainer}>
            <Text style={styles.inputText}>
              17:05 pm Sun - Human detection at Pop Ion truck
            </Text>
          </View>

          <View style={styles.alarmContainer}>
           <Text style={styles.inputText}>
            17:05 pm Sun - Human detection at Pop Ion truck
           </Text>
          </View>

          <View style={styles.alarmContainer}>
           <Text style={styles.inputText}>
            17:05 pm Sun - Human detection at Pop Ion truck
           </Text>
          </View>            
         </View>
        </ScrollView>
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
          <View style={styles.modalContainer2}>
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
  );
};

const styles = StyleSheet.create({
    contour: {
      backgroundColor: "#d9d9d9",
      shadowColor: "#000",
      shadowOffset: { width: 3, height: 5 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      height: "80%",
      width: "80%",
      marginLeft: 5,
      alignItems: "center",
      alignSelf: "center",
      borderRadius: 40,
      elevation: 10, //only android
      zIndex: 1,
      opacity: 1,
      top: "-295%",
    },
    box: {
      backgroundColor: "#101F41",
      width: "50%",
      height: "5%",
      alignItems: "center",
      borderRadius: 40,
      marginRight: "auto",
      top: "3%",
      left: "4%",
    },
    blurContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      height: "200%",
      width: "200%",
      left: "-10%",
      top: "-50%",
    },
    blurContainer2: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      height: "200%",
      width: "200%",
      left: "-10%",
      top: "-50%",
    },
    data: {
      borderRadius: 40,
      width: 284,
      height: 45,
  
      alignItems: "center",
      padding: 1,
      borderColor: "#101f41",
      borderWidth: 1,
      alignContent: "center",
      marginTop: "5%",
    },
    menuButton: {
      borderRadius: 8,
      alignSelf: "center",
      marginTop: 20,
    },
    modalContainer2: {
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      backgroundColor: "rgba(0,0,0,0.3)",
      borderRadius: 40,
      padding: 1,
      width: 311,
      height: 347,
      backgroundColor: "#999999",
      top: "-5%",
      left: "-20%",
    },
    exitButton: {
      width: "12%",
      height: "10%",
      padding: 1,
      top: "4%",
      left: "85%",
      position: "absolute",
    },
    exitButton2: {
      width: "32%",
      height: "30%",
      padding: 1,
      top: "5%",
      left: "85%",
      zIndex: 3,
      position: "absolute",
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
      borderBottomLeftRadius: 35,
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
      borderTopRightRadius: 20,
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
      fontFamily: "Montserrat_500Medium",
      fontSize: 30,
      color: "#101F41",
      top: "-10%",
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
      backgroundColor: "#101F41",
    },
    inputText: {
      fontFamily: "Montserrat_500Medium",
      fontSize: 18,
      color: "#101F41",
      top: "5%",
      left: "0%",
    },
    line: {
      width: "100%",
      height: 1,
      backgroundColor: "#D9D9D9",
      marginVertical: 10,
  
      position: "absolute",
      top: "20%",
    },
    input: {
      color: "#474747",
      borderColor: "white",
      borderWidth: 1,
      borderRadius: 40,
      alignItems: "center",
      top: "50%",
      height: 47,
      width: 236,
    },
    button: {
      width: 200,
      borderRadius: 40,
  
      alignItems: "center",
      justifyContent: "center",
      width: 220,
      backgroundColor: "#FFFFFF",
      elevation: 10,
      height: "20%",
      top: "58%",
      alignSelf: "center",
    },
    button_end: {
      width: 180,
      borderRadius: 40,
      alignItems: "center",
      justifyContent: "center",
  
      backgroundColor: "#9EA2AC",
      elevation: 10,
      height: "20%",
      alignSelf: "center",
      top: "66%",
    
    },
    cameraSystemText: {
      fontFamily:'Montserrat_500Medium',
      fontSize:30,
      color:'#101F41',
      top:'3%',
      left: '0%',
      textShadowColor: "rgba(0, 0, 0, 0.15)",
      textShadowOffset: { width: 3, height: 1 },
      textShadowRadius: 4,
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
    inputTextMenu: {
      fontFamily: 'Montserrat_500Medium',
      fontSize: 28,
      color: "#F8F8F8",
      top: "-90%",
      left: "5%"
    },
    alarmContainer: {
      borderRadius: 23,
      width: 280,
      height: 52,
      marginBottom: 15,
      alignItems: "center",
      padding: 1,
      borderColor: "#101f41",
    //   borderColor: "rgba(158, 150, 150, 0)", // makes the color transparent
      borderWidth: 1,
      top: "2%",
      alignContent: "center",
    },
   
  });
  