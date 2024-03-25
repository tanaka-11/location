import { useState } from "react";
import { Image, StatusBar, StyleSheet, View } from "react-native";

// Importação da biblioteca de mapa e o sub-componente "Marker"
import MapView, { Marker } from "react-native-maps";

export default function App() {
  // State com coordenadas fixas
  const [localizacao, setLocalizacao] = useState({
    latitude: -33.867886,
    longitude: -63.987,
    latitudeDelta: 0.8,
    longitudeDelta: 0.8,
  });

  // Coordenadas fixas para o componente "mapview"
  const regiaoInicial = {
    // Brasil
    // latitude: -10,
    // longitude: -55,

    // São Paulo
    latitude: -23.5489,
    longitude: -46.6388,

    // Zoom no Mapa, quanto menor o numero mais proxima da localização escolhida e quanto maior o numero mais longe da localização escolhida.
    latitudeDelta: 0.8,
    longitudeDelta: 0.8,
  };

  // Função com parametro de evento(onPress)
  const marcarLocal = (event) => {
    setLocalizacao({
      ...localizacao, // Capturando os deltas

      // Capturando novos dados de coordenadas a partir do evento(onPress)
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });

    console.log(event.nativeEvent);
  };

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
          style={estilos.mapa}
          onPress={marcarLocal} // Função
          initialRegion={regiaoInicial} // Regiao Inicial
          mapType="hybrid" // Tipo do mapa
          maxZoomLevel={30} // Zoom maximo para usuario
          minZoomLevel={5} // Zoom minimo para usuario
        >
          <Marker
            coordinate={localizacao} // Coordenada
            title="Você está aqui!" // Titulo ao clicar no marker
            pinColor="blue" // Cor do pin
            draggable // Arrastavel
          />
        </MapView>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },

  mapa: {
    width: "100%",
    height: "100%",
  },
});
