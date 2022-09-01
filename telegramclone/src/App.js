import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const unsubscribe = (user) => {
  //     setLoading(false);
  //     if (user) {
  //       setCurrentUser(user);
  //     }
  //   };
  //   return () => unsubscribe();
  // }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      {!currentUser ? (
        <Stack.Navigator>
          <Stack.Screen name="signIn" component={SignIn} />
        </Stack.Navigator>
      ) : (
        <Text>Hi user!</Text>
      )}
    </NavigationContainer>
  );
};

export default App;
