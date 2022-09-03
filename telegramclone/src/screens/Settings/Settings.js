import { View, Text, Button, Image } from 'react-native'
import React, { useContext } from 'react'
import { CommonActions } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { UserContext } from '../../context/user';
import SignIn from '../../screens/SignIn';

const Stack = createStackNavigator();

const EditProfile = ({ navigation }) => {
  <Text>xD</Text>
}

const SettingsScreen = ({ navigation }) => {
  const { signOut } = useContext(UserContext);

  return (
    <View style={{ flex: 1, justifyContent: 'space-around', marginHorizontal: 16 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQHE1uR4C8lAUw/profile-displayphoto-shrink_800_800/0/1660657994960?e=1667433600&v=beta&t=arlws-pFWuT_xfZTQQAOtxFvPz1UBVNlertrJ9O53NA' }} style={{ width: 200, height: 200, borderRadius: 100 }} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button
          title="Toggle Theme"
          color="#0088CC"
        />
      </View>
      <View style={{ marginBottom: 60 }}>
        <Button
          title="Edit Profile"
          color="#0088CC"
          onPress={() => navigation.navigate('EditProfile')} />
      </View>
      <View style={{}}>
        <Button
          title="Logout"
          color="#0088CC"
          onPress={() => { signOut() }}
        />
      </View>
    </View>
  )
}

const SettingsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="SettingsScreen" component={SettingsScreen}
      options={{ headerShown: false }}
    // options={({ navigation, route }) => ({
    // headerTitle: (props) => <Icon name="arrow-back-ios" size={25} color="grey" onPress={() => navigation.navigate('SettingsScreen')} />,
    // })}
    />
    {/* <Stack.Screen name="ThemeScreen" component={ThemeScreen} options={{ headerShown: false }} /> */}
    <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
  </Stack.Navigator>
)

export default SettingsNavigator;