import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput, Alert, TouchableWithoutFeedback } from "react-native";
import { Link } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Index() {
	const [intro, setIntro] = useState('');

	// 여기부터 auth 부분
	const nextFunction = async () => {
    try {
      const email = await AsyncStorage.getItem('myEmail');
      const password = await AsyncStorage.getItem('myPassword');
			const name = await AsyncStorage.getItem('myName');
			
      if (email && password) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      } else {
        console.log('Email or password not found in AsyncStorage');
      }
			/*updateProfile(auth.currentUser, {
				displayName: name
			}).then(() => {
				// Profile updated!
				// ...
			}).catch((error) => {
				// An error occurred
				// ...
			});*/
    } catch (error) {
      console.log('Error retrieving data from AsyncStorage:', error);
    }
  }
  // 여기까지 auth 부분
	
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete</Text>
			<Link href="/" style={styles.next} onPress={nextFunction}>Next</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
		marginTop: 150,
    marginBottom: 80,
  },
	next: {
		fontSize: 20,
    textAlign: 'center',
    marginVertical: 50,
    backgroundColor: 'gray',
    width: 200,
    paddingVertical: 10,
    color: 'white',
    alignSelf: 'center',
    borderRadius: 5,
		marginTop: 80,
	}
});
