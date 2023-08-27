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
import NotifIconMenu from '../components/NotifIconMenu'
const Notifications = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { t, i18n } = useTranslation();
  const handleOpenModal = () => {
    setModalVisible(true);
  };
  const navigation = useNavigation();
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const [notifications, setNotifications] = useState([]);
  const [userData, setUserData] = useState(null);

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
  useEffect(() => {
    
    
    if (userData && userData.email) { // Make sure userData and email are available
      const socket = io('wss://atrux.azurewebsites.net');
  
      socket.on('connect', () => {
        console.log('Connected to WebSocket server');
        
        if (userData.email) {
          socket.emit('subscribe', { driver_email: userData.email });
          console.log(`Joining room: ${userData.email}`);
        }
      });
  
  // Listen for 'notification' events and handle them
  socket.on('notifications', (data) => {  // Change the event name here
    console.log('Received notifications event:', data);
    console.log('Received notifications message:', data.message);
    setMessageFromBackend(data.message);
    // Process the received notification
  });
  socket.on('notification-sent', () => {
     // Update the individual message
    setAllMessages((prevMessages) => [...prevMessages, t("new route")]);
  });
    socket.on('from-server', message => {
      console.log('Message rom server:', message);
      setMessageFromServer(message);
    });
    
   
  }

    
  }, []);



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
          <View>
            
        <Text
            style={{
              fontSize: 20,
              fontFamily: "Montserrat_500Medium",
              color: "#FFFFFF",
             
              zIndex: 1,
              top:'50%',
              left:'4%'
            }}
          >
            Updates from dispatcher:
          </Text>
          </View>
            <ScrollView>
              <View style={{height:600}}>

              </View>
            </ScrollView>
          </View>
      </View>
     
    </View>
    // {/* </ScrollView> */}
    // </View>
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
  }
});

export default Notifications;
