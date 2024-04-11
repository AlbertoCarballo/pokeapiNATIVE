import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Buscador = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Lógica de búsqueda, puede ser llamada por el componente padre
    onSearch(query);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
        value={query}
        onChangeText={setQuery}
      />
      <Button
        title="Buscar"
        onPress={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default Buscador;
