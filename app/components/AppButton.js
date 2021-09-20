import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

function AppButton({onPress, style, title}) {

    return (

        <TouchableWithoutFeedback onPress={onPress}>
            <View  style={[styles.container, style]}>
            <AppText style={styles.buttonText}>{title}</AppText>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems:'center',
        width: "100%",
        height: 50,
        borderRadius: 6
    },
    buttonText: {
        fontWeight: 'bold',
        letterSpacing: 0.5,
    }

})
export default AppButton;