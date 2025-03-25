// import { Image, StyleSheet, Text, View } from 'react-native'
// import images from './images'
// import React from 'react'

// const App = () => {



//   return (
//     <View style={styles.container}>
//       <View style={styles.background}>
//         <View>

//           <Image
//             style={styles.img}
//             source={require('../Demo24/images/newd.png')}
//           />
//           <View style={styles.desc}>
//             <Text style={styles.ftext}>Foodienator</Text>
//             <View style={styles.desctext}>
//               <Text style={styles.descText1}>Order your favorite Meals</Text>
//               <Text style={styles.descText2}>Here!</Text>
//             </View>
//           </View>
//           <View style={styles.loginRegister}>
//             <View style={styles.signin}>
//               <Text style={styles.buttonText}>Sign in</Text>
//             </View>
//             <View style={styles.register}>
//               <Text style={styles.registerText}>Register</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   background: {
//     flex: 1,
//     backgroundColor: '#22C7A9',
//   },
//   img: {
//     marginTop: 90,
//     marginLeft: 50,
//     width: 280,
//     height: 300,
//   },
//   ftext: {
//     fontFamily: 'Poppins',
//     fontSize: 33,
//     fontWeight: '900',
//     color: 'white',
//     marginTop: 25,
//     marginLeft: 80,
//   },
//   desc: {
//     marginTop: 10,
//   },
//   desctext: {
//     marginTop: 5,
//   },
//   descText1: {
//     marginLeft: 95,
//     color: 'white',
//     fontSize: 14,
//   },
//   descText2: {
//     marginLeft: 165,
//     color: 'white',
//     fontSize: 14,
//   },
//   loginRegister: {
//     marginTop: 60,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     shadowColor: 'black',
//     shadowRadius: 5,
//   },
//   signin: {
//     backgroundColor: '#2DB6A3',
//     width: 150,
//     height: 45,
//     paddingTop: 13,
//     paddingLeft: 45,
//     borderTopLeftRadius: 10,
//     borderBottomLeftRadius: 10,
//   },
//   register: {
//     backgroundColor: '#DADADA',
//     width: 150,
//     height: 45,
//     borderTopRightRadius: 10,
//     borderBottomRightRadius: 10,
//     paddingTop: 13,
//     paddingLeft: 40,
//     color: 'black'
//   },
//   buttonText: {
//     fontWeight: 'bold',
//     color: 'white',

//   },
//   registerText: {
//     fontWeight: 'bold',
//     color: 'black'
//   },
//   alld: {
//     position: 'absolute'
//   }
// })

import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import images from './images'

const App = () => {

  const [email, setEmail] = useState('')
  const [userName, setuserName] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')


  const validate = () => {
    let newErrors = {};

    if (!email) {
      newErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email!";
    }

    if (!userName) {
      newErrors.userName = "User name is required"
    } else if (/^[0-9A-Za-z]{6,16}$/.test(userName)) {
      newErrors.userName = "Enter valid email"
    }

    if (!password) {
      newErrors.password = "Password is required"
    } else if (/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/.test(password))
      newErrors.password = "Enter valid Password"

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      Alert.alert("Success", "Form Submitted!");
    }

  }



  const Inputs = ({ placeholder, imageSource, endImageSource }) => {
    return (
      <View>
      <View style={styles.login}>
        <Image source={imageSource} style={styles.icon} />
        <TextInput placeholder={placeholder} placeholderTextColor={'#666161'} />
        {endImageSource && <Image source={endImageSource} style={styles.eyeicon} />}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
 </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image
          style={styles.loginImage}
          source={images.loginR}
        />

        <Inputs imageSource={images.email} placeholder={"Email"} />
        <Inputs imageSource={images.user} placeholder={"Username"} />
        <Inputs imageSource={images.password} placeholder={"Password"} endImageSource={images.eye} />

        <View style={styles.btn}>
          <Text style={styles.registerBtn}>
            Register
          </Text>
        </View>

      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: '#22C7A9',
  },
  loginImage: {
    marginTop: 70,
    marginLeft: 45,
    height: 260,
    width: 265,
  },
  login: {
    marginTop: 19,
    backgroundColor: 'white',
    width: 300,
    marginLeft: 35,
    height: 40,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  icon: {
    height: 20,
    width: 20,
    marginLeft: 15,
    marginTop: 10,
    marginRight: 10,
  },
  btn: {
    borderRadius: 50,
    backgroundColor: '#DFB497',
    height: 40,
    width: 270,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 50,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  registerBtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  eyeicon: {
    marginLeft: 150,
    marginTop: 12,
    height: 15,
    width: 20,
  },
})