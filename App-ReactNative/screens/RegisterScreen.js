import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import styles from '../styles/RegisterScreenStyles';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para validar o email
  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  // Função chamada ao tentar registrar o usuário
  const handleRegister = () => {
    // Verificando se os campos estão preenchidos
    if (!name || !email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Verificando se o email é válido
    if (!validateEmail(email)) {
      Alert.alert('Ops.. Algo deu Errado', 'Por favor, insira um email válido.');
      return;
    }

    // Verificando se o email já foi cadastrado
    // Aqui, você pode verificar se o email já existe no banco de dados
    const existingEmail = false; // Simulação de verificação no banco
    if (existingEmail) {
      Alert.alert('Você já possui conta!', 'Este email já está registrado. Tente fazer login.');
      return;
    }

    // Caso tudo esteja correto, podemos simular o registro com sucesso
    Alert.alert('Sucesso', 'Conta criada com sucesso!');
    // Redirecionar para a tela de login ou outra página após o sucesso
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Criar Conta</Text>

        <TextInput
          style={[styles.input, styles.roundedInput]}
          placeholder="Nome Completo"
          placeholderTextColor="#FFF"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={[styles.input, styles.roundedInput]}
          placeholder="Digite seu email"
          keyboardType="email-address"
          placeholderTextColor="#FFF"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={[styles.input, styles.roundedInput]}
          placeholder="Senha"
          secureTextEntry={true}
          placeholderTextColor="#FFF"
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.whiteButton} onPress={handleRegister}>
          <Text style={[styles.buttonText, { color: 'black' }]}>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.bottomText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
