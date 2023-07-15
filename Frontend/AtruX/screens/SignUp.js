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
  SafeAreaView
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
import EmailComponent from '../components/EmailComponent'
import CompanyIcon from '../components/CompanyIcon'
import DropDownIcon from '../components/DropDownIcon'
import {useTranslation} from 'react-i18next'; // for the translation
import i18next, {languageResources} from '../services/i18next'; // for the translation
import languageList from '../locales/languageList.json' // for the translation
import { changeLanguage } from "i18next"; // for the translation
import { useNavigation } from "@react-navigation/native"; //

export default function SignUp() {
  const {t, i18n} = useTranslation(); // for the translation
  const [visible, setVisible] = useState(false); // 
  const navigation = useNavigation(); // for the navigation
  const [montserratLoaded] = useMontserrat({
    // load any font variation in here
        Montserrat_100Thin,
        Montserrat_600SemiBold,
        Montserrat_500Medium
  });

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [company_name, setCompany] = useState('');
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

//     const signUpUser = async () => {  
//     // checking if the data is valid
//         console.log(email, password);

//         try {
//             //const resp = await /// httpClient.post(".....")
//             //window.location.href = "/";
//         } catch (error){
//             if(error.response.status === ){
//                 alert(<Text>{t('invalid_credentials')}</Text>)
//             }
//         }
//    };
  if(!montserratLoaded){
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <CircleB style={{top:'170%'}}/>
            <SmallCircle style={{top:'98%', left:'48%'}}/>
            <DownCircle style={{top:'50%',  left:'35%'}}/>
            <SmallDownCircle style={{top:'-30%',  left:'8%'}}/>

            {/* this is for the user to let him choose the language, but i'm not sure where it's supposed to be*/}

            {/* <SafeAreaView style = {{top:'-127%'}} >
              <Modal visible={visible} onRequestClose={() => setVisible(false)}>
                <View style={styles.language_list}>
                  <FlatList 
                    data={Object.keys(languageResources)}
                    renderItem={({item})=> (
                      <TouchableOpacity style={styles.languageBtn} onPress={() => changeLanguage(item)}>
                        <Text style={{fontFamily:'Montserrat_100Thin', fontSize:15, color:'#ffff'}}>
                          {languageList[item].name}
                        </Text>
                      </TouchableOpacity>
                   )}
                  />
                </View>
              </Modal>
              <TouchableOpacity style={{left:'-50%', top:'-100%'}} onPress={() => setVisible(true)}>
                <Text style={{fontFamily:'Montserrat_600SemiBold', fontSize:15, color:'#73B3D3'}}>{t('language')}</Text> 
              </TouchableOpacity>
            </SafeAreaView> */}
                  
   
            <View style={styles.contour}>
                <WrittenLogo style={{left:'5%'}}/>
                <Text style={{fontFamily:'Montserrat_600SemiBold', fontSize:24, color:'#474747', top:'-85%'}}>{t('SignUp.Title')}</Text>

                <View style={styles.inputView}>
                    <PersonIcon style={{left:'2%', top:'30%'}}/>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Username"
                        placeholderTextColor="#6D6D6D"
                        onChangeText={(username) => setUsername(username)}
                    />
                </View>

                <View style={styles.inputView}>
                    <EmailComponent style={{left:'2%', top:'30%'}}/>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor="#6D6D6D"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>

                <View style={styles.inputView}>
                    <Lock style={{left:'2%', top:'30%'}}/>
                    <TextInput
                        style={styles.inputText}
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
                    
                <View style={styles.inputView}>
                    <Lock style={{left:'2%', top:'30%'}}/>
                    <TextInput
                        style={styles.inputText}
                        placeholder={t('confirm_password')}
                        placeholderTextColor="#6D6D6D"
                        secureTextEntry={passwordVisibility}
                        onChangeText={(password) => setPassword(password)}
                    />
                    <TouchableOpacity style={{top: '-125%', left:'40%'}}
                        onPress={handlePasswordVisibility}>
                        <Icon name = 'eye' size = {20}/>        
                    </TouchableOpacity>
                </View>
  
                <View style={styles.inputView}>
                    <CompanyIcon style={{left:'2%', top:'30%'}}/>
                     <TextInput
                        style={styles.inputText}
                        placeholder={t('company_name')}
                        placeholderTextColor="#6D6D6D"
                        onChangeText={(company_name) => setCompany(company_name)}
                     />            
                </View>

                <View style={{top: '-85%', left: '-2%'}}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                  />
                  <Text
                    style={{fontFamily:'Montserrat_600SemiBold', fontSize:12, color:'#CA0000'}}
                    >
                    {t('terms')}
                  </Text>
                </View>

            </View>        
        </View>
    </TouchableWithoutFeedback>

)
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
    borderColor:'#101f41',
    borderWidth:1,
  },
  contour:{
    top:"-198%",
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
  inputView: {
    borderRadius: 12,
    width: "90%",
    height:  50,
    marginBottom: 20,
    alignItems: "center",
    padding: 1,
    borderColor:'#101f41',
    borderWidth:1,
    top:'-84%',
    alignContent:'center'
  },
  
  forgot_button: {
    height: 30,
    marginBottom: 30,
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
  languageBtn: {
    padding: 10,
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 1,
  },
  language_list: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: "#101F41"
  },
  inputText: {
    fontFamily: 'Montserrat_100Thin',
    fontSize: 15,
    color: '#474747',
    width:'74%',
    top:'-75%'
  },
  inputDropDown: {
    borderRadius: 10,
    padding: 1,
    width: "90%",
    height: 50,
    marginBottom: 20,
    top: '-83%',
    borderWidth: 1,
    borderColor: "#41658A1",
    backgroundColor: "#41658A1",
    alignItems: 'center',
    alignContent: 'center'
  } 
});