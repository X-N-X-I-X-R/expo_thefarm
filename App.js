import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UploadImage from './src/components/UploadImge';
import Navbar from './src/screens/Navbar';
import { Switch } from 'react-native-paper';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Add this line
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator(); // Add this line

export default function App() {
  const [darkmode, setdarkmode] = useState(false);

  const containerStyle = {
    ...styles.container,
    backgroundColor: darkmode ? '#fff' : '#000',
  };

  const titleStyle = {
    ...styles.title,
    color: darkmode ? '#000' : '#fff',
  };

  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>Upload Image</Text>
      <View style={styles.imageContainer}>
        <Switch value={darkmode} onValueChange={setdarkmode}>
          Dark Mode
        </Switch>
        <UploadImage />
      </View>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Navbar" component={Navbar} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
    paddingHorizontal: 20,
  },
  footercontainer: {
    flex: 1/3,
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