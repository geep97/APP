import { TouchableOpacity, TextInput, View, Text, StyleSheet, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Add your login logic here
    // For now, we'll just navigate to the Home component when the login button is pressed
    navigation.navigate('Homepage');
  };

  return (
    <ImageBackground
      source={require('../placeholders/photo2.jpg')}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <Text style={styles.logintxt}>NO YAWA😉😂</Text>
        <Text style={styles.tagline}>Everything is Accepted! By BiG Puppy</Text>
        <View style={styles.horizontalLine} />

        <View style={styles.loginForm}>
          <TextInput style={styles.input} placeholder="Username " />
          <TextInput style={styles.input} placeholder="Password  " secureTextEntry={true} />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' to fill the entire container
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Add some transparency to overlay the image
  },

  logintxt: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5, // Reduced marginBottom to make room for the tagline
    color: '#ffffff', // Set the text color to white to make it visible on the dark background
  },

  tagline: {
    fontSize: 20,
    marginBottom: 20,
    color: '#ffffff',
    fontStyle: 'italic',
  },

  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: 'white', // Set the color to white for the horizontal line
    marginBottom: 20,
  },

  loginForm: {
    width: '100%',
    alignItems: 'center',
  },

  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderColor: '#333333',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },

  loginButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
