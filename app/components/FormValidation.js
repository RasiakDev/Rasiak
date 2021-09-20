import { useFormikContext } from 'formik';
import React from 'react';
import {StyleSheet } from 'react-native';
import AppTextInput from './AppTextInput';
import Errors from './Errors';



function FormValidation({iconName, placeholder, name}) {

 
   const {handleChange, errors, setFieldTouched, touched} = useFormikContext();
   
    return (
        <>
         <AppTextInput 
         placeholder={placeholder} 
         iconName={iconName}
         onChangeText={handleChange(name)}
         onBlur={() => setFieldTouched(name)}        
         />
         {touched[name] && errors[name] && <Errors>{errors[name]}</Errors>}
         </>
    );
}

const styles = StyleSheet.create({
    container:{

    }
})
export default FormValidation;