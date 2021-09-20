import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";
import DismissKeyboardView from "./DismissKeyboard";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <DismissKeyboardView style={style}>{children}</DismissKeyboardView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
