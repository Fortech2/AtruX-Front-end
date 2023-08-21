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
import React, { useState, useEffect } from "react";
import { t } from "i18next";
import { useNavigation } from "@react-navigation/native";
import Linii from "../components/Linii2";
import ExitIcon from "../components/ExitIcon";
import ExitIcon2 from "../components/ExitIconGrey";
import EllipseMenuHS1 from "../components/EllipseMenuHS1";
import EllipseMenu2 from "../components/EllipseMenu2";
import VectorMenu from "../components/VectorMenu";
import SettingsIcon from "../components/SettingsIcon";
import KeyWordsIcon from "../components/KeyWordsIcon";
import NotifIconMenu from "../components/NotifIconMenu";
import MoreButton from "../components/MoreButton";
import CircleJ from "../components/circle";
import SendRouteIcons from "../components/SendRouteIcon";
import BlueCirc from "../components/BlueForm";
import Back from "../components/Back";
import BigCircle from "../components/BigEllipse";
import { BlurView } from "expo-blur";
import SendRouteIcon from "../components/SendRouteIc";

const SendRoute = () => {
  const [drivers, setDrivers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const navigation = useNavigation();
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [lastEnteredStop, setLastEnteredStop] = useState("");

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleOpenModal2 = (driverName) => {
    const selectedDriver = allDrivers.find(
      (driver) => driver.name === driverName
    );

    if (selectedDriver) {
      console.log("Driver Email:", selectedDriver.email);
      setSelectedDriver(selectedDriver);
      setModalVisible2(true);
    } else {
      console.log("Driver not found:", driverName);
    }
  };
  const [previousStop, setPreviousStop] = useState("");
  const [allDrivers, setAllDrivers] = useState([]);
  const [dispatcherId, setDispatcherId] = useState(null);
  const [routeStops, setRouteStops] = useState([]); // Store entered stops
  const [routeStop, setRouteStop] = useState("");
  const [showPreviousStop, setShowPreviousStop] = useState(false);
  const [routeSentMessage, setRouteSentMessage] = useState("");
  const [showRouteSentMessage, setShowRouteSentMessage] = useState(false);
  const handleCloseModal2 = () => {
    setShowRouteSentMessage(false);
    setShowPreviousStop(false);
    setModalVisible2(false);
    setSelectedDriver(null);
    setRouteStop("");
    setRouteStops([]);
  };

  const handleBack = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    if (!modalVisible2) {
      // Modal is closed, reset the state
      setLastEnteredStop("");
      setRouteStops([]);
    }
  }, [modalVisible2]);
  useEffect(() => {
    // Fetch the user data
    axios
      .get("https://atrux.azurewebsites.net/user", { withCredentials: true })
      .then((response) => {
        console.log("User data:", response.data);
        const userData = response.data;
        if (userData.role === "dispatcher") {
          const dispatcherDrivers = userData.drivers; // Use the list of drivers from the response
          console.log("Drivers for Dispatcher:", dispatcherDrivers);
          setAllDrivers(dispatcherDrivers);
          setDrivers(dispatcherDrivers.map((driver) => driver.name));
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
  useEffect(() => {
    console.log("Modal opened:", modalVisible2);
  }, [modalVisible2]);
  return (
    <View style={{ backgroundColor: "#E9EBEE", flex: 1 }}>
      <View>
        <BlueCirc />

        <TouchableOpacity style={styles.backBox} onPress={handleBack}>
          <Back style={{ top: "-0.3%" }} />
        </TouchableOpacity>

        <Text
          style={{
            top: "-99%",
            color: "white",
            fontSize: 33,
            left: "25%",
            width: "44%",
            fontFamily: "Montserrat_500Medium",
          }}
        >
          {t("send_routes")}
        </Text>
        <SendRouteIcons style={{ top: "-103%", left: "13.5%" }} />
      </View>

      <View style={styles.contour}>
        <View style={styles.box}>
          <Text
            style={{
              fontFamily: "Montserrat_500Medium",
              fontSize: 15,
              color: "white",
              textAlign: "left",
              alignSelf: "center",
              top: "12%",
            }}
          >
            {t("choose_driver")}
          </Text>
        </View>
        <ScrollView style={{ top: "3%" }}>
          <View style={{ height: 1000 }}>
            {drivers && (
              <View>
                {console.log("Drivers to be rendered:", drivers)}
                {drivers.map((driver) => (
                  <View key={driver} style={styles.data}>
                    <Text
                      style={{
                        fontFamily: "Montserrat_500Medium",
                        fontSize: 22,
                        color: "#101F41",
                        textAlign: "left",
                        alignSelf: "center",
                      }}
                    >
                      {driver}
                    </Text>

                    <TouchableOpacity
                      style={{
                        position: "absolute",
                        left: "86%",
                        alignItems: "center",
                        width: "53%",
                        height: "100%",
                        top: "9%",
                      }}
                      onPress={() => {
                        handleOpenModal2(driver); // Pass the driver's name as the parameter
                      }}
                    >
                      <MoreButton />
                    </TouchableOpacity>
                    <SafeAreaView
                      style={{ top: "-183%", left: "38%", zIndex: 1, flex: 1 }}
                    >
                      <Modal
                        visible={modalVisible2}
                        animationType="fade"
                        transparent={true}
                        onRequestClose={() => {
                          setRouteSentMessage("");
                          setShowRouteSentMessage(false);
                          handleCloseModal2();
                          setRouteStop(""); // Reset the input field
                          setRouteStops([]); // Reset the list of route stops
                          setPreviousStop(""); // Reset previousStop state
                        }}
                      >
                        <BlurView intensity={20} style={styles.blurContainer}>
                          <View style={styles.modalContainer}>
                            <View style={{ position: "absolute" }}></View>

                            <SendRouteIcons
                              style={{
                                left: "20%",
                                position: "absolute",
                                top: "6%",
                              }}
                            />
                            <Pressable
                              style={styles.exitButton2}
                              onPress={handleCloseModal2}
                            >
                              <ExitIcon2 />
                            </Pressable>
                            {console.log("Selected Driver:", selectedDriver)}
                            <Text
                              style={{
                                fontFamily: "Montserrat_500Medium",
                                fontSize: 30,
                                color: "#101F41",
                                textAlign: "left",
                                alignSelf: "center",
                                color: "white",
                                position: "absolute",
                                top: "4%",
                              }}
                            >
                              {selectedDriver ? selectedDriver.name : ""}
                            </Text>
                            <View style={styles.line} />
                            <Text
                              style={{
                                fontSize: 22,
                                color: "#101F41",
                                textAlign: "left",
                                alignSelf: "center",
                                color: "white",
                                fontFamily: "Montserrat_500Medium",

                                top: "28%",
                                position: "absolute",
                              }}
                            >
                              {t("send_routesB")}
                            </Text>
                            <View>
                              <View style={styles.input}>
                                <TextInput
                                  style={{
                                    fontFamily: "Montserrat_100Thin",
                                    fontSize: 15,
                                    width: "74%",
                                    left: "5%",
                                    color: "white",
                                    top: "15%",
                                    zIndex: 4,
                                  }}
                                  placeholder={t("enter_here")}
                                  placeholderTextColor="#6D6D6D"
                                  onChangeText={(text) => {
                                    setRouteStop(text);
                                    setLastEnteredStop(text); // Update lastEnteredStop state
                                  }}
                                  value={routeStop}
                                />
                                <SendRouteIcon
                                  style={{ left: "5%", top: "-40%" }}
                                />
                              </View>

                              <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                  if (routeStop.trim() !== "") {
                                    // Make sure the entered stop is not empty
                                    setShowPreviousStop(true);
                                    setPreviousStop(routeStop); // Update previousStop state
                                    setRouteStops([...routeStops, routeStop]); // Add the stop to the list of stops
                                    console.log("Saved Stop:", routeStop); // Log the saved stop to the console
                                    setRouteStop(""); // Reset the input field
                                  }
                                }}
                              >
                                <Text
                                  style={{
                                    fontFamily: "Montserrat_500Medium",
                                    fontSize: 20,
                                  }}
                                >
                                  {t("next_stop")}
                                </Text>
                              </TouchableOpacity>
                             
                              <TouchableOpacity
                                style={styles.button_end}
                                onPress={() => {
                                  if (selectedDriver) {
                                    let updatedRouteStops = [...routeStops];
                                    if (lastEnteredStop.trim() !== "") {
                                      updatedRouteStops.push(lastEnteredStop);
                                    }

                                    const routeData = {
                                      driver_email: selectedDriver.email,
                                      route: updatedRouteStops,
                                    };

                                    console.log(
                                      "Sending Route Data:",
                                      routeData
                                    );

                                    axios
                                      .post(
                                        "https://atrux.azurewebsites.net/route",
                                        routeData
                                      )
                                      .then((response) => {
                                        console.log("Route sent successfully");
                                        setRouteSentMessage(t("route_sent"));
                                        setShowRouteSentMessage(true);
                                        // Reset input fields and route stops
                                        setShowPreviousStop(false);
                                        setLastEnteredStop("");
                                        setRouteStops([]);
                                        setPreviousStop(""); // Reset previousStop state
                                      })
                                      .catch((error) => {
                                        console.error(
                                          "Error sending route:",
                                          error
                                        );
                                        // Handle error if needed
                                      });
                                  }
                                }}
                              >
                                <Text
                                  style={{
                                    fontFamily: "Montserrat_500Medium",
                                    fontSize: 20,
                                    color: "white",
                                  }}
                                >
                                  {t("send_route_done")}
                                </Text>
                              </TouchableOpacity>
                              {showPreviousStop && (
  <Text
    style={{
      fontFamily: "Montserrat_100Thin",
      fontSize: 20,
      color: "white",
      top:'-30%',
      left:'6%'
    }}
  >
    {t("previous_stop")}: {previousStop}
  </Text>
)}
{showRouteSentMessage && (
  <Text
    style={{
      fontFamily: "Montserrat_100Thin",
      fontSize: 20,
      color: "white",
      top:'-30%',
      left:'18%'
    }}
  >
    {routeSentMessage}
  </Text>
)}
                            </View>
                          </View>
                        </BlurView>
                      </Modal>
                    </SafeAreaView>
                  </View>
                ))}
              </View>
            )}
          </View>
        </ScrollView>
      </View>
      <View>
        <TouchableOpacity
          style={styles.menuButton}
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
            <BlurView intensity={20} style={styles.blurContainer2}>
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
                    navigation.navigate("SettingsDisp");
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
      </View>
      {/* <BigCircle style={{ top: "-270%" }} /> */}
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
    top: "-195%",
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
    width: "13%",
    height: "20%",
    padding: 1,
    backgroundColor: "#F38D68",
    borderWidth: 1,
    top: "-930%",
    left: "83%",
    borderColor: "rgba(158, 150, 150, 0)", // makes the color transparent
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#101F41",
    top: "20%",
    // width: "70%",
    // height: "40%",
    borderRadius: 40,
    padding: 1,
    width: 311,
    height: 378,
    // backgroundColor: "#D9D9D9"
    // backgroundColor: "#B6B6B6"
    top: "-5%",
    left: "-20%",
  },
  modalContainer2: {
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
    fontSize: 26,
    color: "#F8F8F8",
    top: "-90%",
    left: "5%",
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
  backBox: {
    height: 25,
    width: 30,
    marginLeft: 5,
    borderRadius: 10,
    position: "absolute",
    zIndex: 1,
    opacity: 1,
    top: "2%",
    left: "4%",
    alignItems: "center",
  },
});
export default SendRoute;
