import React, { useState } from "react";
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
import Ellipse_2 from "../components/Ellipse_grey";
import { useTranslation } from "react-i18next"; // for the translation
import i18next, { languageResources } from "../services/i18next"; // for the translation
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
import Back from "../components/Back";
import Ellipse1EditProfileDriver from "../components/Ellipse1EditProfileDriver";
import Ellipse2EditProfileDriver from "../components/Ellipse2EditProfileDriver";
import Ellipse3EditProfileDriver from "../components/Ellipse3EditProfileDriver";
import Ellipse4EditProfileDriver from "../components/Ellipse4EditProfileDriver";
import Bigcomp from "../components/bigcircledp";
import Smallcomp from "../components/editpd";
import Nrd from '../components/nrdr';
import Company from '../components/companyde';
function EditDispProfile() {
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
  const handleBack = () => {
    navigation.navigate("Profile");
  };

  const [email, setNewEmail] = useState("");
  const [username, setNewUsername] = useState("");
  const [phone_nr, setNewPhoneNr] = useState(null);

  const handleSave = () => {
    // here we will set the new email, username and phone_nr
  };

  const handleCancel = () => {
    // here the data of the user needs to remain the same
  };

  return (
    <View style={{ backgroundColor: "#101F41", flex: 1 }}>
      <View style={styles.background}>
        <Ellipse1EditProfileDriver style={{ top: "0%" }} />
        <Smallcomp style={{ left: "63%", top: "-70%" }} />
        <Bigcomp style={{ top: "-130%" }} />
      </View>
      

     <TouchableOpacity style={styles.back} onPress={handleBack}>
        <Back/>
     </TouchableOpacity>
      <ScrollView>
        <View style={{ maxHeight: 900 }}>
          <ProfileCircle style={{ left: "35%", top: "10%" }} />
          <ProfileContour style={{ left: "41.5%", zIndex: 1, top: "-87%" }} />
        </View>
        <View style={styles.contour}>
        <Text style={{fontFamily:'Montserrat_500Medium', fontSize:20, color:'#101F41', top:'5%', left:'-15%'}}>
          {t("edit_profile")}
        </Text>


        {/* the data needs to be saved just when the user hits the SAVE button */}


        <View style = {styles.data}>
          <Email style={{top:'25%', left:'3%'}}/>
          <TextInput
            style={styles.inputView}
            placeholder={t("new_email")}
            placeholderTextColor="#6D6D6D"
            // onChangeText={(email) => setNewEmail(email)}
          />
        </View>


        {/* the data needs to be saved just when the user hits the SAVE button */}
 
        <View style = {styles.data}>
          <SmallProfile style={{top:'15%', left:'3%'}}/>
          <TextInput
            style={styles.inputView}
            placeholder={t("new_username")}
            placeholderTextColor="#6D6D6D"
            // onChangeText={(username) => setNewUsername(username)}
          />
        </View>


        {/* the data needs to be saved just when the user hits the SAVE button */}


        <View style = {styles.data}>
          <Phone style={{top:'15%', left:'3%'}}/>
          <TextInput
            style={styles.inputView}
            placeholder={t("new_phone_nr")}
            placeholderTextColor="#6D6D6D"
            // onChangeText={(phone_nr) => setNewPhoneNr(phone_nr)}
          />
        </View>
        <View style = {styles.data}>
          <Nrd style={{top:'15%', left:'3%'}}/>
          <TextInput
            style={styles.inputView}
            placeholder={t("new_company_name")}
            placeholderTextColor="#6D6D6D"
            // onChangeText={(phone_nr) => setNewPhoneNr(phone_nr)}
          />
        </View>
        <View style = {styles.data}>
          <Company style={{top:'15%', left:'3%'}}/>
          <TextInput
            style={styles.inputView}
            placeholder={t("new_nr_dr")}
            placeholderTextColor="#6D6D6D"
            // onChangeText={(phone_nr) => setNewPhoneNr(phone_nr)}
          />
        </View>
        <View style={styles.informationTextContainer}>
          <Text style = {styles.textInfo}>
            {t("change_info")}
          </Text>
        </View>


        <TouchableOpacity
          style = {styles.saveView}
          onPress={() => {handleSave}}
        >
          <Text style = {styles.textStyle}>
            {t('save')}
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style = {styles.cancelView}
          onPress={() => {handleCancel}}
        >
          <Text style = {styles.textStyle}>
            {t('cancel')}
          </Text>
        </TouchableOpacity>


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
    height: 500,
    width: 300,
    marginLeft: 5,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 40,
    elevation: 10, //only android
    zIndex: 1,
    opacity: 1,
    top: "-45%",
  },
  background: {
    position:'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
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
    top: "10%",
  },
  contourSmall: {
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
    width: 280,
    height: 210,
    marginTop: -110,
    marginBottom: 624,
    marginLeft: 0,
    marginRight: 250,
    top: "14%",
    borderWidth: 0, // Border set to 0
  },
  ellipseWrapper2: {
    // backgroundColor: "#45b871",
    width: 231,
    height: 274,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 0,
    marginRight: 10,
    top: "-20%",
    borderWidth: 0, // Border set to 0
  },
  circleRightWrapper: {
    // backgroundColor: "#45b871",
    width: 170,
    height: 330,
    marginBottom: 10,
    marginLeft: 250,
    marginRight: 0,
    top: "35%",
    borderWidth: 0, // Border set to 0
    position: "absolute",
    left: "7%",
  },
  profileContour: {
    width: 170,
    height: 170,
    justifyContent: "center",
    top: "-120%",
    left: "25%",
    // backgroundColor: "#8447FF",
  },
  inputView: {
    fontFamily: "Montserrat_100Thin",
    fontSize: 15,
    color: "#474747",
    width: "79%",
    top: "-90%",
    left: "5%",
  },
  informationTextContainer: {
    width: 200,
    height: 30,
    top: "8.5%",
    // backgroundColor: "#8447FF"
  },
  textInfo: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 13,
    top: "10%",
    left: "8%",
    color: "#0F1F41",
  },
  saveView: {
    width: "35%",
    borderRadius: 10,
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#101F41",
    left: "10%",
    top: "86%",
    elevation: 10, //only android
    position: "absolute",
  },
  cancelView: {
    width: "35%",
    borderRadius: 10,
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CA0000",
    left: "55%",
    top: "86%",
    elevation: 10, //only android
    position: "absolute",
  },
  textStyle: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 16,
    top: "0%",
    left: "0%",
    color: "#D9D9D9",
  },
});
export default EditDispProfile;
