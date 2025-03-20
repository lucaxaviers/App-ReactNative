import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#326872', // Cor de fundo para o app
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30, // Reduzir o espaçamento abaixo do título
    textAlign: 'center', // Centraliza o título
  },
  input: {
    height: 45,
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 15,
    marginBottom: 15,
    color: '#FFF',
    fontSize: 16,
  },
  roundedInput: {
    backgroundColor: '#326872', // Cor de fundo para os campos de input
  },
  whiteButton: {
    backgroundColor: 'white',
    borderColor: 'black',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  bottomText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});
