import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/components/Login';
import HomeScreen from './src/screens/HomeScreen';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


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
    flex: 1/4,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 90,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});