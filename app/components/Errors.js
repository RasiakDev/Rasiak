import React, { Children } from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function Errors({children}) {

    return (

        <AppText style={styles.text}>{children}</AppText>
    );
}

const styles = StyleSheet.create({
    text:{
        color:colors.d,
        fontSize:16,
        fontStyle: 'italic',
        color: colors.primary,
        paddingLeft: 2
    }
})
export default Errors;