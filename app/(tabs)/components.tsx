import React, { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  Modal,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ComponentsScreen() {
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);
  const [loading, setLoading] = useState(false);

  const items = ['React', 'Native', 'Expo', 'JavaScript'];
  const sections = [
    { title: 'Linguagens', data: ['JavaScript', 'TypeScript'] },
    { title: 'Frameworks', data: ['React Native', 'Expo'] },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Componentes do React Native</Text>

        {/* CARD: TextInput + Alert */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            <Ionicons name="text" size={20} /> TextInput + Alert
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Digite algo..."
            value={text}
            onChangeText={setText}
          />
          <Button title="Mostrar Alerta" onPress={() => Alert.alert('Alerta', `Você digitou: ${text}`)} />
        </View>

        {/* CARD: Imagem */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            <Ionicons name="image" size={20} /> Image
          </Text>
          <Image source={require('@/assets/images/icon.png')} style={styles.image} />
        </View>

        {/* CARD: Modal */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            <Ionicons name="albums" size={20} /> Modal
          </Text>
          <Button title="Abrir Modal" onPress={() => setModalVisible(true)} />
          <Modal visible={modalVisible} animationType="slide" transparent>
            <View style={styles.modalOverlay}>
              <View style={styles.modalView}>
                <Text>Olá, este é um modal!</Text>
                <Button title="Fechar" onPress={() => setModalVisible(false)} />
              </View>
            </View>
          </Modal>
        </View>

        {/* CARD: Loader */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            <Ionicons name="refresh-circle" size={20} /> ActivityIndicator
          </Text>
          <Button title="Mostrar Loader" onPress={() => setLoading(!loading)} />
          {loading && <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 10 }} />}
        </View>

        {/* CARD: FlatList */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            <Ionicons name="list" size={20} /> FlatList
          </Text>
          <FlatList
            data={items}
            keyExtractor={(item) => item}
            scrollEnabled={false}
            renderItem={({ item }) => <Text style={styles.listItem}>• {item}</Text>}
          />
        </View>

        {/* CARD: SectionList */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            <Ionicons name="list-circle" size={20} /> SectionList
          </Text>
          <SectionList
            sections={sections}
            keyExtractor={(item, index) => item + index}
            scrollEnabled={false}
            renderItem={({ item }) => <Text style={styles.listItem}>- {item}</Text>}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
          />
        </View>

        {/* CARD: Switch */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            <Ionicons name="toggle" size={20} /> Switch
          </Text>
          <View style={styles.switchRow}>
            <Text>{switchOn ? 'Ligado' : 'Desligado'}</Text>
            <Switch value={switchOn} onValueChange={setSwitchOn} />
          </View>
        </View>

        {/* CARD: TouchableOpacity */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            <Ionicons name="hand-left" size={20} /> TouchableOpacity
          </Text>
          <TouchableOpacity style={styles.touchable} onPress={() => Alert.alert('Você tocou!')}>
            <Text style={styles.touchableText}>Toque Aqui</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F7FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  listItem: {
    fontSize: 16,
    paddingVertical: 2,
    paddingLeft: 10,
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#EEE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  touchable: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  touchableText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
