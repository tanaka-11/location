import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Image,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

// Importação da biblioteca de mapa e o sub-componente "Marker"
import MapView, { Marker } from "react-native-maps";

// Importação da biblioteca de localização
import * as Location from "expo-location";

export default function App() {
  // State com localização atual do usuario iniciando nulo
  const [minhaLocalizacao, setMinhaLocalizacao] = useState(null);

  // Efeito de permissão de localização do aparelho e coordenadas atuais
  useEffect(() => {
    async function obterLocalizacao() {
      // Guardando permissão em "status"
      const { status } = await Location.requestForegroundPermissionsAsync();

      // Condicional para localização negada
      if (status !== "granted") {
        Alert.alert(
          "Permissão Necessária",
          "Ative a localização para utilizar o app."
        );
        return;
      }

      // Obtendo dados da localização atual
      let localizacaoAtual = await Location.getCurrentPositionAsync({});
      setMinhaLocalizacao(localizacaoAtual);
    }

    obterLocalizacao();
  }, []);

  // State que define a localização no MapView. Começando nulo, pois o usuario ainda não acionou o botão de "marcarLocal"
  const [localizacao, setLocalizacao] = useState(null);

  // Coordenadas fixas para o componente "mapview"
  const regiaoInicial = {
    // Brasil
    latitude: -10,
    longitude: -55,

    // Zoom no Mapa, quanto menor o numero mais proxima da localização escolhida e quanto maior o numero mais longe da localização escolhida.
    latitudeDelta: 0.8,
    longitudeDelta: 0.8,
  };

  // Função de coordenadas na posição do usuario
  const marcarLocal = () => {
    setLocalizacao({
      // Capturando novos dados de coordenadas na posição do usuario
      latitude: minhaLocalizacao.coords.latitude,
      longitude: minhaLocalizacao.coords.longitude,
      latitudeDelta: 0.6,
      longitudeDelta: 0.6,
    });
  };

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <View style={estilos.viewBotao}>
          <Button
            title="Onde estou?"
            onPress={marcarLocal} // Função de evento
          />
        </View>

        <View style={estilos.viewMapa}>
          <MapView
            style={estilos.mapa}
            region={localizacao ?? regiaoInicial} // Região com condional de coalescência nula(Um ou Outro)
            mapType="standard" // Tipo do mapa
            maxZoomLevel={30} // Zoom maximo para usuario
            minZoomLevel={5} // Zoom minimo para usuario
          >
            {localizacao && (
              <Marker
                coordinate={localizacao} // Coordenada
                title="Você está aqui!" // Titulo ao clicar no marker
                pinColor="blue" // Cor do pin
                draggable // Arrastavel
              />
            )}
          </MapView>
        </View>
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

  viewBotao: {},

  viewMapa: {},
});
