import React, { Component, useState } from 'react'
import { StatusBar } from "expo-status-bar";
import Svg, { G, Circle, Defs, Path } from "react-native-svg";
import WrittenLogo from '../components/writtenLogo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
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
  SafeAreaView,
  Modal,
  FlatList
} from "react-native";
import {
  useFonts as useMontserrat,
  Montserrat_100Thin,
  Montserrat_600SemiBold,
  Montserrat_500Medium
} from "@expo-google-fonts/montserrat";
import CircleB from '../components/backgroundCircles';
import SmallCircle from '../components/SmallCircleB';
import DownCircle from '../components/DownCircle';
import SmallDownCircle from '../components/SmallDownCircle';
import PersonIcon from '../components/personIcon'
import FullLogo from '../components/LogoComplet';
import {useTranslation} from 'react-i18next'; // for the translation
import i18next, {languageResources} from '../services/i18next'; // for the translation
import languageList from '../locales/languageList.json' // for the translation
import { changeLanguage } from "i18next"; // for the translation
import { useNavigation } from "@react-navigation/native"; //

export default function ForgotPassword() {

  const {t, i18n} = useTranslation(); // for the translation
  const [visible, setVisible] = useState(false); //

  const [montserratLoaded] = useMontserrat({
    // load any font variation in here
        Montserrat_100Thin,
        Montserrat_600SemiBold,
        Montserrat_500Medium
  });
 
  // the user gets a code


  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <CircleB style={{top:'170%'}}/>
        <SmallCircle style={{top:'98%', left:'48%'}}/>
        <DownCircle style={{top:'50%',  left:'35%'}}/>
        <SmallDownCircle style={{top:'-30%',  left:'8%'}}/>

        <View style={styles.contour}>
          <WrittenLogo style={{left:'5%'}}/>
          <Text style={{fontFamily: 'Montserrat_600SemiBold', fontSize:24, color:'#474747', top:'-85%'}}>{t('forgot_password')}</Text>
          <View style={styles.inputView}>
            <PersonIcon style={{left: '2%', top: '30%'}}/>
            <TextInput
              style={{fontFamily: 'Montserrat_100Thin', fontSize: 14, color: '#474747', width: '74%', top: '-80%'}}
              placeholder={t('enter_email')}
              placeholderTextColor="#6D6D6D"
            />
          </View>

          <SafeAreaView style = {{top:'-127%'}} >
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
          </SafeAreaView>

          <TouchableOpacity style={styles.sendBtn}>
            {/* onPress{() => {  }} */}
            <Text style={{fontFamily:'Montserrat_500Medium', fontSize:18, color:'#FFFF'}}>{t('send_code')}</Text>
          </TouchableOpacity>

          <FullLogo style = {{bottom:'50%', left:'65%'}}/>

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
  contour:{
    top:"-196%",
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
    alignItems: "center",
    padding: 1,
    borderColor:'#101f41',
    borderWidth:1,
    top:'-70%',
    alignContent:'center'
  },
  sendBtn: {
    width: "80%",
    borderRadius: 18,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#101F41",
    top:'-60%'
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
  }
});