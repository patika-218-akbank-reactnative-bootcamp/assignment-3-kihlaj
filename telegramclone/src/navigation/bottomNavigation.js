import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contacts from '../screens/Contacts';
import Messages from '../screens/Messages';
import Settings from '../screens/Settings';

const BottomNav = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <BottomNav.Navigator
      initialRouteName="Telegram"
      screenOptions={{
        // header color
        headerTintColor: '#229ED9',
        // on click change the color of the active tab
        tabBarActiveTintColor: '#229ED9',
      }}>
      <BottomNav.Screen
        name="Telegram"
        component={Messages}
        options={{
          // Specify the height of your custom header
          headerStyle: {
            height: 60,
          },
          // To make the label beneath icons hidden
          tabBarShowLabel: false,
          // Specify the icon for the tab
          tabBarIcon: ({ color, size }) => (
            <Icons name="message" color={color} size={size} />
          ),
        }}
      />
      <BottomNav.Screen
        name="Contacts"
        component={Contacts}
        options={{
          headerStyle: {
            height: 60,
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Icons name="contacts" color={color} size={size} />
          ),
        }}
      />
      <BottomNav.Screen
        name="Settings"
        component={Settings}
        options={{
          headerStyle: {
            height: 60,
          },
          tabBarShowLabel: false,
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icons name="message" color={color} size={size} />
          ),
        }}
      />
    </BottomNav.Navigator>
  );
};

export default BottomNavigation;
