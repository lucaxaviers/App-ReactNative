import React, { useState } from 'react';
import { SafeAreaView, ImageBackground, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import styles from '../styles/EsqueceuSenhaScreenStyles';

export default function EsqueceuSenhaScreen({ navigation }) {
  const [email, setEmail] = useState('');

  // Função para validar o email
  const validateEmail = (email) => {
    // Expressão regular simples para validar o formato do email
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  // Função chamada ao tentar enviar
  const handleSubmit = () => {
    if (!email) {
      Alert.alert("Ops.. Algo deu Errado", "Por favor, insira seu email.");
    } else if (!validateEmail(email)) {
      Alert.alert("Ops.. Algo deu Errado", "Por favor, insira um email válido.");
    } else {
      // Ação para enviar o email (pode ser a navegação ou outro processo)
      Alert.alert("Sucesso", "Instruções para recuperação de senha foram enviadas.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Esqueceu a Senha?</Text>
      
        <TextInput
          style={[styles.input, styles.roundedInput]}
          placeholder="Digite seu email para troca-la"
          keyboardType="email-address"
          placeholderTextColor="#FFF"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.whiteButton} onPress={handleSubmit}>
          <Text style={[styles.buttonText, { color: 'black' }]}>Enviar</Text>
        </TouchableOpacity>

        <View style={styles.bottomTextContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.bottomText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
