// screens/LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import data from '../data/sample.json'; // Import sample data

const LoginScreen = ({ navigation }) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const handleLogin = () => {
    // Check if walletAddress matches any dummy data in the sample.json
    const existingUser = data.users.find(user => user.walletAddress === walletAddress);
    
    if (existingUser) {
      // If user exists, navigate to the PostsScreen
      navigation.navigate('Posts');
    } else {
      // If user does not exist, show profile creation fields
      setIsNewUser(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login with MetaMask</Text>

      <TextInput
        placeholder="Enter MetaMask Wallet Address"
        style={styles.input}
        value={walletAddress}
        onChangeText={setWalletAddress}
      />

      {!isNewUser ? (
        <Button title="Login" onPress={handleLogin} />
      ) : (
        <>
          <Text style={styles.subtitle}>First-time login! Please create your profile.</Text>
          <Button title="Go to Profile Setup" onPress={() => navigation.navigate('Profile')} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 10,
  },
});

export default LoginScreen;
