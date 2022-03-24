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
        backgroundColor: "black",
        display: "flex",
        flex: 1,
        justifyContent: "space-evenly",
        height: "100%",
        width: "100%",
      }}>
      {/* <StatusBar style="auto" /> */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 20,
          paddingRight: 20,
        }}>
        <View
          style={{
            backgroundColor: "gold",
            height: 50,
            width: 50,
          }}
        />
        <View
          style={{
            backgroundColor: "pink",
            height: 50,
            width: 50,
          }}
        />
      </View>
      <Image
        source={require("./assets/unsplash-example1.jpg")}
        style={{ height: "70%", width: "100%", zIndex: 0 }}
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
