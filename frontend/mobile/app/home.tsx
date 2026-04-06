import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, Fonts } from "../constants/theme";

const { width } = Dimensions.get("window");

const CATEGORIAS = [
  { id: "1", nome: "Vestidos", icone: "tshirt-crew-outline" as const },
  { id: "2", nome: "Camisetas", icone: "tshirt-crew" as const },
  { id: "3", nome: "Calçados", icone: "shoe-heel" as const },
  { id: "4", nome: "Acessórios", icone: "watch" as const },
];

const CATEGORIAS2 = [
  { id: "5", nome: "Calças", icone: "hanger" as const },
  { id: "6", nome: "Infantil", icone: "baby-face-outline" as const },
  { id: "7", nome: "Fitness", icone: "dumbbell" as const },
  { id: "8", nome: "Plus Size", icone: "human-greeting-variant" as const },
];

type TabName = "home" | "categorias" | "pedidos" | "perfil";

export default function HomeScreen() {
  const router = useRouter();
  const [busca, setBusca] = useState("");
  const [tabAtiva, setTabAtiva] = useState<TabName>("home");

  const renderCategoria = (item: {
    id: string;
    nome: string;
    icone: string;
  }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.categoriaCard}
      activeOpacity={0.7}
    >
      <MaterialCommunityIcons
        name={item.icone as any}
        size={28}
        color={Colors.primary}
      />
      <Text style={styles.categoriaNome}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Localização */}
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={16} color={Colors.black} />
          <Text style={styles.locationText}>Av. Brasil, 123</Text>
        </View>

        {/* Header: saudação + carrinho */}
        <View style={styles.headerRow}>
          <Text style={styles.greeting}>Olá, Marina!</Text>
          <TouchableOpacity style={styles.cartButton}>
            <Ionicons name="bag-outline" size={24} color={Colors.black} />
          </TouchableOpacity>
        </View>

        {/* Barra de pesquisa */}
        <View style={styles.searchBar}>
          <View style={styles.searchIconWrapper}>
            <Ionicons name="search" size={20} color={Colors.white} />
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder="Vestido Midi"
            placeholderTextColor="#787878"
            value={busca}
            onChangeText={setBusca}
          />
        </View>

        {/* Categorias - linha 1 */}
        <View style={styles.categoriaRow}>
          {CATEGORIAS.map(renderCategoria)}
        </View>

        {/* Banner de anúncio de loja */}
        <TouchableOpacity style={styles.bannerCard} activeOpacity={0.8}>
          <View style={styles.bannerContent}>
            <View style={styles.bannerTextArea}>
              <Text style={styles.bannerTag}>DESTAQUE</Text>
              <Text style={styles.bannerTitle}>Boutique Elegance</Text>
              <Text style={styles.bannerSubtitle}>
                Novidades de inverno com até 30% OFF
              </Text>
              <View style={styles.bannerButton}>
                <Text style={styles.bannerButtonText}>Ver loja</Text>
              </View>
            </View>
            <View style={styles.bannerImageArea}>
              <View style={styles.bannerImagePlaceholder}>
                <Ionicons
                  name="storefront-outline"
                  size={48}
                  color={Colors.primary}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Categorias - linha 2 */}
        <View style={styles.categoriaRow}>
          {CATEGORIAS2.map(renderCategoria)}
        </View>

        {/* Espaço para o menu inferior não cobrir */}
        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Menu inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setTabAtiva("home")}
          activeOpacity={0.8}
        >
          <View
            style={[
              styles.navIconWrapper,
              tabAtiva === "home" && styles.navIconActive,
            ]}
          >
            <Ionicons
              name="home"
              size={22}
              color={tabAtiva === "home" ? Colors.white : Colors.primary}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setTabAtiva("categorias")}
          activeOpacity={0.8}
        >
          <View
            style={[
              styles.navIconWrapper,
              tabAtiva === "categorias" && styles.navIconActive,
            ]}
          >
            <Ionicons
              name="car-outline"
              size={22}
              color={tabAtiva === "categorias" ? Colors.white : Colors.primary}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setTabAtiva("perfil")}
          activeOpacity={0.8}
        >
          <View
            style={[
              styles.navIconWrapper,
              tabAtiva === "perfil" && styles.navIconActive,
            ]}
          >
            <Ionicons
              name="person-outline"
              size={22}
              color={tabAtiva === "perfil" ? Colors.white : Colors.primary}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const CARD_SIZE = (width - 17 * 2 - 12 * 3) / 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 55,
    paddingHorizontal: 17,
  },

  // Localização
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    marginBottom: 16,
  },
  locationText: {
    fontSize: 18,
    fontFamily: Fonts.extraLight,
    color: Colors.black,
  },

  // Header
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  greeting: {
    fontSize: 18,
    fontFamily: Fonts.light,
    color: Colors.black,
  },
  cartButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  // Busca
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 22.5,
    height: 45,
    paddingHorizontal: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.13,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 24,
  },
  searchIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: Fonts.extraLight,
    color: Colors.black,
    height: "100%",
  },

  // Categorias
  categoriaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  categoriaCard: {
    width: CARD_SIZE,
    height: 80,
    backgroundColor: Colors.white,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    gap: 4,
  },
  categoriaNome: {
    fontSize: 10,
    fontFamily: Fonts.regular,
    color: Colors.text,
    textAlign: "center",
  },

  // Banner
  bannerCard: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    height: 216,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    overflow: "hidden",
  },
  bannerContent: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
  },
  bannerTextArea: {
    flex: 1,
    justifyContent: "center",
  },
  bannerTag: {
    fontSize: 10,
    fontFamily: Fonts.semiBold,
    color: Colors.primary,
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  bannerTitle: {
    fontSize: 20,
    fontFamily: Fonts.semiBold,
    color: Colors.black,
    marginBottom: 6,
  },
  bannerSubtitle: {
    fontSize: 13,
    fontFamily: Fonts.extraLight,
    color: Colors.text,
    marginBottom: 16,
    lineHeight: 18,
  },
  bannerButton: {
    backgroundColor: Colors.primary,
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: "flex-start",
  },
  bannerButtonText: {
    fontSize: 12,
    fontFamily: Fonts.semiBold,
    color: Colors.white,
  },
  bannerImageArea: {
    width: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImagePlaceholder: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#F5EAFF",
    justifyContent: "center",
    alignItems: "center",
  },

  // Bottom Nav
  bottomNav: {
    position: "absolute",
    bottom: 20,
    left: (width - 220) / 2,
    width: 220,
    height: 56,
    backgroundColor: Colors.white,
    borderRadius: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.13,
    shadowRadius: 4,
    elevation: 5,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navIconWrapper: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  navIconActive: {
    backgroundColor: Colors.primary,
  },
});
