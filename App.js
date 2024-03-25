import { StatusBar, StyleSheet, View } from "react-native";

// Importação da biblioteca de mapa e o sub-componente "Marker"
import MapView, { Marker } from "react-native-maps";

export default function App() {
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

  // Coordenadas fixas para o sub-componente "marker"
  const localizacao = {
    latitude: -33.867886,
    longitude: -63.987,
    latitudeDelta: 0.8,
    longitudeDelta: 0.8,
  };

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
          style={estilos.mapa}
          initialRegion={regiaoInicial} // Regiao Inicial
          mapType="hybrid" // Tipo do mapa
          // maxZoomLevel={30} // Zoom maximo para usuario
          // minZoomLevel={5} // Zoom minimo para usuario
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
