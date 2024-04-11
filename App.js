import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from "react";
import Encabezado from './components/JavaScript/Encabezado.js';
import Buscador from './components/JavaScript/Buscador.js';
import Logo from './components/JavaScript/Logo.js';
import PokemonCard from './components/JavaScript/PokemonCard.js';
// import PokemonCard from'./'

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const [nombre, setNombre] = useState("Nombre");
  const [name, setName] = useState("Nombre");
  const [pokemon, setPokemon] = useState("");

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";

  useEffect(() => {


    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      });
  }, []);

  return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Encabezado />

        <Logo />

        <Buscador />

        {/*pokemon ? (
      <View style={styles.contenedorPokemon}>
        <PokemonCard
          name={pokemon.name}
          image={{ uri: pokemon.sprites.front_default }}
        />
      </View>
    ) : (
      <Text>No se ha encontrado ningún Pokémon</Text>
    )}*/}

        {pokemonList.map((pokemon, index) => (
          <PokemonCard
            key={index}
            name={pokemon.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1}.png`}
          />
        ))}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00d4ff',
  },
  contenedorEncabezado: {
    marginTop: 30,
    marginBottom: 10,
  },
  contenedorBuscador: {
    marginBottom: 10,
  },
  contenedorPokemon: {
    alignItems: 'center',
    marginBottom: 10,
  },
  scrollViewContent: {
    backgroundColor: "#00d4ff",
    paddingHorizontal: 10,
    paddingBottom: 2000, // Añade un relleno en la parte inferior para asegurarte de que el contenido sea lo suficientemente grande para permitir el desplazamiento
  },
});
