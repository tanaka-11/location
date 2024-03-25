import { StatusBar, StyleSheet, View } from "react-native";

// Importação da biblioteca de mapa
import MapView from "react-native-maps";

export default function App() {
  // Cordenadas fixas
  const regiaoInicial = {
    latitude: -10,
    longitude: -55,

    // Zoom no Mapa, quanto menor mais proxima da localização escolhida e quanto mais mais longe da localização escolhida
    latitudeDelta: 1,
    longitudeDelta: 1,
  };

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView style={estilos.mapa} initialRegion={regiaoInicial} />
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
