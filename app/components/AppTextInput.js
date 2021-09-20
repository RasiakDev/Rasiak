import React from 'react';
import { View, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function AppTextInput({iconName, width = "100%", size = 24, value, color = colors.medium , onPress, ...otherProps }) {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container} onPress={onPress}>            
                <MaterialCommunityIcons style ={styles.icon} name={iconName} color={color} size={size}/>
                <TextInput value={value} style={[styles.textInput, {width: width}]}  {...otherProps} />
            </View>        
        </TouchableWithoutFeedback>
        );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.light,
        width: "100%",
        flexDirection:'row',
        alignItems: 'center',
        marginVertical: 12,
        borderRadius:6
        
    },
    textInput: {
        width:"100%",
        paddingHorizontal:3,
        height: 60
        
    },
    icon:{
        paddingLeft:9
    }
})
export default AppTextInput;