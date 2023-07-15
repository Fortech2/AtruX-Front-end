import React, { Component } from 'react'
// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import Svg, { G, Circle, Defs, Path } from "react-native-svg";
// import WrittenLogo from '../components/writtenLogo';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Ionicons } from '@expo/vector-icons';
// import Checkbox from 'expo-checkbox';
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
  SafeAreaView
} from "react-native";
// import {
//   useFonts as useMontserrat,
//   Montserrat_100Thin,
//   Montserrat_600SemiBold,
//   Montserrat_500Medium
// } from "@expo-google-fonts/montserrat";
// import HomeScreen from './HomeScreen';
// import CircleB from '../components/backgroundCircles';
// import SmallCircle from '../components/SmallCircleB';
// import DownCircle from '../components/DownCircle';
// import SmallDownCircle from '../components/SmallDownCircle';
// import PersonIcon from '../components/personIcon';
// import Lock from '../components/LockLogInIcon';
// import EyeIcon from '../components/EyeComponent';
// import FullLogo from '../components/LogoComplet';
import {useTranslation} from 'react-i18next'; // for the translation
import i18next, {languageResources} from '../services/i18next'; // for the translation
import languageList from '../locales/languageList.json' // for the translation
import { changeLanguage } from "i18next"; // for the translation
import { useNavigation } from "@react-navigation/native"; //

export class ForgotPassword extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default ForgotPassword
