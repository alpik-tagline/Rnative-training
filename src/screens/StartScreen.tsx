import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import images from '../utis/imagePaths';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import appStrings from '../utis/appStrings';

const StartScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <View>
                    <Image style={styles.img} source={images.allnewd} />
                    <View style={styles.desc}>
                        <Text style={styles.ftext}>{appStrings.Foodienator}</Text>
                        <View style={styles.desctext}>
                            <Text style={styles.descText1}>{appStrings.Order}</Text>
                        </View>
                    </View>
                    <View style={styles.loginRegister}>
                        <TouchableOpacity style={styles.signin} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.buttonText}>{appStrings.Signin}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.registerText}>{appStrings.Register}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default StartScreen;

const styles = StyleSheet.create({
    container: { flex: 1 },
    background: { flex: 1, backgroundColor: '#22C7A9' },
    img: { marginTop: 90, marginLeft: 75, width: 260, height: 300 },
    ftext: { fontSize: 33, fontWeight: '900', color: 'white', marginTop: 25, marginLeft: 80 },
    desc: { marginTop: 10 },
    desctext: { marginTop: 5 },
    descText1: { marginLeft: 95, color: 'white', fontSize: 14 },
    descText2: { marginLeft: 165, color: 'white', fontSize: 14 },
    loginRegister: { marginTop: 60, flexDirection: 'row', justifyContent: 'center', shadowColor: 'black', shadowRadius: 5 },
    signin: { backgroundColor: '#2DB6A3', width: 150, height: 45, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 },
    register: { backgroundColor: '#DADADA', width: 150, height: 45, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 10, borderBottomRightRadius: 10 },
    buttonText: { fontWeight: 'bold', color: 'white' },
    registerText: { fontWeight: 'bold', color: 'black' },
});
