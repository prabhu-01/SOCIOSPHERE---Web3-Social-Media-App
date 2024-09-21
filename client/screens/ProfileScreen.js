// screens/ProfileScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet } from 'react-native';
import data from '../data/sample.json'; // Import sample data

const ProfileScreen = () => {
  const [profileName, setProfileName] = useState(data.currentUser.name);
  const [profilePicture, setProfilePicture] = useState(data.currentUser.picture);

  const handleSaveProfile = () => {
    // Logic to save profile changes (later integrate with blockchain or backend)
    console.log('Profile saved:', { profileName, profilePicture });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <Image source={{ uri: profilePicture }} style={styles.profileImage} />
      <TextInput
        style={styles.input}
        value={profileName}
        onChangeText={setProfileName}
      />
      <Button title="Upload New Profile Picture" onPress={() => {}} />
      <Button title="Save Profile" onPress={handleSaveProfile} />
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default ProfileScreen;
