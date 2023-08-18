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
import { useTranslation } from "react-i18next"; // for the translation
import i18next, { languageResources } from "../services/i18next"; // for the translation
import {
  useFonts as useMontserrat,
  Montserrat_100Thin,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import FormaNotification1 from '../components/FormaNotification1';
import FormaNotif2 from '../components/FormaNotif2';
import Linii from '../components/Linii';
import NotificationIcon2 from '../components/NotificationIcon2';
import Back from '../components/Back';


const NotificationsDispatcher = () => {
  return (
    <View style={styles.background}>
     <View>
      <FormaNotification1 style = {{top: '8%', left: '68%',}}/>
      <FormaNotif2 style = {{top: '-1%', left: '0%',}}/>
      <Linii style = {{top: '-45.5%', left: '85%', zIndex: 1,}}/>
      <NotificationIcon2 style = {{top: '-45%', left: '6%', }}/>
      <Back style = {{top: '-49%', left: '6%', }}/>
    </View>
    {/* <ScrollView style = {{ flex: 1, width: '100%', top: '-20%', height: 20}}>
    <View style = {{height: 800}}> */}
      <View style={styles.headerText}>
        <Text style={styles.Notifications}>Notifications</Text>
      </View>
      <View style={styles.cele2chestiialbe}>
        <View style={styles.dreptunghi1} />
        <View style={styles.dreptunghi2} />
      </View>
      <View style={styles.butoaneAlbastre}>
        <View style={styles.dreptunghiAlbastru1} />
        <View style={styles.dreptunghiAlbastru2} />
      </View>
    </View>
    // {/* </ScrollView> */}
    // </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#101F41',
  },
  headerText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Notifications: {
    fontSize: 35,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#FFFFFF',
    top: '-410%',
    left: '120%',
  },
  cele2chestiialbe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  dreptunghi1: {
    width: 320,
    height: 264,
    backgroundColor: '#D9D9D9',
    borderRadius: 40,
    left: '37.5%',
    top: '30%',
    zIndex: 1,
    justifyContent: 'center',
  },
    dreptunghi2: {
    width: 320,
    height: 264,
    backgroundColor: '#D9D9D9',
    borderRadius: 40,
    top: '87%',
    left: '-83%',
    justifyContent: 'center',
  },
    butoaneAlbastre:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  dreptunghiAlbastru1:{
    width: 294,
    height: 46,
    backgroundColor: '#101F41',
    borderRadius: 40,
    left: '215%',
    top: '35%',
    zIndex: 1,
    justifyContent: 'center',
  },
  dreptunghiAlbastru2:{
    width: 294,
    height: 46,
    backgroundColor: '#101F41',
    borderRadius: 40,
    left: '-420%',
    top: '95%',
    zIndex: 1,
    justifyContent: 'center',
  },
});

export default NotificationsDispatcher;