import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/Buttons'

import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>nav</Text>
      <Button label="Home" theme="primary" onPress={() => navigation.navigate('Home')} icon="home" />
    </View>
  );
}
const styles = StyleSheet.create({
    navbar: {
        height: 80,
        backgroundColor: 'darkblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    button: {
        color: 'white',
        fontSize: 20,
    }
})

export default Navbar