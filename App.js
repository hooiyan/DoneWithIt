import { MaterialCommunityIcons } from "@expo/vector-icons"
import AppText from "./app/components/AppText"

export default function App() {
  return (
    <View>
      <AppText>Hello React Native</AppText>
      <MaterialCommunityIcons name="email" />
    </View>
  )
}
