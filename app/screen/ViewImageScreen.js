import React from "react"
import { Image, StyleSheet, View } from "react-native"
import colors from "../config/colors"

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/unsplash-example2.jpg")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    height: 50,
    width: 50,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    height: "100%",
    width: "100%",
  },
})
