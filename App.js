import { View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import AppText from "./app/components/AppText"
import ViewImageScreen from "./app/screen/ViewImageScreen"

export default function App() {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <AppText>Hello React Native</AppText>
      <MaterialCommunityIcons name="email" />
      <ViewImageScreen />
    </View>
  )
}
