import { View, Text, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

import styles from './SignIn.style';
import countryCodes from '../../assets/data/countryCodes';

const SignIn = () => {
  // const { theme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Telegram</Text>
      <Image
        style={styles.image}
        source={require('../../assets/images/telegram_logo.png')}
      />
      <View style={styles.input}>
        <TextInput placeholder="First Name" style={styles.firstNameInput} />
        <TextInput placeholder="Last Name" style={styles.lastNameInput} />
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginTop: 13, fontSize: 15, color: 'black' }}>
            {selectedLanguage}
          </Text>
          <TextInput
            placeholder="Phone number"
            style={styles.phoneNumberInput}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>
        <Picker
          style={{ width: 300 }}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) =>
            setSelectedLanguage(itemValue)
          }>
          {countryCodes.map(code => (
            <Picker.Item key={code.dial_code} label={code.name} value={code.dial_code} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default SignIn;
