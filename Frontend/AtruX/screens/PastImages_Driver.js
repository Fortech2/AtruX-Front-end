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
  FlatList, //
  SafeAreaView,
  Picker,
  TouchableHighlight,
  Switch,
  Pressable
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
import Modal from "react-native-modal";
import Linii from '../components/Linii';
import SettingsIcon from '../components/SettingsIcon';
import KeyWordsIcon from '../components/KeyWordsIcon';
import ExitIcon from '../components/ExitIcon';
import NotifIconMenu from '../components/NotifIconMenu'
import EllipseMenuHS1 from '../components/EllipseMenuHS1';
import EllipseMenu2 from '../components/EllipseMenu2';
import VectorMenu from '../components/VectorMenu';
import { BlurView } from 'expo-blur'

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

  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };
  
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const [images, setImages] = useState([]);
  const link = 'https://atrux-prod.azurewebsites.net'
  useEffect(() => {
    // Make the API request to fetch images
    axios.get(`${link}/images`)
      .then(response => {
        console.log('Images data:', response.data.image); // Log the images data
        setImages(response.data.image);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

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
      <View>
     
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
              {images.map((image, index) => (
        <View key={index}>
          <Image
            source={{ uri: `data:image/jpeg;base64,${image.binary_data}` }}
            style={{ width: 100, height: 100, top:'25%' }}
          />
        </View>
      ))}

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
                  navigation.navigate("SettingsSecurity");
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
  });