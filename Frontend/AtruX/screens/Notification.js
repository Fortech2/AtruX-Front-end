
import React, { useState, useEffect, useRef} from "react";
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
  Pressable
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next"; // for the translation
import i18next, { languageResources } from "../services/i18next"; // for the translation
import {
  useFonts as useMontserrat,
  Montserrat_100Thin,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import FormaNotification1 from "../components/FormaNotification1";
import FormaNotif2 from "../components/FormaNotif2";
import Linii from "../components/Linii";
import NotificationIcon2 from "../components/NotificationIcon2";
import Back from "../components/Back";
import { BlurView } from 'expo-blur';
import ExitIcon from '../components/ExitIcon';
import EllipseMenuHS1 from '../components/EllipseMenuHS1';
import EllipseMenu2 from '../components/EllipseMenu2';
import VectorMenu from '../components/VectorMenu';
import SettingsIcon from '../components/SettingsIcon';
import KeyWordsIcon from '../components/KeyWordsIcon';
import Modal from "react-native-modal";
import PushNotification from 'react-native-push-notification';
import CustomSound from '../assets/mixkit-vintage-warning-alarm-990.wav';
import initializeWebSocket from '../websocketService';
import NotifIconMenu from '../components/NotifIconMenu'
import { Audio } from 'expo-av';

import { io } from 'socket.io-client';
import axios from "axios";
import More from '../components/MoreButtonNotif';

const Notifications = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleAlarm, setModalVisibleAlarm] = useState(false);
  const { t, i18n } = useTranslation();
  const handleOpenModal = () => {
    setModalVisible(true);
  };
  const navigation = useNavigation();
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleOpenModalAlarm = () => {
    setModalVisibleAlarm(true);
  };
  const handleCloseModalAlarm = () => {
    setModalVisibleAlarm(false);
  };
  const [notifications, setNotifications] = useState([]);
  const [userData, setUserData] = useState(null);
  const handleNavigate = () => {
    // Perform any other login-related logic here if needed
    // For now, we will simply navigate to the Home screen (App_Driver)
    // Tab_Navigation
    navigation.navigate('YourRoutes');
  };
  const HandleAlarm = () =>{
    navigation.navigate("PastImages")
  }
  const fetchUserData = async () => {
    try {
      const response = await axios.get("https://atrux.azurewebsites.net/user");
      const userData = response.data;
      console.log(userData);
      setUserData(userData); // Update the state with fetched user data
    } catch (error) {
      console.error('Error fetching user data, look:', error);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  
  const [messageFromServer, setMessageFromServer] = useState('');
  const [messageFromBackend, setMessageFromBackend] = useState('');
  const [messageFromDisp, setMessageFromDisp] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  const [allMessagesA, setAllMessagesA] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Make the API request to fetch images
    axios.get("https://atrux.azurewebsites.net/images")
      .then(response => {
        
        const lastImage = response.data.image[response.data.image.length - 1];
        setImages([lastImage]); // Set only the last image in the state
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);
  useEffect(() => {
    
    
    if (userData && userData.email) { 
      const socket = io('wss://atrux.azurewebsites.net');
  
      socket.on('connect', () => {
        console.log('Connected to WebSocket server');
        
        if (userData.email) {
          socket.emit('subscribe', { driver_email: userData.email });
          console.log(`Joining room: ${userData.email}`);
        }
      });
      socket.on('notifications', (data) => {
        if (data && data.message) {
          console.log('Received notifications event:', data);
          console.log('Received notifications message:', data.message);
          console.log('Complete data:', data);
          setMessageFromBackend(data.message);
          // Process the received notification
        } else {
          console.log('Received notifications event without data:', data);
        }
      });
  socket.on('notification-sent', () => {
     // Update the individual message
     console.log('Received notifications event:');
    setAllMessages((prevMessages) => [...prevMessages, t("new route")]);
  });
  socket.on('to-server', message => {
      console.log('Message rom server:', message);
      setMessageFromServer(message);
    });
    
  socket.on('handle-images', () => {
    // Update the individual message
    console.log('Received alarm');
   
 });
    socket.on('image-notification-sent', () => {
      // Update the individual message
      setAllMessagesA((prevMessages) => [...prevMessages, t("new alarm")]);
      console.log('Received image as alarm');
   });
   
  }
  }, [userData]);



  return (
    <View style={styles.background}>
      <View>
        <FormaNotification1 style={{ top: "8%", left: "68%" }} />
        <FormaNotif2 style={{ top: "-1%", left: "0%" }} />
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
                  navigation.navigate("Settings");
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
                  
                  navigation.navigate("Notificationss");
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
        <NotificationIcon2 style={{ top: "-45%", left: "6%" }} />
        <Back style={{ top: "-49%", left: "6%" }} />
        
        <View style={styles.headerText}>
        <Text style={styles.Notifications}>{t("notifications")}</Text>
      </View>
        <View style={styles.container_update}>
          <View style = {styles.inp}>
            
        <Text
            style={{
              fontSize: 20,
              fontFamily: "Montserrat_500Medium",
              color: "#FFFFFF",
             
              zIndex: 1,
              top:'15%',
              left:'4%'
            }}
          >
            Updates from dispatcher:
          </Text>
          </View>
            <ScrollView>
              <View style={{height:600}}>
     </View>
     {allMessages.map((message, index) => (
      <View key={index}>

      
      <View  style={styles.notification}>

        <Text style={{
          fontFamily: 'Montserrat_500Medium',
          fontSize: 18,
          color: '#101F41',
          alignSelf: 'flex-start',
          left: '2%',
          
        }}>{message}</Text>
       
</View>
 <TouchableOpacity style={{top:'-81.5%', left:'87%'}} onPress={handleNavigate}>
 <More/>
</TouchableOpacity>

</View>
    ))}
            
            </ScrollView>
          </View>
          <View style = {styles.container_update2}>
          <View style = {styles.inp}>
            
            <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Montserrat_500Medium",
                  color: "#FFFFFF",
                 
                  zIndex: 1,
                  top:'15%',
                  left:'4%'
                }}
              >
                Security:
              </Text>
              </View>
              <ScrollView>
              <View style={{height:600}}>
   
     {allMessagesA.map((message, index) => (
      <View key={index}>

      
      <View  style={styles.notification2}>

        <Text style={{
          fontFamily: 'Montserrat_500Medium',
          fontSize: 18,
          color: '#101F41',
          alignSelf: 'flex-start',
          left: '2%',
          
        }}>{message}</Text>
       
</View>

 <TouchableOpacity style={{top:'16%', left:'87%'}} onPress={handleOpenModalAlarm}>
 <More/>
</TouchableOpacity>
</View>
    ))}
            </View>
            </ScrollView>
            <SafeAreaView style={{ top: "-183%", left: "38%", zIndex: 1, flex: 1 }}>
        <Modal
          visible={modalVisibleAlarm}
          animationType="fade"
          transparent={true}
          onRequestClose={handleCloseModalAlarm}
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
              <Pressable style={styles.exitButton} onPress={handleCloseModalAlarm}>
                <ExitIcon />
              </Pressable>
              <Text style={styles.menuText}>{t("image_detected")}</Text>

              <View>
      {images.map((image, index) => (
        <View key={index}>
          <Image
            source={{ uri: `data:image/jpeg;base64,${image.binary_data}` }}
            style={{ width: 200, height: 200, top: '25%' }}
          />
        </View>
      ))}
    </View>

            </View>
          </BlurView>
        </Modal>
      </SafeAreaView>        

          </View> 
          
      </View>
     
    </View>
    // {/* </ScrollView> */}
    // </View
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#101F41",
  },
  headerText: {
    flexDirection: "row",
    alignItems: "center",
    position:'absolute',
    
  },
  Notifications: {
    fontSize: 35,
    fontFamily: "Montserrat_500Medium",
    color: "#FFFFFF",
    left: "120%",
    top:'35%'
  },
  cele2chestiialbe: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  dreptunghi1: {
    width: 320,
    height: 264,
    backgroundColor: "#D9D9D9",
    borderRadius: 40,
    left: "37.5%",
    top: "30%",
    zIndex: 1,
    justifyContent: "center",
  },
  menuButton: {
    padding: 16,
    borderRadius: 8,
    alignSelf: "center",
    top:'-45%',
    zIndex:1,
    left:'40%'
  },
  dreptunghi2: {
    width: 320,
    height: 264,
    backgroundColor: "#D9D9D9",
    borderRadius: 40,
    top: "87%",
    left: "-83%",
    justifyContent: "center",
  },
  butoaneAlbastre: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
  },
  dreptunghiAlbastru1: {
    width: 294,
    height: 46,
    backgroundColor: "#101F41",
    borderRadius: 40,
    left: "215%",
    top: "35%",
    zIndex: 1,
    justifyContent: "center",
  },
  dreptunghiAlbastru2: {
    width: 294,
    height: 46,
    backgroundColor: "#101F41",
    borderRadius: 40,
    left: "-420%",
    top: "95%",
    zIndex: 1,
    justifyContent: "center",
  },
  text1: {
    fontSize: 22,
    fontFamily: "Montserrat_600SemiBold",
    color: "#FFFFFF",
    top: "49%",
    left: "220%",
  },
  text2: {
    fontSize: 20,
    fontFamily: "Montserrat_600SemiBold",
    color: "#FFFFFF",
    top: "139%",
    left: "-112%",
    zIndex: 1,
    position: "absolute",
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
    fontSize: 28,
    color: "#F8F8F8",
    top: "-90%",
    left: "5%"
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
  container_update:{
    backgroundColor: "#d9d9d9",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    height:'18%',
    width:'80%',
    position:'absolute',
    top:'10%',
    alignSelf:'center',
    borderRadius: 40,
    elevation:10
  },
  container_update2:{
    backgroundColor: "#d9d9d9",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    height:'18%',
    width:'80%',
    position:'absolute',
    top:'29%',
    alignSelf:'center',
    borderRadius: 40,
    elevation:10
  },
  notification:{

    alignSelf:'center',
    alignItems:'center',
    top:'-79%',
    borderBottomWidth:1,
    width:'90%',
    borderBottomColor:'#101F41',
    
  },
  notification2:{

    alignSelf:'center',
    alignItems:'center',
    top:'19%',
    borderBottomWidth:1,
    width:'90%',
    borderBottomColor:'#101F41',
    
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#101F41",
    zIndex:4,
    top:'4%'

  },
  inp:{
    backgroundColor: "#101F41",
    shadowColor: "#000",
    
    height:'14%',
    width:'95%',
    borderRadius: 40,
    top:'5%',
    alignSelf:'center',
    textAlign:'center',
    
  }
});

export default Notifications;
