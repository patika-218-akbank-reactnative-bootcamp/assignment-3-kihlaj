import { View, Text, Image, TextInput, Button } from 'react-native';
import React, { useContext, useState } from 'react';
import { Picker } from '@react-native-picker/picker';

import { UserContext } from '../../context/user';
import styles from './SignIn.style';
import countryCodes from '../../assets/data/countryCodes';

const SignIn = () => {
  // const { theme } = useTheme();
  const { signIn } = useContext(UserContext);
  const [selectedCode, setSelectedCode] = useState();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [mode, setMode] = useState('signUp');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Telegram</Text>
      <Image
        style={styles.image}
        source={require('../../assets/images/telegram_logo.png')}
      />
      <View style={styles.input}>
        <TextInput placeholder="First Name" style={styles.firstNameInput} value={firstName} onChangeText={setFirstName} />
        <TextInput placeholder="Last Name" style={styles.lastNameInput} value={lastName} onChangeText={setLastName} />
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginTop: 20, fontSize: 13, color: 'black', backgroundColor: 'powderblue', padding: 5, borderRadius: 35, minWidth: 35}}>
            {selectedCode}
          </Text>
          <TextInput
            placeholder="Phone number"
            style={styles.phoneNumberInput}
            keyboardType="numeric"
            value={phone}
            onChangeText={setPhone}
            maxLength={10}
          />
        </View>
        <Picker
          style={{ width: 250, backgroundColor: 'powderblue', marginTop: 5 }}
          selectedValue={selectedCode}
          onValueChange={itemValue => setSelectedCode(itemValue)}>
          {countryCodes.map(code => (
            <Picker.Item
              key={code.dial_code}
              label={code.name}
              value={code.dial_code}
            />
          ))}
        </Picker>
        <View style={{ marginTop: 20 }}>
          <Button
            color="#179CDE"
            disabled={!phone || !firstName || !lastName}
            title="Sign Up"
            onPress={() => {
              signIn();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;
