import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { Colors } from "../../constants/theme";

const icons = {
  home: require("../../assets/images/icon-home.png"),
  homeWhite: require("../../assets/images/icon-home-white.png"),
  categories: require("../../assets/images/icon-categories.png"),
  categoriesWhite: require("../../assets/images/icon-categories-white.png"),
  pedidos: require("../../assets/images/icon-pedidos.png"),
  pedidosWhite: require("../../assets/images/icon-pedidos-white.png"),
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="pedidos" options={{ title: "Pedidos" }} />
      <Tabs.Screen name="perfil" options={{ title: "Perfil" }} />
    </Tabs>
  );
}

function CustomTabBar({ state, navigation }: any) {
  const tabs = [
    { name: "index", icon: icons.home, iconActive: icons.homeWhite },
    { name: "pedidos", icon: icons.pedidos, iconActive: icons.pedidosWhite },
    { name: "perfil", icon: null, iconActive: null }, // usa Ionicons
  ];

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        {tabs.map((tab, index) => {
          const isActive = state.index === index;
          const isPerfil = tab.name === "perfil";

          return (
            <TouchableOpacity
              key={tab.name}
              style={styles.tabItem}
              onPress={() =>
                navigation.navigate(tab.name === "index" ? "index" : tab.name)
              }
              activeOpacity={0.7}
            >
              <View
                style={[styles.iconWrap, isActive && styles.iconWrapActive]}
              >
                {isPerfil ? (
                  <Ionicons
                    name="person"
                    size={22}
                    color={isActive ? Colors.white : Colors.primary}
                  />
                ) : (
                  <Image
                    source={isActive ? tab.iconActive! : tab.icon!}
                    style={[
                      styles.icon,
                      // Ícones inativos usam tintColor purple para ficarem visíveis
                      !isActive && { tintColor: Colors.primary },
                    ]}
                    resizeMode="contain"
                  />
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  bar: {
    width: 220,
    height: 51,
    backgroundColor: Colors.white,
    borderRadius: 25.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.13,
    shadowRadius: 4,
    elevation: 5,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 21, // ← metade de 42 = círculo perfeito
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  iconWrapActive: {
    backgroundColor: Colors.primary, // fundo roxo redondo quando ativo
  },
  icon: {
    width: 22,
    height: 22,
  },
});
