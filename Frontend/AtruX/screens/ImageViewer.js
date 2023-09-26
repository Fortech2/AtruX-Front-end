import React, { useState } from 'react';
import { View, Image, Modal, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ExitIcon from '../components/ExitIcon';
import { useTranslation } from "react-i18next"; // for the translation
import i18next, { languageResources } from "../services/i18next"; // for the translation
import {
  useFonts as useMontserrat,
  Montserrat_100Thin,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
const ImageViewer = ({ selectedImage, onClose }) => {
  const [isImageFullScreen, setIsImageFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsImageFullScreen(!isImageFullScreen);
  };

  return (
    <Modal transparent={true} animationType="fade" visible={!!selectedImage}>
      
      <View style={styles.container}>
        
<TouchableOpacity onPress={onClose} >
         <Text style={{fontFamily: 'Montserrat_500Medium',
    fontSize: 28,
    color: "#101F41",
    top:'20%',}}> Close </Text>
         </TouchableOpacity>
          <Image
            source={{
              uri: `data:image/jpeg;base64,${selectedImage}`,
            }}
            style={isImageFullScreen ? styles.fullScreenImage : styles.image}
            resizeMode="contain"
          />
       
    <TouchableOpacity
          style={styles.closeButton}
          onPress={onClose}
        >
          <ExitIcon />
        </TouchableOpacity>
      
     
      </View>
     
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
   top:'400%',
   
    zIndex:1
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex:2
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  fullScreenImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default ImageViewer;