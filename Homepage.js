import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Homepage = () => {
  const navigation = useNavigation();

  const handleDiscoverConnect = () => {
    navigation.navigate('FriendList'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to No YAWA😉😂</Text>
      <TouchableOpacity style={styles.discoverConnectButton} onPress={handleDiscoverConnect}>
        <Text style={styles.discoverConnectText}>Discover and Connect</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  discoverConnectButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 20,
  },
  discoverConnectText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Homepage;
