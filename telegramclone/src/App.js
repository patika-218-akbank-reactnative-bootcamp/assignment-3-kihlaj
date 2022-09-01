import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './screens/SignIn';
import { ThemeContext } from './context/theme';
import ThemeProvider from './provider/ThemeProvider';

const Stack = createStackNavigator();

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = user => {
      setLoading(false);
      if (user) {
        setCurrentUser(user);
      }
    };
    return () => unsubscribe();
  }, []);

  if (!loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <ThemeProvider>
        {!currentUser ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="signIn" component={SignIn} />
          </Stack.Navigator>
        ) : (
          <Text>Hi user!</Text>
        )}
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
