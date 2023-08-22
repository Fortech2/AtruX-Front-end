import { StatusBar } from "expo-status-bar";
import React, { useState, useContext, FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Svg, { G, Circle, Defs, Path } from "react-native-svg";
import WrittenLogo from "../components/writtenLogo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import Icon from "react-native-vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import axios from 'axios';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Modal, //
  FlatList, //
  SafeAreaView,
} from "react-native";
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
import EmailComponent from "../components/EmailComponent";
import CompanyIcon from "../components/CompanyIcon";
import DropDownIcon from "../components/DropDownIcon";
import { useTranslation } from "react-i18next"; // for the translation
import i18next, { languageResources } from "../services/i18next"; // for the translation
import languageList from "../locales/languageList.json"; // for the translation
import { changeLanguage } from "i18next"; // for the translation
import { useNavigation } from "@react-navigation/native"; //
import { Picker } from "@react-native-picker/picker";
import { Button } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import Down_arrow from "../components/downarrow_modal";
import SignUp_Dispecerat from "../screens/SignUp_Dispecerat" 
import PhoneIcon from "../components/PhoneIcon"

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompany] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };
  const hideModal = () => {
    setIsModalVisible3(false);
  };
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const handleSignUp = async () => {
    try {
      if (
        !username ||
        !email ||
        !password ||
        !phoneNumber ||
        !companyName
      ) {
        setErrorMessage(t("empty_field")); // Set an error message for password mismatch
        setIsModalVisible3(true);
        return;
      }
      if (password !== confirmPassword) {
        setErrorMessage(t("password_mismatch")); // Set an error message for password mismatch
        setIsModalVisible3(true);
        return; // Stop the function execution
      }
  
      const userData = {
        role: 'driver',
        name: username,
        email,
        password,
        phone_number: phoneNumber,
        company: companyName,
      };
  
      // Log the data being sent in the request
      console.log('Request data:', userData);
      if (!isChecked) {
        setErrorMessage(t("terms_error")); // Set an error message for password mismatch
        setIsModalVisible3(true); // Show the checkbox error message
        return;
      }
      const response = await axios.post('https://atrux.azurewebsites.net/sign-up', userData);
  
      // Log the response from the backend (optional)
      console.log('Response data:', response.data);
  
      if (response.status === 200) {
        navigation.navigate('Tab_Navigation'); // Navigate to the HomeScreen
      }
    } catch (error) {
      console.error(error);
      // Rest of the error handling code...
    }
  };
  
  
  
  const OptionModal = ({ isVisible, onClose, onOptionSelect }) => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => {
                onOptionSelect(t('driver'));
                onClose();
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat_600SemiBold",
                  fontSize: 16,
                  color: "#ffff",
                  top: "-30%",
                }}
              >
                {t('driver')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => {
                onOptionSelect("DISPATCHER");
                onClose();
                navigation.navigate("SignUp_Dispecerat");
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat_600SemiBold",
                  fontSize: 16,
                  color: "#ffff",
                  top: "50%",
                }}
              >
                {t('dispatcher')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  const navigation = useNavigation();
  const { t, i18n } = useTranslation(); // for the translation
  //const [open, setOpen] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const changeLanguage = (language) => {
    console.log(`Selected language: ${language}`);
    i18n.changeLanguage(language);
    setModalVisible2(false);
  };

  const handleOpenModal = () => {
    setModalVisible2(true);
  };

  const handleCloseModal = () => {
    setModalVisible2(false);
  };

  const [montserratLoaded] = useMontserrat({
    // load any font variation in here
    Montserrat_100Thin,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
  });

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
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


  if (!montserratLoaded) {
    return null;
  }
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <CircleB style={{ top: "170%" }} />
        <SmallCircle style={{ top: "98%", left: "48%" }} />
        <DownCircle style={{ top: "50%", left: "35%" }} />
        <SmallDownCircle style={{ top: "-25%", left: "8%" }} />

        <SafeAreaView style={{ top: "-205%", left: "-40%", zIndex: 1 }}>
          <Modal
            visible={modalVisible2}
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

        <View style={styles.contour}>
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
          <WrittenLogo style={{ left: "5%" }} />
          <Text
            style={{
              fontFamily: "Montserrat_600SemiBold",
              fontSize: 24,
              color: "#474747",
              top: "-90%",
            }}
          >
            {t("SignUp.Title")}
          </Text>
          <View style={{ top: "-86%" }}>
            <TouchableOpacity
              style={{ alignItems: "center", top: "-2%", left: "-2%" }}
              onPress={() => setModalVisible(true)}
            >
              <Text
                style={{
                  fontFamily: "Montserrat_600SemiBold",
                  fontSize: 16,
                  color: "#ffff",
                }}
              >
                {t('driver')}
              </Text>
              <Down_arrow style={{ top: "-3.5%", left: "102%" }} />
            </TouchableOpacity>
            <OptionModal
              isVisible={modalVisible}
              onClose={() => setModalVisible(false)}
              onOptionSelect={handleOptionSelect}
            />
          </View>
          <View style={styles.inputView}>
            <PersonIcon style={{ left: "2%", top: "20%" }} />
            <TextInput
              style={styles.inputText}
              placeholder="Username"
              placeholderTextColor="#6D6D6D"
              onChangeText={(username) => setUsername(username)}
            />
          </View>

          <View style={styles.inputView}>
            <EmailComponent style={{ left: "2%", top: "30%" }} />
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              placeholderTextColor="#6D6D6D"
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View style={styles.inputView}>
            <PhoneIcon style={{ left: "2%", top: "20%" }} />
            <TextInput
              style={styles.inputText}
              placeholder={t("phone_number")}
              placeholderTextColor="#6D6D6D"
              onChangeText={(phone_number) => setPhoneNumber(phone_number)}
            />
          </View>

          <View style={styles.inputView}>
  <Lock style={{ left: "2%", top: "20%" }} />
  <TextInput
    style={styles.inputText}
    placeholder={t("password")}
    placeholderTextColor="#6D6D6D"
    secureTextEntry={passwordVisibility}
    value={password} // Add this line
    onChangeText={(newPassword) => setPassword(newPassword)} // Update the variable name
  />
  <TouchableOpacity
    style={{ top: "-125%", left: "40%" }}
    onPress={handlePasswordVisibility}
  >
    <Icon name="eye" size={20} style={{top: "-55%"}}/>
  </TouchableOpacity>
</View>

<View style={styles.inputView}>
  <Lock style={{ left: "2%", top: "20%" }} />
  <TextInput
    style={styles.inputText}
    placeholder={t("confirm_password")}
    placeholderTextColor="#6D6D6D"
    secureTextEntry={passwordVisibility}
    value={confirmPassword} // Add this line
    onChangeText={(newConfirmPassword) => setConfirmPassword(newConfirmPassword)} // Update the variable name
  />
  <TouchableOpacity
    style={{ top: "-125%", left: "40%" }}
    onPress={handlePasswordVisibility}
  >
    <Icon name="eye" size={20} style={{top: "-55%"}}/>
  </TouchableOpacity>
</View>

          <View style={styles.inputView}>
            <CompanyIcon style={{ left: "2%", top: "20%" }} />
            <TextInput
  style={styles.inputText}
  placeholder={t("company_name")}
  placeholderTextColor="#6D6D6D"
  onChangeText={(companyName) => {
    console.log('Company Name:', companyName);
    setCompany(companyName);
  }}
/>
          </View>

          <View style={{ top: "-188%", left: "-2%" }}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text
              style={{
                fontFamily: "Montserrat_600SemiBold",
                fontSize: 12,
                color: "#CA0000",
                top: "-50%",
                left: "-2%",
              }}
            >
              {t("terms")}
            </Text>
          </View>

          <TouchableOpacity style={styles.createAccBtn} onPress={handleSignUp}>
          {/* onPress={navigation.navigate('HomeScreenDispatcher')} */}
            <Text
              style={{
              fontFamily: "Montserrat_500Medium",
              fontSize: 14,
              color: "#FFFF",
              }}
            >
              {t("create_account")}
            </Text>
          </TouchableOpacity>

          <FullLogo style={{ top: "-197%", left: "70%" }} />

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
    left: "-12%",
  },
  contour: {
    top: "-202%",
    backgroundColor: "#D9D9D9",
    height: 565,
    width: 300,
    marginLeft: 5,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 40,
  },
  image: {
    marginBottom: 40,
  },
  selectedValueText: {
    fontSize: 16,
    paddingVertical: 10,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(233, 235, 238, 1)",
    height: 90,
    width: 170,
    top: "30%",
    left: "30%",
    opacity: 0.5,
    borderRadius: 15,
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    top: "9%",
    width: "30%",
    borderRadius: 12,
    padding: 1,
    left: "3%",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  inputView: {
    borderRadius: 12,
    width: 221,
    height: 38,
    marginBottom: 15,
    alignItems: "center",
    padding: 1,
    borderColor: "#101f41",
    borderWidth: 1,
    top: "-186%",
    alignContent: "center",
  },
  createAccBtn: {
    width: "60%",
    borderRadius: 18,
    height: 43,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#101F41",
    top: "-191%",
  },
  languageBtn: {
    padding: 10,
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 1,
  },
  language_list: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#101F41",
  },
  inputText: {
    fontFamily: "Montserrat_100Thin",
    fontSize: 15,
    color: "#474747",
    width: "74%",
    top: "-85%",
  },
  openButton: {
    padding: 16,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 10,
  },
  openButtonText: {
    color: "white",
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
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
  boxError:{
    backgroundColor: 'white',
    width: "80%",
    borderRadius: 14,
    padding: 1,
    height:'20%'
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#CCCCCC",
    marginVertical: 10,
    top:'5%'
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
});
