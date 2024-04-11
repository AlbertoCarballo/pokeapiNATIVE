import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Encabezado = () => {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>PokeAPI</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#00d4ff', // Color de fondo blanco
    borderBottomWidth: 1,
    borderBottomColor: '#000000', // Color del borde inferior gris claro
    marginTop: 50
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000', // Color del texto oscuro
  },
  settingsContainer: {
    alignItems: 'center',
  },
  settingsText: {
    fontSize: 16,
    color: '#666', // Color del texto gris medio
  },
});

export default Encabezado;



