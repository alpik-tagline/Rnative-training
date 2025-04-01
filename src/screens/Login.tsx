import React, { useState } from 'react';
import images from '../utis/imagePaths';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import appStrings from '../utis/appStrings';

const Login = () => {
    const navigation = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: Yup.object({
            email: Yup.string()
                .test(
                    'email-or-username',
                    'Invalid email address or username',
                    value => /^[0-9A-Za-z]{6,16}$/.test(value) || /^\S+@\S+\.\S+$/.test(value)
                )
                .required("Email or username is required"),
            password: Yup.string()
                .matches(
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                    "Must have 1 uppercase, 1 number & 1 special char!"
                )
                .required('Password is required'),
        }),
        onSubmit: (values, { setTouched, setSubmitting }) => {
            if (Object.keys(formik.errors).length > 0) {
                setTouched({
                    email: true,
                    password: true,
                });
                return;
            }

            navigation.reset({
                routes: [{ name: "Complete" }],
            });

            setSubmitting(false);
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Image style={styles.loginImage} source={images.loginn} />
                <View style={styles.descText}>
                    <Text style={styles.welcomeText}>{appStrings.Welcomeback}</Text>
                    <Text style={styles.descriptionText}>
                        {appStrings.Lorem}
                    </Text>
                </View>

                <View style={styles.inputWrapper}>
                    <Image source={images.user} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Username or Email"
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

                <View style={styles.signUpContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.signUpText}>{appStrings.Singup}</Text>
                    </TouchableOpacity>
                    <Text>{appStrings.Forgotpassword}</Text>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={formik.handleSubmit}
                >
                    <Text style={styles.buttonText}>{appStrings.Login}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;

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
    loginImage: {
        marginBottom: 20,
        height: 250,
        width: 230,
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
    descText: {
        alignItems: "center"
    },
    welcomeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#464444"
    },
    descriptionText: {
        textAlign: "center",
        fontSize: 13,
        marginTop: 3
    },
    signUpContainer: {
        marginTop: 9,
        flexDirection: "row",
        gap: 120,
    },
    signUpText: {
        color: "white"
    }
});
