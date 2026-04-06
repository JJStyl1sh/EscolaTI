import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Colors, Fonts } from "../constants/theme";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const handleLogin = () => {
    // Protótipo: navega direto sem validação
    router.replace('/(tabs)');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}
        <Image
          source={require("../assets/images/logo-dark.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Títulos */}
        <Text style={styles.title}>Olá, de novo</Text>
        <Text style={styles.subtitle}>
          Sentimos sua falta! Precisando de um look novo?
        </Text>

        {/* Campo E-mail */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor={Colors.black}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Campo Senha */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor={Colors.black}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!senhaVisivel}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setSenhaVisivel(!senhaVisivel)}
          >
            <Ionicons
              name={senhaVisivel ? "eye-outline" : "eye-off-outline"}
              size={20}
              color={Colors.primary}
            />
          </TouchableOpacity>
        </View>

        {/* Esqueci minha senha */}
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
        </TouchableOpacity>

        {/* Botão Entrar */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          <Text style={styles.primaryButtonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Criar uma conta */}
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text style={styles.createAccountText}>Criar uma conta</Text>
        </TouchableOpacity>

        {/* Divisor "ou" */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>ou</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Botão Google */}
        <TouchableOpacity style={styles.outlineButton} activeOpacity={0.8}>
          <Text style={styles.outlineButtonText}>
            Acesse com o <Text style={{ color: Colors.googleBlue }}>G</Text>
            <Text style={{ color: Colors.googleRed }}>o</Text>
            <Text style={{ color: Colors.googleYellow }}>o</Text>
            <Text style={{ color: Colors.googleBlue }}>g</Text>
            <Text style={{ color: Colors.googleGreen }}>l</Text>
            <Text style={{ color: Colors.googleRed }}>e</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 39,
    paddingTop: 98,
  },
  logo: {
    width: 261,
    height: 46,
    alignSelf: "center",
    marginBottom: 90,
  },
  title: {
    fontSize: 27,
    fontFamily: Fonts.light,
    color: Colors.black,
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: Fonts.extraLight,
    color: Colors.text,
    textAlign: "center",
    marginBottom: 48,
    lineHeight: 23,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 6,
    height: 41,
    justifyContent: "center",
    paddingHorizontal: 15,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Colors.background,
  },
  input: {
    fontSize: 14,
    fontFamily: Fonts.extraLight,
    color: Colors.black,
    height: "100%",
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 10,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 28,
  },
  forgotPasswordText: {
    fontSize: 14,
    fontFamily: Fonts.light,
    color: Colors.primary,
  },
  primaryButton: {
    backgroundColor: Colors.primary,
    height: 41,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 12,
  },
  primaryButtonText: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.semiBold,
  },
  createAccountText: {
    fontSize: 14,
    fontFamily: Fonts.light,
    color: Colors.primary,
    textAlign: "center",
    marginBottom: 16,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    gap: 10,
  },
  dividerLine: {
    width: 33,
    height: 1,
    backgroundColor: Colors.textLight,
  },
  dividerText: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.textLight,
  },
  outlineButton: {
    borderWidth: 1.5,
    borderColor: Colors.primary,
    height: 41,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Colors.background,
    marginBottom: 30,
  },
  outlineButtonText: {
    color: Colors.primary,
    fontSize: 14,
    fontFamily: Fonts.semiBold,
  },
});
