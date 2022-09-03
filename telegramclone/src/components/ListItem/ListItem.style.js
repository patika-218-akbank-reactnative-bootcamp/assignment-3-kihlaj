import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 12,
  },
  leftContainer: { flexDirection: 'row' },
  // space-around used for padding between top and bottom of container
  middleContainer: { justifyContent: 'space-around', marginLeft: 5 },
  image: { width: 65, height: 65, borderRadius: 65, marginRight: 10 },
  userName: { fontWeight: '700', fontSize: 17, color: 'black' },
  lastMessage: { fontSize: 16, color: 'grey' },
  date: { marginRight: 5, fontSize: 15, color: 'grey' },
});
