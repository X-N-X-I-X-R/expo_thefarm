import { useState } from 'react';
import { StyleSheet, FlatList, Image, Platform, Pressable } from 'react-native';

// Import all images
const bearDollars = require('/Users/elmaliahmac/Documents/Full_stack/expoNativeWeb/the-farm-101/assets/emojies/bear-dollars.png');
const bulls = require('/Users/elmaliahmac/Documents/Full_stack/expoNativeWeb/the-farm-101/assets/emojies/bulls.jpeg');
const dollars = require('/Users/elmaliahmac/Documents/Full_stack/expoNativeWeb/the-farm-101/assets/emojies/dollars.png');
const bearHappy = require('/Users/elmaliahmac/Documents/Full_stack/expoNativeWeb/the-farm-101/assets/emojies/bear_happy.jpeg');
const dollarsBurning = require('/Users/elmaliahmac/Documents/Full_stack/expoNativeWeb/the-farm-101/assets/emojies/dollars-burning.png');
const emojiBearHappy = require('/Users/elmaliahmac/Documents/Full_stack/expoNativeWeb/the-farm-101/assets/emojies/emoji_bear_happy.jpeg');
const emojiPig = require('/Users/elmaliahmac/Documents/Full_stack/expoNativeWeb/the-farm-101/assets/emojies/emoji_pig.jpeg');

export default function EmojiList({ onSelect, onCloseModal }) {
  const [emojis] = useState([
    bearDollars,
    bulls,
    dollars,
    bearHappy,
    dollarsBurning,
    emojiBearHappy,
    emojiPig,
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emojis}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}>
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
