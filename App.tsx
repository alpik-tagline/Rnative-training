
//          1st

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


//        2nd
// import React, { useState } from 'react';
// import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
// import images from './images';

// const Inputs = (({ placeholder, imageSource, endImageSource, value, onChangeText, passwordentry, onToggleVisibility, autoCapitalize }) => {
//   return (
//     <View style={styles.login}>
//       <Image source={imageSource} style={styles.icon} />
//       <TextInput
//         placeholder={placeholder}
//         placeholderTextColor={'#666161'}
//         value={value}
//         onChangeText={onChangeText}
//         secureTextEntry={passwordentry}
//         style={{ flex: 1 }}
//         autoCapitalize={autoCapitalize}
//       />
//       {endImageSource && (
//         <TouchableOpacity onPress={onToggleVisibility}>
//           <Image source={endImageSource} style={styles.eyeicon} />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// });

// const App = () => {
//   const [email, setEmail] = useState('');
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const validate = () => {
//     let newErrors: any = {};

//     if (!email) {
//       newErrors.email = 'Email is required!';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Enter a valid email!';
//     }

//     if (!userName) {
//       newErrors.userName = 'Username is required!';
//     } else if (!/^[0-9A-Za-z]{6,16}$/.test(userName)) {
//       newErrors.userName = 'Enter a valid username!';
//     }

//     if (!password) {
//       newErrors.password = 'Password is required!';
//     } else if (!/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/.test(password)) {
//       newErrors.password = 'Enter a valid password!';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleRegister = () => {
//     if (validate()) {
//       Alert.alert("Registered Successfully")
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.background}>
//         <Image style={styles.loginImage} source={images.loginR} />

//         <Inputs imageSource={images.email} placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
//         {errors.email && <Text style={styles.errortxt}>{errors.email}</Text>}

//         <Inputs imageSource={images.user} placeholder="Username" value={userName} onChangeText={setUserName} autoCapitalize="none"
//         />

//         {errors.userName && <Text style={styles.errortxt}>{errors.userName}</Text>}

//         <Inputs
//           imageSource={images.password}
//           placeholder="Password"
//           endImageSource={images.eye}
//           passwordentry={!passwordVisible}
//           value={password}
//           onChangeText={setPassword}
//           onToggleVisibility={() => setPasswordVisible(!passwordVisible)}
//         />
//         {errors.password && <Text style={styles.errortxt}>{errors.password}</Text>}

//         <TouchableOpacity style={styles.btn} onPress={handleRegister}>
//           <Text style={styles.registerBtn}>Register</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   background: {
//     flex: 1,
//     backgroundColor: '#22C7A9',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   loginImage: {
//     marginBottom: 20,
//     height: 260,
//     width: 265,
//   },
//   login: {
//     marginTop: 20,
//     backgroundColor: 'white',
//     width: 300,
//     height: 40,
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//   },
//   icon: {
//     height: 20,
//     width: 20,
//     marginRight: 10,
//   },
//   btn: {
//     borderRadius: 50,
//     backgroundColor: '#DFB497',
//     height: 40,
//     width: 270,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//     shadowColor: 'black',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.5,
//     shadowRadius: 4,
//   },
//   registerBtn: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   eyeicon: {
//     height: 15,
//     width: 20,
//   },
//   errortxt: {
//     color: 'red',
//     marginTop: 5,
//   },
// });

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})