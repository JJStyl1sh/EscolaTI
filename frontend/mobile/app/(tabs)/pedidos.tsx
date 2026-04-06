import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Fonts } from '../../constants/theme';

const STATUS_STEPS = [
  { label: 'Pedido realizado', hora: '14:32', done: true },
  { label: 'Confirmado pela loja', hora: '14:35', done: true },
  { label: 'Pronto para coleta', hora: '14:50', done: true },
  { label: 'Saiu para entrega', hora: '', done: false },
  { label: 'Entregue', hora: '', done: false },
];

const HISTORICO = [
  {
    id: '1',
    loja: 'Boutique Elegance',
    data: 'Qui, 03/04/2026',
    itens: '1x Vestido Midi Floral, 1x Cinto Trançado',
    valor: 'R$ 189,90',
    status: 'Entregue',
  },
  {
    id: '2',
    loja: 'Moda & Estilo',
    data: 'Seg, 31/03/2026',
    itens: '2x Camiseta Básica, 1x Calça Jeans Slim',
    valor: 'R$ 247,70',
    status: 'Entregue',
  },
  {
    id: '3',
    loja: 'Ateliê da Rua',
    data: 'Sex, 28/03/2026',
    itens: '1x Jaqueta Jeans Oversized',
    valor: 'R$ 159,00',
    status: 'Cancelado',
  },
];

export default function PedidosScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageTitle}>Pedidos</Text>

        {/* Em andamento */}
        <Text style={styles.sectionTitle}>Em andamento</Text>
        <View style={styles.trackingCard}>
          <View style={styles.trackingHeader}>
            <View style={styles.storeIcon}>
              <Ionicons name="storefront" size={20} color={Colors.primary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.storeName}>Boutique Elegance</Text>
              <Text style={styles.storeSubtitle}>Previsão: 15:10 – 15:25</Text>
            </View>
          </View>

          {/* Progress bar */}
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '60%' }]} />
          </View>

          {/* Timeline */}
          <View style={styles.timeline}>
            {STATUS_STEPS.map((step, i) => (
              <View key={i} style={styles.timelineRow}>
                <View style={styles.timelineDotCol}>
                  <View style={[styles.dot, step.done && styles.dotDone]} />
                  {i < STATUS_STEPS.length - 1 && (
                    <View style={[styles.line, step.done && styles.lineDone]} />
                  )}
                </View>
                <View style={styles.timelineTextCol}>
                  <Text style={[styles.timelineLabel, step.done && styles.timelineLabelDone]}>
                    {step.label}
                  </Text>
                  {step.hora ? (
                    <Text style={styles.timelineHora}>{step.hora}</Text>
                  ) : null}
                </View>
              </View>
            ))}
          </View>

          <View style={styles.trackingActions}>
            <TouchableOpacity>
              <Text style={styles.actionTextSecondary}>Ajuda</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.actionTextPrimary}>Acompanhar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Histórico */}
        <Text style={styles.sectionTitle}>Histórico</Text>

        {HISTORICO.map((pedido) => (
          <TouchableOpacity key={pedido.id} style={styles.historyCard} activeOpacity={0.7}>
            <View style={styles.historyHeader}>
              <View style={styles.storeIconSmall}>
                <Ionicons name="storefront-outline" size={16} color={Colors.primary} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.historyLoja}>{pedido.loja}</Text>
                <Text style={styles.historyData}>{pedido.data}</Text>
              </View>
              <View style={[
                styles.statusBadge,
                pedido.status === 'Cancelado' && styles.statusCancelado,
              ]}>
                <Text style={[
                  styles.statusText,
                  pedido.status === 'Cancelado' && styles.statusTextCancelado,
                ]}>
                  {pedido.status}
                </Text>
              </View>
            </View>
            <Text style={styles.historyItens}>{pedido.itens}</Text>
            <View style={styles.historyFooter}>
              <Text style={styles.historyValor}>{pedido.valor}</Text>
              <Ionicons name="chevron-forward" size={18} color={Colors.textLight} />
            </View>
          </TouchableOpacity>
        ))}

        <View style={{ height: 90 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { paddingTop: 55, paddingHorizontal: 20 },
  pageTitle: {
    fontSize: 26, fontFamily: Fonts.semiBold, color: Colors.black, marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18, fontFamily: Fonts.semiBold, color: Colors.black, marginBottom: 14,
  },

  // Tracking card
  trackingCard: {
    backgroundColor: Colors.white, borderRadius: 16, padding: 18,
    marginBottom: 28,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 6, elevation: 3,
  },
  trackingHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 14, gap: 12 },
  storeIcon: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: '#F5EAFF',
    justifyContent: 'center', alignItems: 'center',
  },
  storeName: { fontSize: 15, fontFamily: Fonts.semiBold, color: Colors.black },
  storeSubtitle: { fontSize: 12, fontFamily: Fonts.light, color: Colors.textLight },

  progressBar: {
    height: 4, backgroundColor: '#E8E8E8', borderRadius: 2, marginBottom: 18,
  },
  progressFill: {
    height: 4, backgroundColor: Colors.primary, borderRadius: 2,
  },

  // Timeline
  timeline: { marginBottom: 16 },
  timelineRow: { flexDirection: 'row', minHeight: 32 },
  timelineDotCol: { width: 20, alignItems: 'center' },
  dot: {
    width: 10, height: 10, borderRadius: 5,
    backgroundColor: '#D9D9D9', marginTop: 3,
  },
  dotDone: { backgroundColor: Colors.primary },
  line: { width: 2, flex: 1, backgroundColor: '#D9D9D9' },
  lineDone: { backgroundColor: Colors.primary },
  timelineTextCol: { flex: 1, paddingLeft: 10, paddingBottom: 8 },
  timelineLabel: { fontSize: 13, fontFamily: Fonts.regular, color: '#AFAFAF' },
  timelineLabelDone: { color: Colors.black },
  timelineHora: { fontSize: 11, fontFamily: Fonts.light, color: Colors.textLight },

  trackingActions: {
    flexDirection: 'row', justifyContent: 'space-between',
    borderTopWidth: 1, borderTopColor: '#F0F0F0', paddingTop: 14,
  },
  actionTextSecondary: { fontSize: 14, fontFamily: Fonts.semiBold, color: Colors.primary },
  actionTextPrimary: { fontSize: 14, fontFamily: Fonts.semiBold, color: Colors.primary },

  // History cards
  historyCard: {
    backgroundColor: Colors.white, borderRadius: 14, padding: 16, marginBottom: 12,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06, shadowRadius: 4, elevation: 2,
  },
  historyHeader: {
    flexDirection: 'row', alignItems: 'center', marginBottom: 10, gap: 10,
  },
  storeIconSmall: {
    width: 32, height: 32, borderRadius: 16, backgroundColor: '#F5EAFF',
    justifyContent: 'center', alignItems: 'center',
  },
  historyLoja: { fontSize: 14, fontFamily: Fonts.semiBold, color: Colors.black },
  historyData: { fontSize: 11, fontFamily: Fonts.light, color: Colors.textLight },
  statusBadge: {
    backgroundColor: '#E8F5E9', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 10,
  },
  statusCancelado: { backgroundColor: '#FDECEA' },
  statusText: { fontSize: 11, fontFamily: Fonts.semiBold, color: '#2E7D32' },
  statusTextCancelado: { color: '#C62828' },
  historyItens: {
    fontSize: 13, fontFamily: Fonts.light, color: Colors.text,
    marginBottom: 10, lineHeight: 18,
  },
  historyFooter: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
  },
  historyValor: { fontSize: 15, fontFamily: Fonts.semiBold, color: Colors.black },
});
