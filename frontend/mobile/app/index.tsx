import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, Fonts } from "../constants/theme";

const { width, height } = Dimensions.get("window");

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {/* Imagem de fundo - substitua pelo require da sua imagem */}
      <ImageBackground
        source={require("../assets/images/onboarding-bg.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Logo */}
        <Image
          source={require("../assets/images/logo-white.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </ImageBackground>

      {/* Card inferior */}
      <View style={styles.bottomCard}>
        {/* Botão "Já tenho uma conta" */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/login")}
          activeOpacity={0.8}
        >
          <Text style={styles.primaryButtonText}>Já tenho uma conta</Text>
        </TouchableOpacity>

        {/* Botão "Criar nova conta" */}
        <TouchableOpacity
          style={styles.outlineButton}
          onPress={() => router.push("/register")}
          activeOpacity={0.8}
        >
          <Text style={styles.outlineButtonText}>Criar nova conta</Text>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  backgroundImage: {
    width: width,
    height: height * 0.65,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 65,
  },
  logo: {
    width: 261,
    height: 46,
  },
  bottomCard: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.background,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    paddingHorizontal: 38,
    paddingTop: 40,
    paddingBottom: 50,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 7.9,
    elevation: 10,
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
    marginBottom: 16,
  },
  primaryButtonText: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.semiBold,
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
  },
  outlineButtonText: {
    color: Colors.primary,
    fontSize: 14,
    fontFamily: Fonts.semiBold,
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
});
