import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import { Formik } from 'formik';
import FormValidation from '../components/FormValidation';
import * as yup from 'yup';
import colors from '../config/colors';

function LoginScreen(props) {

        const validation = yup.object().shape({
        email: yup.string().email().required().label('Email'),
        password: yup.string().min(6).max(20).required().label("Password")
})

    return (
        
        <Screen style={styles.background}>
            <Formik
                onSubmit={values => console.log(values)}
                initialValues={{ email: '', password: '' }}
                validationSchema={validation}
            >
                {({handleSubmit}) => (
                <>                
                    <Image resizeMode='contain' style={styles.logo} source={require('../assets/logo.png')}/>
                    <View style={styles.Inputcontainer}>
                        <FormValidation 
                        iconName="email"
                        name="email"
                        placeholder="Email"
                        />
                        <FormValidation 
                        iconName="key"
                        name="password"
                        placeholder="Password"
                        />
                    </View>
                        <AppButton 
                            style={styles.submitButton}
                            onPress={() => handleSubmit()}
                            title="SUBMIT"
                        />
                </>   
                )}     
            </Formik>
        </Screen>
    );
}
   
const styles = StyleSheet.create({
    background: {
        width: "100%",
        height:"100%",
        alignItems:'center',
        justifyContent:'flex-end',
        backgroundColor: colors.background,
        padding: 9,
        paddingBottom: 45
    },
    logo:{
        width:150,
        height:250,
        position: 'absolute',
        top: 50,
    },
    Inputcontainer:{
        width:"100%",        
        marginBottom: 21,
        marginHorizontal: 30,
        paddingVertical:27,
        backgroundColor: colors.white,
        paddingHorizontal: 21,
        borderRadius: 6,
    },
    submitButton: {
        
    }

})
export default LoginScreen;