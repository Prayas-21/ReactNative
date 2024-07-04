import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const Account = () => {
  const [name, setName] = useState('Prayas Ashirwad');
  const [email, setEmail] = useState('prayas@example.com');
  const [contactNumber, setContactNumber] = useState('123-456-7890');
  const [isEditing, setIsEditing] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [tempProfilePicture, setTempProfilePicture] = useState(null); // Temporary state for editing
  const navigation = useNavigation();

  // Request permission to access photo library on mount
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission required', 'Please grant access to the photo library to upload a profile picture.');
      }
    })();
  }, []);

  const handleSave = () => {
    setIsEditing(false);
    if (tempProfilePicture) {
      setProfilePicture(tempProfilePicture); // Update profile picture with edited one
    }
    Alert.alert('Success', 'Your details have been updated successfully.', [{ text: 'OK' }]);
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out successfully.', [{ text: 'OK', onPress: () => navigation.navigate('Welcome') }]);
  };

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setTempProfilePicture(result.uri); // Temporary storage of the selected image
    }
  };

  const handleSupport = () => {
    Alert.alert('Customer Support', 'You will be connected to customer support.', [{ text: 'OK' }]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => isEditing ? handlePickImage() : null}>
        <Image
          source={tempProfilePicture ? { uri: tempProfilePicture } : profilePicture ? { uri: profilePicture } : require('/Users/prayasashirwad/Documents/appdev/kicksCorner/assets/profilePicture.jpg')}
          style={styles.profilePicture}
        />
      </TouchableOpacity>
      {isEditing ? (
        <>
          <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />
          <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" />
          <TextInput style={styles.input} value={contactNumber} onChangeText={setContactNumber} placeholder="Contact Number" keyboardType="phone-pad" />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.infoBox}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.text}>{email}</Text>
            <Text style={styles.label}>Contact Number:</Text>
            <Text style={styles.text}>{contactNumber}</Text>
          </View>
          <View style={styles.buttonStack}>
            <TouchableOpacity onPress={() => setIsEditing(true)} style={styles.navigationButton}>
              <Image source={require('/Users/prayasashirwad/Documents/appdev/kicksCorner/assets/editAccount.png')} style={styles.icon} />
              <Text style={styles.navigationButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.navigationButton}>
              <Image source={require('/Users/prayasashirwad/Documents/appdev/kicksCorner/assets/cartAccount.png')} style={styles.icon} />
              <Text style={styles.navigationButtonText}>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSupport} style={styles.supportButton}>
              <Image source={require('/Users/prayasashirwad/Documents/appdev/kicksCorner/assets/supportAccount.png')} style={styles.icon} />
              <Text style={styles.supportText}>Customer Support</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
              <Image source={require('/Users/prayasashirwad/Documents/appdev/kicksCorner/assets/logoutAccount.png')} style={styles.icon} />
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: '#f0e6ff',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  infoBox: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#495057',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#6c757d',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonStack: {
    width: '80%',
    marginTop: 20,
  },
  navigationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7F50DE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 5,
  },
  navigationButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  saveButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#17a2b8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 5,
  },
  supportText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dc3545',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 5,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default Account;
