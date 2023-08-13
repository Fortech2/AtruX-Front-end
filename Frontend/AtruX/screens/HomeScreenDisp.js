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
import ExitIcon from "../components/ExitIcon";
import EllipseMenuHS1 from "../components/EllipseMenuHS1";
import EllipseMenu2 from "../components/EllipseMenu2";
import VectorMenu from "../components/VectorMenu";
import SettingsIcon from "../components/SettingsIcon";
import React, { useState } from "react";
import KeyWordsIcon from "../components/KeyWordsIcon";
import NotifIconMenu from "../components/NotifIconMenu";
import { BlurView } from "expo-blur";
import {
  useFonts as useMontserrat,
  Montserrat_100Thin,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import ShapeHomescreen from "../components/shapeHomeScreen";
import ShapeHomeScreen2 from "../components/shapeHomeScreen2";
import ShapeHomeScreen3 from "../components/shapeHomeScreen3";
import Linii from "../components/Linii";
import { useNavigation } from "@react-navigation/native";
import Assistant from "../components/Assistant";
import Telefon from "../components/telefon";
import TelefonMic from "../components/TelefonMic";
import Harta from "../components/harta";
import Politist from "../components/politist";
import ShapeH from "../components/shapehomedisp";
import CircleShape from "../components/CircleShape";
import { t } from "i18next";
import SendRoute from "../components/sendroute";
import ListDrivers from "../components/ListDrivers";
import Modal from "react-native-modal";
const roundDispatcher = () => {
  // Function for "Call the dispatcher" button
  console.log("Calling the dispatcher...");
};

const roundRoute = () => {
  // Function for "See your route" button
  console.log("Seeing your route...");
};

const roundSystem = () => {
  // Function for "Security system" button
  console.log("Accessing the security system...");
};

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
  const [modalVisible, setModalVisible] = useState(false);
const handleOpenModal = () => {
  setModalVisible(true);
};

const handleCloseModal = () => {
  setModalVisible(false);
};
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#E9EBEE", flex: 1 }}>
      <View style={styles.background}>
        <ShapeHomescreen />

        <ShapeH style={{ top: "-45%", left: "0%" }} />
        <CircleShape style={{ top: "-153.5%", left: "60%" }} />
      </View>
      <TouchableOpacity
        style={styles.back}
        onPress={() => {
          handleOpenModal();
          console.log("Modal opened:", modalVisible); // Add this line
        }}
      >
        <Linii />
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
                  navigation.navigate("Setings");
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
                  console.log("Navigating to Settings");
                  navigation.navigate("Notification");
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
      <ScrollView>
        <View style={{ height: 900 }}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.salutText}>{t("hello_")}</Text>
            <Text style={styles.salutText}> Marius!</Text>
          </View>
          <View style={styles.mesajInspirational}>
            <Text style={styles.InspirationalText}>{t("remeber")}</Text>
            <Text style={styles.InspirationalText}> {t("take")}</Text>
            <Text style={styles.InspirationalText}> {t("drivers")}!</Text>
          </View>
          <View style={styles.grey_rectangle}>
            <TouchableOpacity
              style={styles.roundButtons2}
              onPress={roundDispatcher}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.roundButtons2}
              onPress={roundRoute}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.roundButtons2}
              onPress={roundSystem}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.ButoaneDreptunghiulare}
              onPress={() => navigation.navigate("SendRoute")}
            >
              <Text
                style={{
                  color: "#101F41",
                  fontSize: 20,
                  fontFamily: "Montserrat_500Medium",
                  left: 20,
                  marginTop: "center",
                  left: "4%",
                  top: "50%",
                }}
              >
                {t("send_route")}
              </Text>
              <SendRoute style={{ top: "0%", zIndex: 1, left: "85%" }} />
              {/* </View>   */}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ButoaneDreptunghiulare}
              onPress={() => navigation.navigate("SeeUpdates")}
            >
              <Text
                style={{
                  color: "#101F41",
                  fontSize: 20,
                  fontFamily: "Montserrat_500Medium",
                  left: 20,
                  marginTop: "center",
                  left: "4%",
                  top: "25%",
                }}
              >
                {t("see_updates")}
              </Text>
              <Harta style={{ top: "-28%", zIndex: 1, left: "84.5%" }} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.ButoaneDreptunghiulare}
              onPress={() => navigation.navigate("ListOfDrivers")}
            >
              <Text
                style={{
                  color: "#101F41",
                  fontSize: 20,
                  fontFamily: "Montserrat_500Medium",
                  left: 20,
                  marginTop: "center",
                  left: "4%",
                  top: "50%",
                }}
              >
                {t("list_of_drivers")}
              </Text>
              <ListDrivers style={{ top: "-4%", zIndex: 1, left: "84%" }} />
            </TouchableOpacity>
            <View style={styles.roundButtonsContainer}>
              <TouchableOpacity
                style={styles.ButoaneAlbe2}
                onPress={emergencyCall}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={emergencyCall}
              >
                <Text style={styles.textButoaneRotunde}>Emergency</Text>
                <Text style={styles.textButoaneRotunde}>call</Text>
                <Telefon style={{ top: "-31.5%", zIndex: 1, left: "2%" }} />
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
    backgroundColor: "#E9EBEE",
    alignItems: "center",
    justifyContent: "center",
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
    position: "absolute",
    top: "7%",
    left: "5%",
  },
  salutText: {
    color: "#FFFFFF",
    fontSize: 35,
    fontFamily: "Montserrat_500Medium",
    zIndex: 1,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  mesajInspirational: {
    position: "absolute",
    top: "24%",
    left: "15%",
  },
  InspirationalText: {
    color: "#101F41",
    fontSize: 35,
    fontFamily: "Montserrat_500Medium",
    zIndex: 1,
  },
  ButoaneDreptunghiulare: {
    width: 284,
    height: 57,
    borderRadius: 40,
    borderColor: "#101F41",
    borderWidth: 2,
    justifyContent: "center",
    marginVertical: 5,
    top: "-30%",
  },
  grey_rectangle: {
    color: "#FFFFFF",
    width: 320,
    height: 324,
    borderRadius: 40,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
    top: "45%",
    zIndex: 1,
    alignSelf: "center",
  },
  ButoaneAlbe: {
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    right: "140%",
    marginTop: "0%",
    top: "163.5%",
    zIndex: 1,
  },

  ButoaneAlbe2: {
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",

    marginTop: "0%",
  },

  emergencyButton: {
    width: 85,
    height: 85,
    borderRadius: 60,
    backgroundColor: "#CA0000",
    justifyContent: "center",
    alignItems: "center",
    left: "-92%",
    top: "-2.5%",
  },

  roundButtonsContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    top: "-30%",
    alignContent: "center",
    alignSelf: "center",
    left: "14%",
  },
  textButoaneDreptunghiulare: {
    color: "#101F41",
    fontSize: 20,
    fontFamily: "Montserrat_500Medium",
    left: 20,
    marginTop: "center",
    left: "4%",
    top: "16%",
  },
  textButoaneRotunde: {
    color: "#FFFFFF",
    fontSize: 9,
    fontFamily: "Montserrat_500Medium",
    top: "47%",
  },
  roundButtons2: {
    width: 47,
    height: 47,
    borderRadius: 40,
    backgroundColor: "#101F41",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    top: "32%",
    right: "-35%",
    // zIndex: 1,
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
  data: {
    borderRadius: 40,
    width: 284,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    padding: 1,
    borderColor: "#101f41",
    borderWidth: 1,
    alignContent:'center'
   

  },
  menuButton: {
   
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 20,
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
  exitButton: {
    width: "12%",
    height: "10%",
    padding: 1,
    top: "4%",
    left: "85%",
    position: "absolute",
    backgroundColor: "transparent", // Set background color to transparent
    borderColor: "transparent", 
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
    fontSize: 26,
    color: "#F8F8F8",
    top: "-90%",
    left: "5%"
  },
});
export default HomeScreen;
