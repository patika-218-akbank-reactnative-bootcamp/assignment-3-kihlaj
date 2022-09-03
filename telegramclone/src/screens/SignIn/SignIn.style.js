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
  text: { color: '#0088CC', fontSize: 24, marginBottom: 32 },
  image: { width: 180, height: 180, resizeMode: 'cover', marginBottom: 28 },
  input: {},
  firstNameInput: { borderBottomWidth: 2, borderBottomColor: 'powderblue' },
  lastNameInput: { borderBottomWidth: 2, borderBottomColor: 'powderblue' },
  phoneNumberInput: {
    marginLeft: 5,
    marginTop: 5,
  },
  picker: { width: 250, backgroundColor: 'powderblue', marginTop: 5 },
  pickerContainer: { flexDirection: 'row' },
  pickerText: {
    marginTop: 20,
    fontSize: 13,
    color: 'black',
    backgroundColor: 'powderblue',
    padding: 5,
    borderRadius: 35,
    minWidth: 35,
  },
  signIn: { marginTop: 20 },
});
