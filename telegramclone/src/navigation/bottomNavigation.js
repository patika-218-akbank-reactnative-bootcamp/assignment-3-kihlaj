import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contacts from '../screens/Contacts';
import Messages from '../screens/Messages';
import Settings from '../screens/Settings';

const BottomNav = createBottomTabNavigator()

const EmptyScreen = () => {
  return (
    <View>
      <Text>Empty Screen</Text>
    </View>
  )
}

const BottomNavigation = () => {
  return (
    <BottomNav.Navigator>
      <BottomNav.Screen name="Telegram" component={Messages} />
      <BottomNav.Screen name="Contacts" component={Contacts} />
      <BottomNav.Screen name="Settings" component={Settings} />
    </BottomNav.Navigator>
  )
}

export default BottomNavigation;