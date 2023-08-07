

import React,{useEffect, useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import ProfileEllipse from '../components/Ellipse_up';
import Ellipse from '../components/Ellipse_2';
import axios from 'axios';
import Ellipse_2 from '../components/Ellipse_grey';

import { useTranslation } from "react-i18next"; // for the translation
import i18next, { languageResources } from "../services/i18next"; // for the translation
import languageList from "../locales/languageList.json"; // for the translation
import Profil from '../components/Profil_page';
import ProfileCircle from '../components/Profile_Circle';
import ProfileContour from '../components/Profile_contour';
import {
  useFonts as useMontserrat,
  Montserrat_100Thin,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import Email from '../components/EmailIcon';
import SmallProfile from '../components/SmallProfile';
import Phone from '../components/Phone';
import EditProfile from '../components/EditProfile';
import Back from '../components/Back';
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
    navigation.navigate('ProfileEditD');
  };
  const handleBack = () => {
    // Perform any other login-related logic here if needed
    // For now, we will simply navigate to the Home screen (App_Driver)
    navigation.navigate('Homes');
  };
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://18.185.137.152/user');
      setUserData(response.data);
      setLoading(false); // Set loading to false when the data is fetched successfully
    } catch (error) {
      console.error('Error:', error);
      setLoading(false); // Set loading to false when there is an error
      // Handle the error here and show an error message to the user
    }
  };
  return (
    <View style={styles.container}>
      {/* Fixed background view */}
      <View style={styles.background}>
        <ProfileEllipse style={{ position: 'absolute' }} />
        <Ellipse style={{ position: 'absolute', top: '40%', left: '64%' }} />
        <Ellipse_2 style={{ top: '60%' }} />
      </View>

     
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <Profil style={{left:'5%', top:'10%'}}/>
      <Text style={{fontFamily:'Montserrat_500Medium', fontSize:30, color:'white', top:'-90%', left:'18%'}}>
      {t("profile")}
      </Text>
      <View style={{justifyContent: 'center', top:'-13%'}}>
      <ProfileCircle style={{left:'35%', top:'1%'}}/>
      <ProfileContour style={{ left:'42.5%', zIndex:1, top:'-97%'}}/>
      <View style={styles.contour}>
      <Text style={{fontFamily:'Montserrat_500Medium', fontSize:20, color:'#101F41', top:'8%', left:'-15%'}}>
        {t("general_data")}
      </Text>
      {userData ? (
        <>
          <View style={styles.data}>
            <Email style={{ top: '25%', left: '3%' }} />
            <Text style={{fontFamily:'Montserrat_100Thin', fontSize:15, color:'#101F41', top:'-80%', left:'3%'}}>{userData.email}</Text>
          </View>
          <View style={styles.data}>
            <SmallProfile style={{ top: '23%', left: '3%' }} />
            <Text style={{fontFamily:'Montserrat_100Thin', fontSize:15, color:'#101F41', top:'-80%', left:'3%'}}>{userData.name}</Text>
          </View>
          {userData.role === 'dispatcher' && (
            <View style={styles.data}>
              <Phone style={{ top: '23%', left: '3%' }} />
              <Text style={{fontFamily:'Montserrat_100Thin', fontSize:15, color:'#101F41', top:'-80%', left:'3%'}}>{userData.phone_number}</Text>
            </View>
          )}
          {/* Display additional fields specific to the dispatcher */}
        </>
      ) : (
        <Text style={{fontFamily:'Montserrat_100Thin', fontSize:15, color:'#101F41', top:'30%'}}>Loading...</Text>
      )}
      </View>

      
     </View>
     <TouchableOpacity style={styles.smallContour} onPress={handleEdit}>
        <EditProfile style={{top:'25%', left:'24%', zIndex:1}}/>
        </TouchableOpacity>
      <TouchableOpacity style={styles.back} onPress={handleBack}>
          <Back/>
        </TouchableOpacity>
       
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
    position: "absolute",
    zIndex: 1,
    opacity: 1,
    top:'-35%',
  },
  scrollContent: {
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#E9EBEE',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  text: {
    fontSize: 42,
  },
  data:{
    borderRadius: 12,
    width: 221,
    height: 38.7,
    marginBottom: 20,
    alignItems: "center",
    padding: 1,
    borderColor: "#101f41",
    borderWidth: 1,
    alignContent: "center",
    top:'15%'
  },
  smallContour:{
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
    top:'5%',
    left:'90%',
    alignItems:'center'
  },
  back:{
   
    
    height: 40,
    width: 40,
    marginLeft: 5,
    borderRadius: 10,
 
    position: "absolute",
    zIndex: 1,
    opacity: 1,
    top:'5%',
    left:'4%',
    alignItems:'center'
  }
})
export default DispProfileScreen;




