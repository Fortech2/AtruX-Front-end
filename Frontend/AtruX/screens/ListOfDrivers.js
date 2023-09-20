
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

import Component from '../components/UpcomponentList';
import BlueArrow from '../components/BlueAr';
import BlueMenu from '../components/BlueList';
import Modal from "react-native-modal";
import axios from 'axios';
import {
  useFonts as useMontserrat,
  Montserrat_100Thin,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import React, { useState, useEffect } from 'react';
import { t } from 'i18next';
import { useNavigation } from "@react-navigation/native";
import Linii from '../components/Linii2';
import ExitIcon from '../components/ExitIcon';
import EllipseMenuHS1 from '../components/EllipseMenuHS1';
import EllipseMenu2 from '../components/EllipseMenu2';
import VectorMenu from '../components/VectorMenu';
import SettingsIcon from '../components/SettingsIcon';
import KeyWordsIcon from '../components/KeyWordsIcon';
import NotifIconMenu from '../components/NotifIconMenu';
import MoreButton from '../components/MoreButton';
import CircleJ from '../components/circle';
import { BlurView } from 'expo-blur'
const ListOfDrivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const [allDrivers, setAllDrivers] = useState([]);
  const [dispatcherId, setDispatcherId] = useState(null);
  const link = 'https://atrux-prod.azurewebsites.net'
  useEffect(() => {
    // Fetch the user data
    axios.get(`${link}/user`, { withCredentials: true })
      .then(response => {
        const userData = response.data;
        if (userData.role === 'dispatcher') {
          // Get the dispatcher's drivers
          const driversForDispatcher = userData.drivers; // Assuming the drivers are now directly in the userData
          
          console.log('Drivers for Dispatcher:', driversForDispatcher); // Console log the drivers
          
          setDrivers(driversForDispatcher);
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);
  useEffect(() => {
    // Reset the modal visibility when the component is unmounted
    return () => {
      setModalVisible(false);
    };
  }, []);

  return (
    <View style={{backgroundColor:'#101F41',flex:1}}>
      
      
      <View >
        
        <Component />
        
         <TouchableOpacity style={{top:'-98.5%', left:'4%'}}>
        <BlueArrow style={{top:'-0.3%'}}/>
        </TouchableOpacity>
        <Text style={{top:'-199.1%', color:'#101F41', fontSize:35, left:'22%', width:'44%', fontFamily:'Montserrat_500Medium'}}>
        {t("list_of_drivers")}
       </Text>
       <BlueMenu style={{top:'-202.4%', left:'12%'}}/>
       
      </View>
    
      <View style={styles.contour}>
        
          <ScrollView>
            <View style={{height:1000}}>
          {drivers && (
      <View>
        {drivers.map(driverName => (
          <View key={driverName} style={styles.data}>
          
            <Text
              style={{
                fontFamily: 'Montserrat_500Medium',
                fontSize: 22,
                color: '#101F41',
                textAlign: 'left',
                alignSelf: 'center',
              }}
            >
              {driverName}
            </Text>
           
           <TouchableOpacity style={{position:'absolute', left:'86%', alignItems:'center', width:'53%', height:'100%', top:'9%'}} onPress={console.log("yep")}>
              <MoreButton/>
           </TouchableOpacity>
            
          </View>
           
        ))}
      </View>
    )}
</View>
          </ScrollView>
</View>
<View>
<TouchableOpacity style={{ left: '84%', top: '-387%' }} onPress={() => {
          handleOpenModal();
          console.log('Modal opened:', modalVisible); // Add this line
        }}>
  <Linii />
</TouchableOpacity>

      <SafeAreaView style={{ top: '-183%', left: '38%', zIndex: 1,flex:1 }}>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <BlurView intensity={20} style={styles.blurContainer}>

          <View style={styles.modalContainer}>
          <View style = {styles.ellipseWrapper1}>
                  <EllipseMenuHS1 style={{ top: "0%", left: "0%" }}/>
                </View>

                <View style = {styles.ellipseWrapper2}>
                  <EllipseMenu2 style={{ top: "-1%", left: "0%" }}/>
                </View>

                <View style = {styles.vectorWrapper}>
                  <VectorMenu style={{ top: "2%", left: "5%" }}/>
                </View>
            <Pressable style={styles.exitButton} onPress={handleCloseModal}>
              <ExitIcon />
            </Pressable>
            <Text style={styles.menuText}>{t("menu")}</Text>
            
            <TouchableOpacity style={styles.containerInputModal}
            onPress={() => {
              console.log("Navigating to Settings");
              navigation.navigate('Setings');
              handleCloseModal()
              // Add navigation logic here
            }}
            >
              <SettingsIcon style={{ top: "8%", left: "5%" }}/>
              <Text style={styles.inputText}>{t("settings")}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.containerInputModal}>
              <KeyWordsIcon style={{ top: "8%", left: "5%" }}/>
              <Text style={styles.inputText}>{t("keywords")}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.containerInputModal}
              onPress={() => {
                console.log("Navigating to Settings");
                navigation.navigate('Notification');
                handleCloseModal()
                // Add navigation logic here
              }}
            >
              <NotifIconMenu style={{ top: "20%", left: "5%" }}/>
              <Text style={styles.inputText}>{t("notifications")}</Text>
            </TouchableOpacity>
            
          </View>
        </BlurView>
      </Modal>

      </SafeAreaView>
      </View>
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
    height: '80%',
    width: '80%',
    marginLeft: 5,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 40,
    elevation: 10, //only android
    zIndex: 1,
    opacity: 1,
    top:'-295%',

    
   
   
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
    
    alignItems: "center",
    padding: 1,
    borderColor: "#101f41",
    borderWidth: 1,
    alignContent:'center',
    marginTop:'5%'

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
})
export default ListOfDrivers;
