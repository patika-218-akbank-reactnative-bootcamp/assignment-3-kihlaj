import { View, Button, Image } from 'react-native';
import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { UserContext } from '../../context/user';
import EditProfile from '../../components/EditProfile';
import styles from './Settings.style';

const Stack = createStackNavigator();

const SettingsScreen = ({ navigation }) => {
  const { signOut } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQHE1uR4C8lAUw/profile-displayphoto-shrink_800_800/0/1660657994960?e=1667433600&v=beta&t=arlws-pFWuT_xfZTQQAOtxFvPz1UBVNlertrJ9O53NA',
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.toggle}>
        <Button title="Toggle Theme" color="#0088CC" />
      </View>
      <View style={styles.edit}>
        <Button
          title="Edit Profile"
          color="#0088CC"
          onPress={() => navigation.navigate('EditProfile')}
        />
      </View>
      <View style={{}}>
        <Button
          title="Logout"
          color="#0088CC"
          onPress={() => {
            signOut();
          }}
        />
      </View>
    </View>
  );
};

const SettingsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SettingsScreen"
      component={SettingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfile}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default SettingsNavigator;
