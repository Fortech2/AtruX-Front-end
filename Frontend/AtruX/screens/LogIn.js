import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Svg, { G, Circle, Defs, Path } from "react-native-svg";
import WrittenLogo from '../components/writtenLogo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
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
  TouchableHighlight
} from "react-native";

import {
  useFonts as useMontserrat,
  Montserrat_100Thin,
  Montserrat_600SemiBold,
  Montserrat_500Medium
} from "@expo-google-fonts/montserrat";
import HomeScreen from './HomeScreen';
import CircleB from '../components/backgroundCircles';
import SmallCircle from '../components/SmallCircleB';
import DownCircle from '../components/DownCircle';
import SmallDownCircle from '../components/SmallDownCircle';
import PersonIcon from '../components/personIcon';
import Lock from '../components/LockLogInIcon';
import EyeIcon from '../components/EyeComponent';
import FullLogo from '../components/LogoComplet';
import {useTranslation} from 'react-i18next'; // for the translation
import i18next, {languageResources} from '../services/i18next'; // for the translation
import languageList from '../locales/languageList.json' // for the translation
import { changeLanguage } from "i18next"; // for the translation
import { useNavigation } from "@react-navigation/native"; //
import ForgotPassword from './ForgotPassword' //
import SignUp from "./SignUp";
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import Arrow from '../components/arrow_language';
import { useHistory } from 'react-router-dom';
export default function LogIn() {
  const {t, i18n} = useTranslation(); 
  const changeLanguage = (language) => {
    console.log(`Selected language: ${language}`);
    i18n.changeLanguage(language); 
    setModalVisible(false);
  };
  const [modalVisible, setModalVisible] = useState(false);
  
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
        Montserrat_500Medium
      });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rightIcon, setRightIcon] = useState('eye');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIconColor, setRightIconColor] = useState('#6D6D6D');
  const [isChecked, setChecked] = useState(false);
  const handlePasswordVisibility = () => {
  if (rightIcon === 'eye') {
      setRightIcon('eye-slash');
      setRightIconColor('#6D6D6D')
      setPasswordVisibility(!passwordVisibility);
  } else if (rightIcon === 'eye-slash') {
      setRightIcon('eye');
      setRightIconColor('#6D6D6D')
      setPasswordVisibility(!passwordVisibility);
    }
  };
  // const history = useHistory();
  const handleLogin = () => {
    // axios.post('/api/login', { username, password }, { withCredentials: true })
    //   .then((response) => {
    //     history.push('/home');
    //   })
    //   .catch((error) => {
    //     console.error('Login error:', error);
        
    //   });
  };

  
  if (!montserratLoaded) {
    return null;
  }
  
return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <CircleB style={{top:'170%'}}/>
      <SmallCircle style={{top:'98%', left:'48%'}}/>
      <DownCircle style={{top:'50%',  left:'35%'}}/>
      <SmallDownCircle style={{top:'-30%',  left:'8%'}}/>
      
      
     <SafeAreaView style={{top:'-208%', left:'-34%'}}>
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
              <TouchableOpacity style={styles.languageBtn} onPress={() => changeLanguage(item)}>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 16, color: '#ffff' }}>
                {languageList[item].name}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </Modal>

      <TouchableOpacity onPress={handleOpenModal} style={styles.openButton}>
        <Text style={styles.openButtonText}>{t('language')}</Text>
        
      </TouchableOpacity>
    </SafeAreaView>
      <View style={styles.contour}>
        <WrittenLogo style={{left:'5%'}}/>
        <Text style={{fontFamily:'Montserrat_600SemiBold', fontSize:24, color:'#474747', top:'-85%'}}>{t('SignIn.Title')}</Text>
        <View style={styles.inputView}>
          <PersonIcon style={{left:'2%', top:'30%'}}/>
          <TextInput
            style={{fontFamily:'Montserrat_100Thin', fontSize:15, color:'#474747', width:'74%', top:'-75%'}}
            placeholder={t('emailOrUsername')}
            placeholderTextColor="#6D6D6D"
            onChangeText={(email) => setEmail(email)}
          /> 
        </View> 

       
        <View style={styles.inputView}>
          <Lock style={{left:'2%', top:'30%'}}/>
          <TextInput
            style={{fontFamily:'Montserrat_100Thin', fontSize:15, color:'#474747', width:'74%', top:'-75%'}}
            placeholder={t('password')}
            placeholderTextColor="#6D6D6D"
            secureTextEntry={passwordVisibility}
            onChangeText={(password) => setPassword(password)}
          /> 
          <TouchableOpacity style={{top: '-125%', left:'40%'}}
            onPress={handlePasswordVisibility}>
            <Icon name = 'eye' size = {20}/> 
          </TouchableOpacity>
        </View>
      
        <View style={{top:'-75%', left:'-25%'}}>
          <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          <Text style={{fontFamily:'Montserrat_500Medium', fontSize:12, color:'#000000', top:'-50%', left:'12%'}}>{t('rememberUser')}</Text>
        </View>

        <TouchableOpacity style={styles.loginBtn} 
          onPress={() => {handleLogin}}>
          <Text  style={{fontFamily:'Montserrat_500Medium', fontSize:18, color:'#FFFF'}}>{t('LogIn.Title')}</Text> 
        </TouchableOpacity>
        
        <TouchableOpacity style = {{top:'-72%', left:'0%'}}
          onPress={() => { navigation.navigate('ForgotPassword') }}>
          <Text  style={{fontFamily:'Montserrat_500Medium', fontSize:14, color:'#CA0000'}}>{t('forgot_password')}</Text> 
        </TouchableOpacity>

        <FullLogo style = {{top:'-72%', left:'65%'}}/>
       
      </View>
      <View style={{top:'-198%',left:'-10%'}}>
      <Text  style={{fontFamily:'Montserrat_500Medium', fontSize:12, color:'#FFFF'}}>{t('new_acc')}</Text>
      <TouchableOpacity style={{left:'40%', top:'-50%'}} onPress={() => { navigation.navigate('SignUp') }}>  
        <Text  style={{fontFamily:'Montserrat_600SemiBold', fontSize:12, color:'#73B3D3' }}>{t('SignUp.Title')}</Text> 
      </TouchableOpacity>
      </View>
    </View>
  </TouchableWithoutFeedback>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9EBEE",
    alignItems: "center",
    justifyContent: "center",
  },
  checkbox: {
    margin: 8,
    borderColor:'#101f41',
    borderWidth:1,
  },
  contour:{
    top:"-203%",
    backgroundColor: "#D9D9D9",
    height: 547,
    width: 300,
    marginLeft: 5,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 40,
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    borderRadius: 12,
    width: "90%",
    height:  50,
    marginBottom: 20,
    alignItems: "center",
    padding: 1,
    borderColor:'#101f41',
    borderWidth:1,
    top:'-75%',
    alignContent:'center'
  },
  
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    top:"12%",
    width: '30%',
    borderRadius: 12,
    padding: 1,
    left: '5%'
  },
  languageBtn: {
    padding: 16,
    fontFamily: 'Montserrat_600SemiBold'
  },
  openButton: {
    padding: 16,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
  },
  openButtonText: {
    color: 'white',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16
  },
  loginBtn: {
    width: "80%",
    borderRadius: 18,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
   
    backgroundColor: "#101F41",
    top:'-75%'
  },
  language_list: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#D9D9D9',

    
  }
});