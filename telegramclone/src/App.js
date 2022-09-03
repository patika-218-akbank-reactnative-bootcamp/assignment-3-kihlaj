import React, { useEffect, useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './screens/SignIn';
import ThemeProvider from './provider/ThemeProvider';
import { UserContext } from './context/user';
import BottomNavigation from './navigation/bottomNavigation';
import Chat from './screens/Chat';
import Loading from './components/Loading';

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
    return <Loading size="large" />;
  }

  return (
    <NavigationContainer>
      <UserContext.Provider value={userContext}>
        <ThemeProvider>
          <Stack.Navigator>
            {userToken ? (
              // Screens for unauthenticated user
              <Stack.Group
                screenOptions={{
                  headerShown: false,
                }}>
                <Stack.Screen name="SignIn" component={SignIn} />
              </Stack.Group>
            ) : (
              // Screens for authenticated user
              <Stack.Group
                screenOptions={{
                  headerShown: false,
                }}>
                <Stack.Screen
                  name="BottomNavigation"
                  component={BottomNavigation}
                />
                <Stack.Screen name="Chat" component={Chat} />
              </Stack.Group>
            )}
          </Stack.Navigator>
        </ThemeProvider>
      </UserContext.Provider>
    </NavigationContainer>
  );
};

export default App;
