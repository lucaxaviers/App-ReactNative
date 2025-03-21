import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',  // Manter o conteúdo centralizado
    padding: 20,
  },
  title: {
    color: 'white', 
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: -150,  // Ajuste o valor aqui para mover o título para cima
    marginBottom: 200,  // Adicionei um pequeno espaçamento abaixo do título
    marginLeft: 20, 
    fontFamily: 'Courier New'  ,
  },
  
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#866e5b',
    borderWidth: 1,
    paddingLeft: 10,
    color: '#FFF',
  },
  roundedInput: {
    borderRadius: 20, 
    backgroundColor: '#a8917d', 
  },
  whiteButton: {
    backgroundColor: 'white',
    borderColor: 'black',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.6, 
    shadowRadius: 2, 
    elevation: 3, 
  },
  buttonText: {
    fontSize: 16,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  bottomText: {
    color: 'black', 
    fontSize: 12,
    textAlign: 'center',
    marginHorizontal: 90,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
