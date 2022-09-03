import React from 'react';
import { TextInput, View } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import styles from './ChatInput.style';

const ChatInput = ({ firstIcon, secondIcon, thirdIcon, fourthIcon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Icons name={firstIcon} size={25} color="grey" />
        <TextInput
          placeholder={'Type a message'}
          style={styles.textInput}
          name="text"
          multiline
        />
        <Icons name={secondIcon} size={25} color="grey" style={styles.icon} />
        <Icons name={thirdIcon} size={25} color="grey" style={styles.icon} />
      </View>
      <View style={styles.leftContainer}>
        <Icons name={fourthIcon} size={30} color="white" />
      </View>
    </View>
  );
};

export default ChatInput;
