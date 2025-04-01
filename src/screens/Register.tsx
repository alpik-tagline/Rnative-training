import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import images from '../utis/imagePaths';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import appStrings from '../utis/appStrings';

const Register = () => {
    const navigation = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const formik = useFormik({
        initialValues: { email: '', username: '', password: '', confirmpassword: '' },
        validationSchema: Yup.object({
            email: Yup.string()
                .matches(
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    'Invalid email address'
                )
                .required("Email is required"),

            username: Yup.string()
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
                    "Must have 1 char, 1 number"
                )
                .required("Username is required"),

            password: Yup.string()
                .matches(
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                    "Must have 1 uppercase, 1 number & 1 special char!"
                )
                .required('Password is required'),

            confirmpassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
        }),

        onSubmit: () => {
            navigation.reset({
                routes: [{ name: "Complete" }],
            });
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Image style={styles.registerImage} source={images.loginR} />

                <View style={styles.inputWrapper}>
                    <Image source={images.email} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor={'#666161'}
                        onChangeText={formik.handleChange('email')}
                        onBlur={formik.handleBlur('email')}
                        value={formik.values.email}
                        autoCapitalize="none"
                    />
                </View>
                {formik.touched.email && formik.errors.email && (
                    <Text style={styles.errorText}>{formik.errors.email}</Text>
                )}

                <View style={styles.inputWrapper}>
                    <Image source={images.user} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        placeholderTextColor={'#666161'}
                        onChangeText={formik.handleChange('username')}
                        onBlur={formik.handleBlur('username')}
                        value={formik.values.username}
                        autoCapitalize="none"
                    />
                </View>
                {formik.touched.username && formik.errors.username && (
                    <Text style={styles.errorText}>{formik.errors.username}</Text>
                )}

                <View style={styles.inputWrapper}>
                    <Image source={images.password} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor={'#666161'}
                        secureTextEntry={!passwordVisible}
                        onChangeText={formik.handleChange('password')}
                        onBlur={formik.handleBlur('password')}
                        value={formik.values.password}
                    />
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                        <Image source={images.eye} style={styles.eyeIcon} />
                    </TouchableOpacity>
                </View>
                {formik.touched.password && formik.errors.password && (
                    <Text style={styles.errorText}>{formik.errors.password}</Text>
                )}
                <View style={styles.inputWrapper}>
                    <Image source={images.password} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        placeholderTextColor={'#666161'}
                        secureTextEntry={!confirmPasswordVisible}
                        onChangeText={formik.handleChange('confirmpassword')}
                        onBlur={formik.handleBlur('confirmpassword')}
                        value={formik.values.confirmpassword}
                    />
                    <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                        <Image source={images.eye} style={styles.eyeIcon} />
                    </TouchableOpacity>
                </View>
                {formik.touched.confirmpassword && formik.errors.confirmpassword && (
                    <Text style={styles.errorText}>{formik.errors.confirmpassword}</Text>
                )}

                <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}>
                    <Text style={styles.buttonText}>{appStrings.Register}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.backbtn} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>{appStrings.back}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        backgroundColor: '#22C7A9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerImage: {
        marginBottom: 20,
        height: 250,
        width: 250,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        width: 300,
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 20,
    },
    input: {
        flex: 1,
        height: '100%',
        color: '#000',
    },
    icon: {
        height: 20,
        width: 20,
        marginRight: 10,
    },
    eyeIcon: {
        height: 15,
        width: 20,
    },
    button: {
        borderRadius: 50,
        backgroundColor: '#DFB497',
        height: 40,
        width: 270,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginTop: 5,
    },
    backbtn: {
        marginTop: 7,
    },
});
