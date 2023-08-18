import React, { useEffect, useState } from "react";

import { GestureHandlerRootView } from "react-native-gesture-handler";
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
import { useNavigation } from "@react-navigation/native";
import ProfileEllipse from "../components/Ellipse_up";
import Ellipse from "../components/Ellipse_2";
import axios from "axios";
import Ellipse_2 from "../components/Ellipse_grey";

import { useTranslation } from "react-i18next"; // for the translation
import i18next, { languageResources } from "../services/i18next"; // for the translation
import languageList from "../locales/languageList.json"; // for the translation
import Profil from "../components/Profil_page";
import ProfileCircle from "../components/Profile_Circle";
import ProfileContour from "../components/Profile_contour";
import {
  useFonts as useMontserrat,
  Montserrat_100Thin,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import Email from "../components/EmailIcon";
import SmallProfile from "../components/SmallProfile";
import Phone from "../components/Phone";
import EditProfile from "../components/EditProfile";
import Back from "../components/Back";
import Down_circle from "../components/downcircleb";
import UpCircle from "../components/upcircle";
function DispProfileScreen() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    console.log(`Selected language: ${language}`);
    i18n.changeLanguage(language);
    setModalVisible(false);
  };
  const [montserratLoaded] = useMontserrat({
    // load any font variation in here
    Montserrat_100Thin,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
  });
  const handleEdit = () => {
    // Perform any other login-related logic here if needed
    // For now, we will simply navigate to the Home screen (App_Driver)
    navigation.navigate("ProfileEditD");
  };
  const handleBack = () => {
    // Perform any other login-related logic here if needed
    // For now, we will simply navigate to the Home screen (App_Driver)
    navigation.navigate("Homes");
  };
  const [userData, setUserData] = useState(null);
  const [dispatcherName, setDispatcherName] = useState("");
  const [numberOfDrivers, setNumberOfDrivers] = useState(0);
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("https://atrux.azurewebsites.net/user");
      setUserData(response.data);
      if (response.data && response.data.dispatcherName) {
        setNumberOfDrivers(response.data.numberOfDrivers);

        setDispatcherName(response.data.dispatcherName);
      }
      setLoading(false); // Set loading to false when the data is fetched successfully
    } catch (error) {
      console.error("Error:", error);
      setLoading(false); // Set loading to false when there is an error
      // Handle the error here and show an error message to the user
    }
  };
  return (

    <View style={{ backgroundColor: '#101F41', flex: 1 }} >
      <View style={styles.background}>
        <UpCircle style={{ top: "0%" }} />
        <Ellipse_2 style={{ top: "-50%" }} />
        <Down_circle style={{ top: "-130%", left: "40%" }} />
    </View>
    <TouchableOpacity style={styles.smallContour} onPress={handleEdit}>
        <EditProfile style={{ top: "25%", left: "24%", zIndex: 1 }} />
      </TouchableOpacity>

      <ScrollView

        style={{  flecgrow:1 }} >
          <View style={{maxHeight:900}}>
         <ProfileCircle style={{  left: "35%", top: "10%" }} />
         <ProfileContour style={{ left: "42.5%", zIndex: 1, top: "-87%" }} />
         <Text style={{top:'-172.5%', color:'white', left:'40%', fontFamily:'Montserrat_100Thin', fontSize:20}}>Disp: {dispatcherName}</Text>
        <View style={styles.contour}>
        <Text
            style={{
              fontFamily: "Montserrat_500Medium",
              fontSize: 20,
              color: "#101F41",
              top: "8%",
              left: "-15%",
            }}
          >
            {t("general_data")}
          </Text>
          {userData ? (
            <>
              <View style={styles.data}>
                <Email style={{ top: "25%", left: "3%" }} />
                <Text
                  style={{
                    fontFamily: "Montserrat_100Thin",
                    fontSize: 15,
                    color: "#101F41",
                    top: "-80%",
                    left: "3%",
                  }}
                >
                  {userData.email}
                </Text>
              </View>
              <View style={styles.data}>
                <SmallProfile style={{ top: "23%", left: "3%" }} />
                <Text
                  style={{
                    fontFamily: "Montserrat_100Thin",
                    fontSize: 15,
                    color: "#101F41",
                    top: "-80%",
                    left: "3%",
                  }}
                >
                  {userData.name}
                </Text>
              </View>
              {userData.role === "dispatcher" && (
                <View style={styles.data}>
                  <Phone style={{ top: "23%", left: "3%" }} />
                  <Text
                    style={{
                      fontFamily: "Montserrat_100Thin",
                      fontSize: 15,
                      color: "#101F41",
                      top: "-80%",
                      left: "3%",
                    }}
                  >
                    {userData.phone_number}
                  </Text>
                </View>
              )}
              {/* Display additional fields specific to the dispatcher */}
            </>
          ) : (
            <Text
              style={{
                fontFamily: "Montserrat_100Thin",
                fontSize: 15,
                color: "#101F41",
                top: "30%",
              }}
            >
              Loading...
            </Text>
            )}
         </View>
         <View style = {styles.contourSmall}>
        <Text
            style={{
              fontFamily: "Montserrat_500Medium",
              fontSize: 20,
              color: "#101F41",
              top: "12%",
              left: "-15%",
            }}
          >
            {t("drivers_info")}
          </Text>
          <View style={styles.line} />
          <Text
            style={{
              fontFamily: "Montserrat_100Thin",
              fontSize: 20,
              color: "#101F41",
              top: "20%",
              left: "0%",
            }}
          >
            {t("nr_of_drivers")}
          </Text>
          <Text
                    style={{
                      fontFamily: "Montserrat_500Medium",
                      fontSize: 25,
                      color: "#101F41",
                      top: "30%",
                      left: "0%",
                    }}
                  >
                    {numberOfDrivers}
                  </Text>
          </View>

       </View>

      
        
          
      </ScrollView>

    </View>

    );
}

const styles = StyleSheet.create({
  contour: {
    backgroundColor: "#d9d9d9",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    height: 300,
    width: 300,
    marginLeft: 5,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 40,
    elevation: 10, //only android
    zIndex: 1,
    opacity: 1,
    top: "-170%",
   
  },
  line: {
    width: "95%",
    height: 1,
    backgroundColor: "#101F41",
    marginVertical: 10,
    top:'15%'
  },
  contourSmall:{
    backgroundColor: "#d9d9d9",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    height: 200,
    width: 300,
    marginLeft: 5,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 40,
    elevation: 10, //only android
    zIndex: 1,
    opacity: 1,
    top: "-165%",
  },
  scrollContent: {
    flexGrow: 1,
    height:300
  },
  container: {
    flex: 1,
    backgroundColor: "#101F41",
  },
  background: {
    position:'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  text: {
    fontSize: 42,
  },
  data: {
    borderRadius: 12,
    width: 221,
    height: 38.7,
    marginBottom: 20,
    alignItems: "center",
    padding: 1,
    borderColor: "#101f41",
    borderWidth: 1,
    alignContent: "center",
    top: "25%",
  },
  smallContour: {
    backgroundColor: "#d9d9d9",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    height: 40,
    width: 40,
    marginLeft: 5,
    borderRadius: 10,
    elevation: 2, //only android
    position: "absolute",
    zIndex: 1,
    opacity: 1,
    top: "6%",
    left: "80%",
    alignItems: "center",
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
export default DispProfileScreen;
