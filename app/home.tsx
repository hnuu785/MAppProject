import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput } from "react-native";
import { Link } from 'expo-router';
import { auth } from '../firebaseConfig';
import { getAuth } from "firebase/auth";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Index() {
  const [name, setName] = useState('user');

	useEffect(() => {
    const user = auth.currentUser;
    if (user !== null) {
      setName(user.displayName);
    }
  }, []);
	
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MATCHAPP</Text>
      <Text style={styles.title}>{name}님 환영합니다.</Text>
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
});
