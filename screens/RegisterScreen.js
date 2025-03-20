import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../styles/RegisterScreenStyles';

export default function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Criar Conta</Text>

        <TextInput
          style={[styles.input, styles.roundedInput]}
          placeholder="Nome Completo"
          placeholderTextColor="#FFF"
        />

        <TextInput
          style={[styles.input, styles.roundedInput]}
          placeholder="Digite seu email"
          keyboardType="email-address"
          placeholderTextColor="#FFF"
        />

        <TextInput
          style={[styles.input, styles.roundedInput]}
          placeholder="Senha"
          secureTextEntry={true}
          placeholderTextColor="#FFF"
        />

        <TouchableOpacity style={styles.whiteButton}>
          <Text style={[styles.buttonText, { color: 'black' }]}>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.bottomText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
