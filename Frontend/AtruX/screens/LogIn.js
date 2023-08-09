import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
} from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  useFonts as useMontserrat,
  Montserrat_100Thin,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import HomeScreen from "./HomeScreen";
import CircleB from "../components/backgroundCircles";
import SmallCircle from "../components/SmallCircleB";
import DownCircle from "../components/DownCircle";
import SmallDownCircle from "../components/SmallDownCircle";
import PersonIcon from "../components/personIcon";
import Lock from "../components/LockLogInIcon";
import EyeIcon from "../components/EyeComponent";
import FullLogo from "../components/LogoComplet";
import { useTranslation } from "react-i18next"; // for the translation
import i18next, { languageResources } from "../services/i18next"; // for the translation
import languageList from "../locales/languageList.json"; // for the translation
import { changeLanguage } from "i18next"; // for the translation
import { useNavigation } from "@react-navigation/native"; //
import ForgotPassword from "./ForgotPassword"; //
import SignUp from "./SignUp";
import { Dropdown } from "react-native-material-dropdown-v2-fixed";
import Arrow from "../components/arrow_language";
import { useHistory } from "react-router-dom";
export default function LogIn() {
  
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    console.log(`Selected language: ${language}`);
    i18n.changeLanguage(language);
    setModalVisible(false);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const navigation = useNavigation(); // for the navigation
  const [montserratLoaded] = useMontserrat({
    // load any font variation in here
    Montserrat_100Thin,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rightIcon, setRightIcon] = useState("eye");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIconColor, setRightIconColor] = useState("#6D6D6D");
  const [isChecked, setChecked] = useState(false);
  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-slash");
      setRightIconColor("#6D6D6D");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-slash") {
      setRightIcon("eye");
      setRightIconColor("#6D6D6D");
      setPasswordVisibility(!passwordVisibility);
    }
  };
  const [errorMessage, setErrorMessage] = useState("");
  // const history = useHistory();
  const handleLogin = () => {
    axios
      .post("http://18.185.137.152/login", { email, password }, { withCredentials: true })
      .then((response) => {
        axios
        .get("http://18.185.137.152/user", { withCredentials: true }) // Assuming you have the get_user_data endpoint
        .then((userDataResponse) => {
          console.log("User data:", userDataResponse.data);

          // Now, based on the user role, navigate to the appropriate screen
          const userRole = userDataResponse.data.role;
          if (userRole === "driver") {
            navigation.navigate("Tab_Navigation");
          } else if (userRole === "dispatcher") {
            navigation.navigate("Disp_TabNavigation"); // Replace with the appropriate screen name for dispatcher role
          } else {
            setErrorMessage(t("user_role"));
            setIsModalVisible3(true);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setErrorMessage(t("data_error"));
          setIsModalVisible3(true);
        });
    })
      .catch((error) => {
        console.error("Login error:", error.response);
        if (error.response && error.response.status === 500) {
          setErrorMessage(t("wrong_ps_em"));
        } else {
          setErrorMessage(t("error_oc"));
        }
        setIsModalVisible3(true);
      });
  
    }
   
    const hideModal = () => {
      setIsModalVisible3(false);
    };
  const handleLoginb = () => {
      // Perform any other login-related logic here if needed
      // For now, we will simply navigate to the Home screen (App_Driver)
      navigation.navigate('Disp_TabNavigation');
    };
  if (!montserratLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.ellipseWrapper}>
            <View style={styles.ellipse} />
          </View>
        </View>
        <View style={{ position: "absolute" }}>
          <SmallCircle
            style={{
              marginTop: -53,
              marginBottom: 624,
              marginLeft: 46,
              marginRight: 81.3,
              top: "-5%",
            }}
          />
        </View>

        <SafeAreaView style={{ top: "4%", left: "-40%", zIndex: 1 }}>
          <Modal
            visible={modalVisible}
            animationType="fade"
            transparent={true}
            onRequestClose={handleCloseModal}
          >
            <View style={styles.modalContainer}>
              <FlatList
                data={Object.keys(languageResources)}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.languageBtn}
                    onPress={() => changeLanguage(item)}
                  >
                    <Text
                      style={{
                        fontFamily: "Montserrat_500Medium",
                        fontSize: 16,
                        color: "#ffff",
                      }}
                    >
                      {languageList[item].name}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
              />
            </View>
          </Modal>

          <TouchableOpacity onPress={handleOpenModal} style={styles.openButton}>
            <Text style={styles.openButtonText}>{t("language")}</Text>
          </TouchableOpacity>
        </SafeAreaView>
        
        <View style={{ marginTop: '-135%', top: "70%" }}>
          <View style={styles.contour}>
          
            <WrittenLogo style={{ left: "3.5%", top: "4.5%" }} />
            <Text
              style={{
                fontFamily: "Montserrat_600SemiBold",
                fontSize: 24,
                color: "#474747",
                top: "-80%",
                textShadowColor: "#B3B3B3",
                textShadowOffset: { width: 4, height: 3 },
                textShadowRadius: 4,
              }}
            >
              {t("SignIn.Title")}
              
            </Text>
            
            <Modal
        visible={isModalVisible3}
        transparent={true}
        animationType="fade"
        onRequestClose={hideModal}
      >
        <View style={styles.modalContainerError}>
          <View style={styles.boxError}>
            <Text style={styles.errorText}>SIGN IN FAILED</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <View style={styles.line} />
            <TouchableOpacity style={styles.okButton} onPress={hideModal}>
              <Text style={styles.okButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
            <View style={styles.inputView}>
              <PersonIcon style={{ left: "2%", top: "20%" }} />
              <TextInput
  style={{
    fontFamily: "Montserrat_100Thin",
    fontSize: 15,
    color: "#474747",
    width: "74%",
    top: "-84%",
    left: "5%",
  }}
  placeholder={t("emailOrUsername")}
  placeholderTextColor="#6D6D6D"
  onChangeText={(email) => {
    console.log("Email:", email);
    setEmail(email);
  }}
/>
            </View>

            <View style={styles.inputView2}>
              <Lock style={{ left: "2%", top: "20%" }} />
              <TextInput
                style={{
                  fontFamily: "Montserrat_100Thin",
                  fontSize: 15,
                  color: "#474747",
                  width: "74%",
                  top: "-84%",
                  left: "5%",
                }}
                placeholder={t("password")}
                placeholderTextColor="#6D6D6D"
                secureTextEntry={passwordVisibility}
                onChangeText={(password) => setPassword(password)}
              />
              <TouchableOpacity
                style={{ top: "-164%", left: "40%" }}
                onPress={handlePasswordVisibility}
              >
                <Icon name="eye" size={20} />
              </TouchableOpacity>
            </View>

            <View style={{ top: "-70%", left: "-25%" }}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
              />
              <Text
                style={{
                  fontFamily: "Montserrat_500Medium",
                  fontSize: 12,
                  color: "#000000",
                  top: "-50%",
                  left: "12%",
                }}
              >
                {t("rememberUser")}
              </Text>
            </View>
            {/* Display error message here */}
            
            <TouchableOpacity style={styles.loginBtn} onPress={handleLoginb}>

              <Text
                style={{
                  fontFamily: "Montserrat_500Medium",
                  fontSize: 16,
                  color: "#FFFF",
                }}
              >
                {t("LogIn.Title")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ top: "-68%", left: "0%" }}
              onPress={() => {
                navigation.navigate("ForgotPassword");
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat_500Medium",
                  fontSize: 14,
                  color: "#CA0000",
                }}
              >
                {t("forgot_password")}
              </Text>
            </TouchableOpacity>

            <FullLogo style={{ top: "-65.5%", left: "65%" }} />
          </View>
        </View>
        <View>
          <View style={styles.box3}>
            <View style={styles.ellipseWrapper3}>
              <View style={styles.ellipse3} />
            </View>
          </View>
          <View >
          <View style={styles.box4}>
            <View style={styles.ellipseWrapper4}>
              <View style={styles.ellipse4} />
            </View>
          </View>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", zIndex: 1, marginTop:'-40%' }}>
          <Text
            style={{
              fontFamily: "Montserrat_500Medium",
              fontSize: 12,
              color: "#FFFF",
            }}
          >
            {t("new_acc")}
          </Text>
          <TouchableOpacity
            style={{  }}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat_600SemiBold",
                fontSize: 12,
                color: "#73B3D3",
              }}
            >
              {t("SignUp.Title")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9EBEE",
    alignItems: "center",
    justifyContent: "center",
  },
  checkbox: {
    margin: 8,
    borderColor: "#101f41",
    borderWidth: 1,
  },
  contour: {
    backgroundColor: "#d9d9d9",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    height: 547,
    width: 271,
    marginLeft: 5,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 40,
    elevation: 10, //only android
    position: "absolute",
    zIndex: 1,
    opacity: 1,
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    borderRadius: 12,
    width: "82%",
    height: "7%",
    marginBottom: 20,
    alignItems: "center",
    padding: 1,
    borderColor: "#101f41",
    borderWidth: 1,
    top: "-68%",
    alignContent: "center",
  },
  errorText: {
    color: '#000000',
    fontSize: 18,
    fontFamily: "Montserrat_500Medium",
    top: '10%',
    alignItems: 'center', // Center the text vertically
    textAlign: 'center', // Center the text horizontally
    flexWrap: 'wrap', // Allow text to wrap to the next line if needed
    marginBottom:'4%'
  },
  errorMessage:{
    color: '#000000',
    fontSize: 14,
    fontFamily: "Montserrat_100Thin",
    top: '10%',
    alignItems: 'center', // Center the text vertically
    textAlign: 'center', // Center the text horizontally
    flexWrap: 'wrap', // Allow text to wrap to the next line if needed
    marginBottom:'4%'
  },
  inputView2: {
    borderRadius: 12,
    width: "82%",
    height: "7%",
    marginBottom: 20,
    alignItems: "center",
    padding: 1,
    borderColor: "#101f41",
    borderWidth: 1,
    top: "-69%",
    alignContent: "center",
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    top: "7%",
    width: "28%",
    borderRadius: 12,
    padding: 1,
    left: "5%",
  },
  languageBtn: {
    padding: 16,
    fontFamily: "Montserrat_600SemiBold",
  },
  openButton: {
    padding: 16,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 20,
  },
  openButtonText: {
    color: "white",
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
  },
  loginBtn: {
    width: "64%",
    borderRadius: 18,
    height: 43,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#101F41",
    top: "-70%",
    elevation: 10,
  },
  language_list: {
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#D9D9D9",
  },
  box: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",

    position: "absolute",
  },
  box2: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    position: "absolute",
  },
  ellipseWrapper: {
    borderWidth: 0, // Border set to 0
    height: 354,
    width: 354,
    marginTop: -154,
    marginBottom: 600,
    marginLeft: -121,
    marginRight: 127,
  },
  ellipse: {
    backgroundColor: "#0f1f41",
    borderRadius: 177,
    shadowColor: "#000",
    shadowOffset: { width: 7, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10, // This property is specific to Android
    height: 354,
    width: 354,
  },
  box3: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    top: "255%",
    left: "12%",
  },
  ellipseWrapper3: {
    borderWidth: 0,
    height: 377,
    width: 377,
  },
  ellipse3: {
    backgroundColor: "#101f41",
    borderRadius: 188.5,
    height: 377,
    left: 0,

    top: 0,
    width: 377,
  },
  box4: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: '220%',
    marginLeft: '-22%',
  },
  ellipseWrapper4: {
    borderWidth: 0,
    height: 156,
    width: 156,
  },
  ellipse4: {
    backgroundColor: "#101f41",
    borderRadius: 78,
    height: 156,
    top: '-43%',
    left: '22%',
    width: 156,
  },
  boxError:{
    backgroundColor: 'white',
    width: "80%",
    borderRadius: 14,
    padding: 1,
    height:'20%'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Overlay the whole container
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  modalContainerError:{
    justifyContent: "center",
    alignItems: "center",
    position:'absolute',
    alignSelf:'center',
    top:'-5%',
    width: "100%",
    borderRadius: 12,
    height:'100%'
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#CCCCCC",
    marginVertical: 10,
    top:'5%'
  },
  okButton: {
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  okButtonText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
    color: "#101F41",
    textAlign: "center",
    justifyContent:'center',
   top:'-60%',
   left:'-3%'
  },
});
