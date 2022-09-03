import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

import styles from './ListItem.style';

const ListItem = props => {
  // getting dummy data
  const { contacts } = props;

  // a hook which gives access to navigation object
  const navigation = useNavigation();

  // onClick function to navigate to chat page
  const onClick = () => {
    // passing parameters as navigation happens
    navigation.navigate('Chat', {
      id: contacts.id,
      name: `${contacts.receiver.firstName} ${contacts.receiver.lastName}`,
    });
  };

  return (
    // onPress is a function which is called when the user presses down, and then releases
    <Pressable onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image
            source={{ uri: contacts.receiver.image }}
            style={styles.image}
          />
          <View style={styles.middleContainer}>
            <Text style={styles.userName}>{contacts.receiver.firstName}</Text>
          </View>
        </View>
        <Text>
          {moment(contacts.messages[0].dateTime).format('DD/MM/YYYY')}
        </Text>
      </View>
    </Pressable>
  );
};

export default ListItem;
