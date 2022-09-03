import React from 'react';
import { View, FlatList } from 'react-native';

import styles from './Contacts.style';
import ListItem from '../../components/ListItem';
import contacts from '../../assets/data/contacts';

const Chats = () => {
  return (
    <View style={{}}>
      <FlatList
        style={styles.container}
        data={contacts}
        renderItem={({ item }) => (
          <ListItem contacts={item} keyExtractor={item.id} />
        )}
      />
    </View>
  );
};

export default Chats;