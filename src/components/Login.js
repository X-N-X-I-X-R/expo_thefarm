import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text, Image, Switch, Pressable, Alert } from 'react-native';
import {login} from '../../api';
import logoImage from '/Users/elmaliahmac/Documents/Full_stack/expoNativeWeb/the-farm-101/assets/background-image.jpeg';
import gmailIcon from '../../assets/emojies/google.png';
import facebookIcon from '../../assets/emojies/facebook.png';
import twitterIcon from '../../assets/emojies/twitter.png';






import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);



// ...

const handleLogin = async () => {
  try {
    const response = await login(username, password);
    console.log(response);
    if (response.token) {
      navigation.navigate('Home');
    }
  } catch (error) {
    console.error(error.response || error.message);
  }
};

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={logoImage}
      />
      <Text style={styles.title}>The Farm</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
    <View style={styles.rememberView}>
  <View style={styles.row}>
    <Switch value={rememberMe} onValueChange={setRememberMe} />
    <Text>Remember Me</Text>
  </View>
  <View style={styles.row}>
    <Pressable onPress={() => Alert.alert("Forgot Password!")}>
      <Text>Forgot Password?</Text>
    </Pressable>
  </View>
</View>
      <Button title="Login" onPress={handleLogin} color="#841584" />
      <Text>OR LOGIN WITH</Text>
      <View style={styles.mediaIcons}>
        <Pressable onPress={() => { /* handle Gmail login */ }}>
          <Image source={gmailIcon} style={styles.icon} />
        </Pressable>
        <Pressable onPress={() => { /* handle Facebook login */ }}>
          <Image source={facebookIcon} style={styles.icon} />
        </Pressable>
        <Pressable onPress={() => { /* handle Twitter login */ }}>
          <Image source={twitterIcon} style={styles.icon} />
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    height: 35,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '20%',
  },
  rememberView: {
   
     width: '70%',
    alignItems: 'center'
  },
    row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  mediaIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
    marginTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default LoginScreen;



// TODO: Add form validation
// TODO: Handle login errors
// TODO: Implement social media login
// TODO: Improve UI
// TODO: Add tests
// TODO: Refactor
// TODO: Improve accessibility