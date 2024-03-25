import { StatusBar, StyleSheet, View } from "react-native";

// Importação da biblioteca de mapa
import MapView from "react-native-maps";

export default function App() {
  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView style={estilos.map} />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: "100%",
    height: "100%",
  },
});
