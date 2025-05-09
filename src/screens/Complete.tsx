import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import images from '../utis/imagePaths';
import { useNavigation, CommonActions } from '@react-navigation/native';
import appStrings from '../utis/appStrings';

const Complete = () => {

  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.dispatch(
      CommonActions.reset({
        routes: [{ name: 'StartScreen' }],
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View>
          <Image source={images.girl} style={styles.girlPic} />
        </View>
        <View style={styles.alltext}>
          <Text style={styles.reg}>{appStrings.RegistrationComplete}</Text>
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleLogout}>
          <Text style={styles.cbtn}>{appStrings.Logout}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Complete;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: '#22C7A9',
  },
  girlPic: {
    marginTop: 90,
    marginLeft: 90,
    height: 250,
    width: 200,
  },
  reg: {
    fontSize: 25,
    color: '#464444',
    fontWeight: 'bold',
  },
  complete: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#464444',
    paddingLeft: 15,
  },
  alltext: {
    marginTop: 35,
    marginLeft: 115,
  },
  btn: {
    borderRadius: 50,
    backgroundColor: '#DFB497',
    height: 40,
    width: 220,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginLeft: 70,
  },
  cbtn: {
    color: 'white',
    fontSize: 18,
  },
});
