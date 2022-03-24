import React from "react"
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"

export default function WelcomeScreen() {
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require("../assets/unsplash-example1.jpg")}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/favicon.png")}
          />
          <Text style={styles.tagline}>
            Sell What You Don't Need. This is my first React Native App. Here is
            somemore text!
          </Text>
        </View>
        <View style={styles.loginButton} />
        <View style={styles.registerButton} />
      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#fc5c65",
    height: 70,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: "#4ecdc4",
    height: 70,
    width: "100%",
  },
  tagline: {
    color: "white",
    fontStyle: "italic",
    fontWeight: "800",
    textTransform: "lowercase",
    textAlign: "center",
    paddingHorizontal: 20,
  },
})
