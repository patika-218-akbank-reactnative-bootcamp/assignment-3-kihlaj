import React from 'react';
import { ImageBackground } from 'react-native';

import styles from './Chat.style';
import background from '../../assets/images/background.jpg';
import ChatInput from '../../components/ChatInput';

const Chat = () => {
  return (
    <ImageBackground source={background} style={styles.image}>
      <ChatInput
        firstIcon="emoticon"
        secondIcon="attachment"
        thirdIcon="camera-alt"
        fourthIcon="send"
      />
    </ImageBackground>
  );
};

export default Chat;
