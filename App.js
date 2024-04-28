import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Button from './src/components/Buttons';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import CircleButton from './src/components/CircleButton';
import IconButton from './src/components/IconButton';
import EmojiPicker from './src/components/EmojiPicker';
import EmojiList from './src/components/EmojiList';
import EmojiSticker from './src/components/EmojiSticker';
import ImageViewer from './src/components/ ImageViewers';

const PlaceholderImage = require('./assets/background-image.jpeg');


export default function App() {
  const [selectImage, setselectImage] = useState(null);  // image modal state
  const [showAppOptions, setShowAppOptions] = useState(false); // state for showing the app options modal
  const [isModalVisible, setIsModalVisible] = useState(false); // state for showing the emoji picker modal
   const [pickedEmoji, setPickedEmoji] = useState(null); // state for the picked emoji

   const onReset = () => {
    setShowAppOptions(false);
  };
    const onAddSticker = () => {
    setIsModalVisible(true);};

  const onSaveImageAsync = async () => {
    
    };
  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setselectImage(result.assets[0].uri)
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectImage} />    
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
            {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View> 
      ) : ( 

      <View style={styles.footercontainer}>
        <Button label="Pick an image" theme="primary" onPress={pickImageAsync} /> 
        <Button label="use this photo" theme="secondary" onPress={
          () => setShowAppOptions(true) 
        } /> 
      </View>

      )}
        <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
   <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },

  footercontainer: {
    flex: 1/3,  // the footer should take up 1/3 of the screen
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },

});
