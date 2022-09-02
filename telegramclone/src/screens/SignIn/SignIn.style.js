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
  text: { color: 'black', fontSize: 24, marginBottom: 20 },
  image: { width: 180, height: 180, resizeMode: 'cover', marginBottom: 40 },
  input: {},
  firstNameInput: {},
  lastNameInput: {},
  phoneNumberInput: {},
  phoneNumberPicker: {},
});
