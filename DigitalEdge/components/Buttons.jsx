import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const DefaultButton = () => (
  <View>
    <Text style={styles.title}>Default Button</Text>
    <Button title="Press Default Button" color="#7F50DE" onPress={() => Alert.alert('Default Button Pressed')} />
  </View>
);

const OpacityButton = () => (
  <View>
    <Text style={styles.title}>TouchableOpacity Button</Text>
    <TouchableOpacity
      style={[styles.opacityButton, { backgroundColor: 'black' }]}
      onPress={() => Alert.alert('TouchableOpacity Button Pressed')}
    >
      <Text style={[styles.buttonText, { color: 'white' }]}>Opacity Button</Text>
    </TouchableOpacity>
  </View>
);

const HighlightButton = () => (
  <View>
    <Text style={styles.title}>TouchableHighlight Button</Text>
    <TouchableHighlight
      style={[styles.roundButton, { backgroundColor: 'red' }]}
      underlayColor="#8B0000"
      onPress={() => Alert.alert('TouchableHighlight Button Pressed')}
    >
      <Text style={styles.buttonText }>+</Text>
      
    </TouchableHighlight>
  </View>
);

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <View>
      <Text style={styles.title}>Toggle Button</Text>
      <TouchableWithoutFeedback
        onPress={() => {
          setIsToggled(!isToggled);
          Alert.alert(isToggled ? 'Toggled is OFF' : 'Toggled is ON');
        }}
      >
        <View style={[styles.button, { backgroundColor: isToggled ? 'green' : 'grey' }]}>
          <Text style={styles.buttonText}>{isToggled ? 'ON' : 'OFF'}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const NativeFeedbackButton = () => (
  <View>
    <Text style={styles.title}>TouchableNativeFeedback Button (Android only)</Text>
    {Platform.OS === 'android' ? (
      <TouchableNativeFeedback
        onPress={() => Alert.alert('TouchableNativeFeedback Button Pressed')}
        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
      >
        <View style={[styles.outlineButton, { borderColor: '#7F50DE' }]}>
          <Text style={[styles.outlineButtonText, { color: 'black' }]}>Native Feedback Button</Text>
        </View>
      </TouchableNativeFeedback>
    ) : (
      <View style={[styles.outlineButton, { borderColor: '#7F50DE' }]}>
        <Text style={[styles.outlineButtonText, { color: 'black' }]}>Native Feedback Button (Android only)</Text>
      </View>
    )}
  </View>
);

const CustomStyledButton = ({ title, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: backgroundColor || 'blue' }]}
    onPress={onPress}
  >
    <Text style={[styles.buttonText, { color: textColor || 'white' }]}>{title}</Text>
  </TouchableOpacity>
);

const SubmitButton = () => (
  <CustomStyledButton
    title="Submit"
    backgroundColor="#7F50DE"
    textColor="white"
    onPress={() => Alert.alert('Submitted')}
  />
);

const ResetButton = () => (
  <CustomStyledButton
    title="Reset"
    backgroundColor="red"
    textColor="white"
    onPress={() => Alert.alert('Reset')}
  />
);

const Buttons = () => (
  <View style={styles.container}>
    <View style={styles.buttonRow}>
      <SubmitButton />
      <ResetButton />
    </View>
    <Separator />
    <DefaultButton />
    <Separator />
    <OpacityButton />
    <Separator />
    <HighlightButton />
    <Separator />
    <ToggleButton />
    <Separator />
    <NativeFeedbackButton />
    <Separator />
    <CustomStyledButton
      title="Custom Styled Button"
      backgroundColor="#7F50DE"
      textColor="white"
      onPress={() => Alert.alert('Custom Styled Button Pressed')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    backgroundColor: '#EDF4F2',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  roundButton: {
    width: 100, // Ensure equal width and height for a round shape
    height: 100,
    borderRadius: 50, // Make the border radius half of the width/height
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginLeft: 30,
  },
  opacityButton: {
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center', // Center the text within the button
  },
  outlineButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  outlineButtonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
});

export default Buttons;
