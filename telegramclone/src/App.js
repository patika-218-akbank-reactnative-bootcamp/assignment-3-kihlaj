import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './screens/SignIn';
import { ThemeContext } from './context/theme';
import ThemeProvider from './provider/ThemeProvider';
import { UserContext } from './context/user';
import BottomNavigation from './navigation/bottomNavigation';

const Stack = createStackNavigator();

const App = () => {
  const [userToken, setUserToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const userContext = useMemo(() => ({
    signIn: () => {
      setUserToken('token');
      setLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          <ActivityIndicator size="large" />;
        </Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <UserContext.Provider value={userContext}>
        <ThemeProvider>
          {userToken ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="signIn" component={SignIn} />
            </Stack.Navigator>
          ) : (
            <BottomNavigation />
          )}
        </ThemeProvider>
      </UserContext.Provider>
    </NavigationContainer>
  );
};

export default App;
