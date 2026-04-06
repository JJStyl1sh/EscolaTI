import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors, Fonts } from '../../constants/theme';

type MenuItemProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  badge?: string;
  onPress?: () => void;
};

function MenuItem({ icon, label, badge, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress} activeOpacity={0.6}>
      <Ionicons name={icon} size={22} color={Colors.textLight} />
      <Text style={styles.menuLabel}>{label}</Text>
      <View style={styles.menuRight}>
        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
        <Ionicons name="chevron-forward" size={18} color="#CCC" />
      </View>
    </TouchableOpacity>
  );
}

export default function PerfilScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* Header com gradiente roxo */}
        <View style={styles.headerBg}>
          <View style={styles.headerContent}>
            <Image
              source={require('../../assets/images/perfil-exemplo.jpeg')}
              style={styles.avatar}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.userName}>Marina Sena</Text>
              <Text style={styles.userEmail}>marinasena@email.com</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="create-outline" size={22} color={Colors.white} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Seções */}
        <View style={styles.section}>
          <MenuItem icon="chatbubble-ellipses-outline" label="Conversas" badge="2" />
          <MenuItem icon="notifications-outline" label="Notificações" />
        </View>

        <View style={styles.section}>
          <MenuItem icon="person-outline" label="Dados da conta" />
          <MenuItem icon="location-outline" label="Endereços" />
          <MenuItem icon="card-outline" label="Pagamentos" />
        </View>

        <View style={styles.section}>
          <MenuItem icon="heart-outline" label="Favoritos" />
          <MenuItem icon="receipt-outline" label="Meus pedidos" />
        </View>

        <View style={styles.section}>
          <MenuItem icon="settings-outline" label="Configurações" />
          <MenuItem icon="shield-checkmark-outline" label="Privacidade (LGPD)" />
          <MenuItem icon="help-circle-outline" label="Ajuda" />
        </View>

        {/* Botão de logout */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout} activeOpacity={0.7}>
          <Ionicons name="log-out-outline" size={20} color="#C62828" />
          <Text style={styles.logoutText}>Sair da conta</Text>
        </TouchableOpacity>

        <Text style={styles.version}>Vitryne v1.0.0</Text>

        <View style={{ height: 90 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { paddingBottom: 20 },

  // Header
  headerBg: {
    backgroundColor: Colors.primary,
    paddingTop: 55,
    paddingBottom: 28,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 16,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2.5,
    borderColor: Colors.white,
  },
  userName: {
    fontSize: 18,
    fontFamily: Fonts.semiBold,
    color: Colors.white,
  },
  userEmail: {
    fontSize: 13,
    fontFamily: Fonts.light,
    color: 'rgba(255,255,255,0.8)',
  },

  // Sections
  section: {
    backgroundColor: Colors.white,
    borderRadius: 14,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#F0F0F0',
    gap: 14,
  },
  menuLabel: {
    flex: 1,
    fontSize: 15,
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  menuRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  badge: {
    backgroundColor: '#E53935',
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 11,
    fontFamily: Fonts.semiBold,
    color: Colors.white,
  },

  // Logout
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 8,
    marginHorizontal: 16,
    paddingVertical: 14,
  },
  logoutText: {
    fontSize: 15,
    fontFamily: Fonts.semiBold,
    color: '#C62828',
  },

  version: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: Fonts.light,
    color: '#AFAFAF',
    marginTop: 8,
  },
});
