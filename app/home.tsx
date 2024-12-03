import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput } from "react-native";
import { Link } from 'expo-router';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Index() {
  const [isLogin, setIsLogin] = useState('로그인되지 않았습니다.');
	const [name, setName] = useState('user');
	
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			const me = auth.currentUser;
			if (me) {
				setIsLogin('로그인됨.');
				setName(me.displayName);
			}
			else {
				const a = 1;
			}
		});
	}, []);
	
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MATCHAPP</Text>
      <Text style={styles.title}>{isLogin}</Text>
			<Text style={styles.body}>{name}님 어서오세요.</Text>
			<Link href="/" style={styles.next}>Logout</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: 20,
    paddingTop: 50,
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
	},
	body: {
		fontSize: 30,
    textAlign: 'center',
		marginTop: 20,
    marginBottom: 20,
	},
});
