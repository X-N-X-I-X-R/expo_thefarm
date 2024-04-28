import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Navbar from '../screens/Navbar';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
      </View>
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({})