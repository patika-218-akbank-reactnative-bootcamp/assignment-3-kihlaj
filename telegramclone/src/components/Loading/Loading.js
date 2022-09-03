import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';

import styles from './Loading.style';

const Loading = ({ size }) => {
  return (
    <View style={styles.container}>
      <Text>
        <ActivityIndicator size={size} />;
      </Text>
    </View>
  );
};

export default Loading;
