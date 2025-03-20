import React from 'react';
import { SafeAreaView, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../styles/LoginScreenStyles';

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../assets/fundo.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Seja Bem-Vindo{'\n'}Traveling around the world.</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.roundedInput]}
              placeholder="Digite seu email"
              keyboardType="email-address"
              placeholderTextColor="#FFF"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.roundedInput]}
              placeholder="Senha"
              secureTextEntry={true}
              placeholderTextColor="#FFF"
            />
          </View>

          <TouchableOpacity style={styles.whiteButton}>
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
