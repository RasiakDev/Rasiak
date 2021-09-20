import React from 'react';
import {View, Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

function WelcomeScreen(props) {

    return (

        <Screen style={styles.container}>
            <View style={styles.logoContainer}>
            <Image resizeMode='contain' style={styles.logo} source={require('../assets/logo.png')}/>
            <AppText>Welcome to EpicMode Shop</AppText>
            </View>
            <AppButton onPress={() => console.log("pressed")} style={styles.button} title="LOGIN"/>
            <AppButton onPress={() => console.log("pressed")} style={styles.button} title="REGISTER"/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.background,
        justifyContent: 'flex-end',
        paddingHorizontal: 9,
        paddingBottom: 90
    },
     logoContainer:{
        alignSelf: 'center',
        position: 'absolute',
        top: 50,
        width:300,
        height:250,
        justifyContent: 'center',
        alignItems: 'center',

 
       
    },
     logo:{
        width:150,
        height:250,       
    },   
    button: {
        marginBottom: 18,
    }
})
export default WelcomeScreen;