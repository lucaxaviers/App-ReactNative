import React from 'react';
import { SafeAreaView, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../styles/EsqueceuSenhaScreenStyles';

export default function EsqueceuSenhaScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Esqueceu a Senha?</Text>

          <TextInput
            style={[styles.input, styles.roundedInput]}
            placeholder="Digite seu email"
            keyboardType="email-address"
            placeholderTextColor="#FFF"
          />

          <TouchableOpacity style={styles.whiteButton}>
            <Text style={[styles.buttonText, { color: 'black' }]}>Enviar Link de Recuperação</Text>
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
