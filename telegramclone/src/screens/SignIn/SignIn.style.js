import { StyleSheet } from 'react-native';

// import useTheme from '../../hooks/useTheme';

// const { theme } = useTheme();

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  text: { color: 'black', fontSize: 24, marginBottom: 30 },
  image: { width: 180, height: 180, resizeMode: 'cover', marginBottom: 30 },
  input: {},
  firstNameInput: { borderBottomWidth: 2, borderBottomColor: ' #0088CC' },
  lastNameInput: { borderBottomWidth: 2, borderBottomColor: ' #0088CC' },
  phoneNumberInput: {
    marginLeft: 5,
  },
  phoneNumberPicker: {},
});
