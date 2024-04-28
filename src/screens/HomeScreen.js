import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => navigation.navigate('About')}>
        <Text style={styles.buttonText}>Go to About Screen</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.buttonText}>Go to Contact Screen</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonText: {
    color: '#000',
  },
});

export default HomeScreen;