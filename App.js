import { StatusBar } from "expo-status-bar"
import {
  Dimensions,
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  useWindowDimensions,
} from "react-native"
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks"

export default function App() {
  const { landscape } = useDeviceOrientation()

  return (
    <View
      style={{
        backgroundColor: "white",
        display: "flex",
        flex: 1,
        height: "100%",
        width: "100%",
      }}>
      {/* <StatusBar style="auto" /> */}
      <Image
        source={require("./assets/unsplash-example1.jpg")}
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      />
      <View
        style={{
          backgroundColor: "gold",
          height: 50,
          width: "100%",
          zIndex: 999,
          position: "absolute",
          bottom: 0,
        }}
      />
      <View
        style={{
          backgroundColor: "pink",
          height: 50,
          width: "100%",
          zIndex: 999,
          position: "absolute",
          bottom: 50,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
