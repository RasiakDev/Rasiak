import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import Screen from './app/components/Screen';
import RegisterScreen from './app/screens/RegisterScreen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import WelcomeScreen from './app/screens/WelcomeScreen';
import FormValidation from './app/components/FormValidation';


export default function App() {
  return (

      <LoginScreen/>

  );
}

const styles = StyleSheet.create({
  container: {

  },
});
