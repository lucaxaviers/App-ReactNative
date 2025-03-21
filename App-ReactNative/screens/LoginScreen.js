import React, { useState } from 'react';
import { SafeAreaView, ImageBackground, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import styles from '../styles/LoginScreenStyles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Função para validar o email
  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  // Função chamada ao tentar logar
  const handleLogin = () => {
    // Validação dos campos
    if (!email || !senha) {
      Alert.alert("Esqueceu de mim!", "Por favor, preencha todos os campos.");
    } else if (!validateEmail(email)) {
      Alert.alert("Email inválido", "Por favor, insira um email válido.");
    } else {
      // Verificação de email e senha (validação simulada)
      if (email !== "usuario@exemplo.com" || senha !== "senha123") {
        Alert.alert("Erro", "Email ou senha inválidos.");
      } else {
        // Lógica de login aqui (ex: navegação ou autenticação)
        Alert.alert("Sucesso", "Login realizado com sucesso.");
        // Exemplo de navegação após login bem-sucedido:
        // navigation.navigate('Home');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../assets/fundo.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>
            Lembre-Se{'\n'}{'\n'}“O tempo é um tecido{'\n'}
            invisível em que se pode{'\n'}
            bordar tudo”{'\n'} 
            -Machado de Assis. 
          </Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.roundedInput]}
              placeholder="Digite seu email"
              keyboardType="email-address"
              placeholderTextColor="#FFF"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.roundedInput]}
              placeholder="Senha"
              secureTextEntry={true}
              placeholderTextColor="#FFF"
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          <TouchableOpacity style={styles.whiteButton} onPress={handleLogin}>
            <Text style={[styles.buttonText, { color: 'black' }]}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.bottomTextContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.bottomText}>Criar Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('EsqueceuSenha')}>
              <Text style={styles.bottomText}>Esqueceu a Senha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
