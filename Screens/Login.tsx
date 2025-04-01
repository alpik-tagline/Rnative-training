import React, { useState } from 'react';
import images from '../images';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';

const Inputs = ({ placeholder, imageSource, endImageSource, value, onChangeText, passwordentry, onToggleVisibility, autoCapitalize }) => {
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
            {endImageSource && (
                <TouchableOpacity onPress={onToggleVisibility}>
                    <Image source={passwordentry ? images.eye : images.openeye} style={styles.eyeIcon} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const Login = () => {
    const navigation = useNavigation();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);

    const validateUserName = (text) => {
        setUserName(text);

        const emailRegex = /^\S+@\S+\.\S+$/;
        const usernameRegex = /^[0-9A-Za-z]{6,16}$/;

        if (!text) {
            setErrors(prev => ({ ...prev, userName: 'Username or Email is required!' }));
        } else if (!emailRegex.test(text) && !usernameRegex.test(text)) {
            setErrors(prev => ({ ...prev, userName: 'Enter a valid username or email!' }));
        } else {
            setErrors(prev => ({ ...prev, userName: '' }));
        }
    };

    const validatePassword = (text) => {
        setPassword(text);
        if (!text) {
            setErrors(prev => ({ ...prev, password: 'Password is required!' }));
        } else if (!/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/.test(text)) {
            setErrors(prev => ({ ...prev, password: 'Must have 1 uppercase, 1 number & 1 special char!' }));
        } else {
            setErrors(prev => ({ ...prev, password: '' }));
        }
    };

    const handleLogin = () => {
        if (!errors.userName && !errors.password && userName && password) {
            Alert.alert("Login Successful", "", [
                {
                    onPress: () => navigation.reset({
                        index: 0,
                        routes: [{ name: "Complete" }],
                    })

                }
            ]);
        } else {
            Alert.alert("Please enter a valid username/email and password.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Image style={styles.loginImage} source={images.loginn} />
                <View style={styles.descText}>
                    <Text style={styles.welcomeText}>Welcome Back</Text>
                    <Text style={styles.descriptionText}>
                        Lorem ipsum dolor sit amet, consectetur {"\n"}
                        adipiscing elit. Diam maecenas mi non sed ut{"\n"}
                        odio. Non, justo, sed facilisi et.
                    </Text>
                </View>

                <Inputs
                    imageSource={images.user}
                    placeholder="Username or Email"
                    value={userName}
                    onChangeText={validateUserName}
                    autoCapitalize="none"
                />
                {errors.userName ? <Text style={styles.errorText}>{errors.userName}</Text> : null}

                <Inputs
                    imageSource={images.password}
                    placeholder="Password"
                    endImageSource={images.eye}
                    passwordentry={!passwordVisible}
                    value={password}
                    onChangeText={validatePassword}
                    onToggleVisibility={() => setPasswordVisible(!passwordVisible)}
                />
                {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

                <View style={styles.signUpContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>
                    <Text>Forgot Password?</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
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
