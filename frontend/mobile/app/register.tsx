import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
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

export default function RegisterScreen() {
  const router = useRouter();
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [confirmaVisivel, setConfirmaVisivel] = useState(false);

  const handleRegister = () => {
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
        <Text style={styles.title}>Olá, bem-vindo</Text>
        <Text style={styles.subtitle}>
          Estamos felizes em ter você aqui! Falta pouco para ter seu novo look
          novo.
        </Text>

        {/* Campo Usuário */}
        <Text style={styles.label}>Usuário*</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={usuario}
            onChangeText={setUsuario}
            autoCapitalize="words"
          />
        </View>

        {/* Campo E-mail */}
        <Text style={styles.label}>E-mail*</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Campo Senha */}
        <Text style={styles.label}>Senha*</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
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

        {/* Confirmar Senha */}
        <Text style={styles.label}>Confirme sua senha*</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={confirmaSenha}
            onChangeText={setConfirmaSenha}
            secureTextEntry={!confirmaVisivel}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setConfirmaVisivel(!confirmaVisivel)}
          >
            <Ionicons
              name={confirmaVisivel ? "eye-outline" : "eye-off-outline"}
              size={20}
              color={Colors.primary}
            />
          </TouchableOpacity>
        </View>

        {/* Botão Entrar */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleRegister}
          activeOpacity={0.8}
        >
          <Text style={styles.primaryButtonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Já possuo uma conta */}
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={styles.linkText}>Já possuo uma conta</Text>
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
            Crie sua conta com o{" "}
            <Text style={{ color: Colors.googleBlue }}>G</Text>
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
    paddingTop: 72,
    paddingBottom: 40,
  },
  logo: {
    width: 261,
    height: 46,
    alignSelf: "center",
    marginBottom: 45,
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
    marginBottom: 32,
    lineHeight: 23,
  },
  label: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.black,
    marginBottom: 4,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 6,
    height: 41,
    justifyContent: "center",
    paddingHorizontal: 15,
    marginBottom: 18,
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
    marginTop: 8,
  },
  primaryButtonText: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.semiBold,
  },
  linkText: {
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
    marginVertical: 16,
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
