import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import images from '../images';
import { useNavigation } from '@react-navigation/native';

const Inputs = ({ placeholder, imageSource, value, onChangeText, passwordentry, onToggleVisibility, autoCapitalize }) => {
    return (
        <View style={styles.inputContainer}>
            <Image source={imageSource} style={styles.icon} />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={'#666161'}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={passwordentry}
                style={{ flex: 1 }}
                autoCapitalize={autoCapitalize}
            />
            {onToggleVisibility && (
                <TouchableOpacity onPress={onToggleVisibility}>
                    <Image source={passwordentry ? images.eye : images.openeye} style={styles.eyeIcon} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const Register = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const validateField = (name, value) => {
        let newErrors = { ...errors };

        switch (name) {
            case 'email':
                if (!value) {
                    newErrors.email = 'Email is required!';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    newErrors.email = 'Enter a valid email!';
                } else {
                    delete newErrors.email;
                }
                break;

            case 'userName':
                if (!value) {
                    newErrors.userName = 'Username is required!';
                } else if (!/^[0-9A-Za-z]{6,16}$/.test(value)) {
                    newErrors.userName = 'Enter a valid username!';
                } else {
                    delete newErrors.userName;
                }
                break;

            case 'password':
                if (!value) {
                    newErrors.password = 'Password is required!';
                } else if (!/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/.test(value)) {
                    newErrors.password = 'Must have 1 uppercase, 1 number & 1 special char!';
                } else {
                    delete newErrors.password;
                }
                break;

            case 'confirmPassword':
                if (!value) {
                    newErrors.confirmPassword = 'Confirm Password is required!';
                } else if (value !== password) {
                    newErrors.confirmPassword = 'Passwords do not match!';
                } else {
                    delete newErrors.confirmPassword;
                }
                break;

            default:
                break;
        }

        setErrors(newErrors);
    };

    const handleRegister = () => {
        if (Object.keys(errors).length === 0 && email && userName && password && confirmPassword) {
            Alert.alert("Registered Successfully", "", [
                {
                    onPress: () => navigation.reset({
                        index: 0,
                        routes: [{ name: "Complete" }],
                    })

                }
            ]);
        } else {
            Alert.alert("Please fill up the Registration form first.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Image style={styles.registerImage} source={images.loginR} />

                <Inputs
                    imageSource={images.email}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => { setEmail(text); validateField('email', text); }}
                    autoCapitalize="none"
                />
                {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                <Inputs
                    imageSource={images.user}
                    placeholder="Username"
                    value={userName}
                    onChangeText={(text) => { setUserName(text); validateField('userName', text); }}
                    autoCapitalize="none"
                />
                {errors.userName && <Text style={styles.errorText}>{errors.userName}</Text>}

                <Inputs
                    imageSource={images.password}
                    placeholder="Password"
                    passwordentry={!passwordVisible}
                    value={password}
                    onChangeText={(text) => { setPassword(text); validateField('password', text); }}
                    onToggleVisibility={() => setPasswordVisible(!passwordVisible)}
                />
                {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                <Inputs
                    imageSource={images.password}
                    placeholder="Confirm Password"
                    passwordentry={!confirmPasswordVisible}
                    value={confirmPassword}
                    onChangeText={(text) => { setConfirmPassword(text); validateField('confirmPassword', text); }}
                    onToggleVisibility={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                />
                {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.backbtn} onPress={handleRegister}>
                    <Text style={styles.buttonText} onPress={() => navigation.goBack()} >Back</Text>

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
    inputContainer: {
        marginTop: 20,
        backgroundColor: 'white',
        width: 300,
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    icon: {
        height: 20,
        width: 20,
        marginRight: 10,
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
    eyeIcon: {
        height: 15,
        width: 20,
    },
    errorText: {
        color: 'red',
        marginTop: 5,
    },
    backbtn: {
        marginTop: 7
    }
});
