import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';

const Textinput = () => {
  const [defaultText, setDefaultText] = useState('');
  const [password, setPassword] = useState('');
  const [numeric, setNumeric] = useState('');
  const [multiline, setMultiline] = useState('');
  const [styledText, setStyledText] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Default TextInput:</Text>
        <TextInput
          style={styles.textInput}
          value={defaultText}
          onChangeText={setDefaultText}
          placeholder="Enter text"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password TextInput:</Text>
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Numeric TextInput:</Text>
        <TextInput
          style={styles.textInput}
          value={numeric}
          onChangeText={setNumeric}
          placeholder="Enter numeric value"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Multiline TextInput:</Text>
        <TextInput
          style={[styles.textInput, styles.multilineInput]}
          value={multiline}
          onChangeText={setMultiline}
          placeholder="Enter multiple lines"
          multiline={true}
          numberOfLines={4}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Styled TextInput:</Text>
        <TextInput
          style={[styles.textInput, styles.styledInput]}
          value={styledText}
          onChangeText={setStyledText}
          placeholder="Enter styled text"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EDF4F2',
    color: "red",
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "black",
    fontWeight:"bold",
  },
  textInput: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  styledInput: {
    borderColor: '#1E90FF',
    borderWidth: 2,
    backgroundColor: '#F0F8FF',
    color: '#00008B',
  },
});

export default Textinput;