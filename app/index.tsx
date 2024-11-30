import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput } from "react-native";
import { Link } from 'expo-router';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MATCHAPP</Text>
      <View style={styles.inputSection}>
        <Text style={styles.label}>email</Text>
        <TextInput style={styles.inputBox} value={email} onChangeText={setEmail} />
      </View>
      <View style={styles.inputSection}>
        <Text style={styles.label}>password</Text>
        <TextInput style={styles.inputBox} value={password} onChangeText={setPassword} secureTextEntry />
      </View>
      <Link href="/home" style={styles.signIn}>Sign in</Link>
      <Link href="/signup1" style={styles.signUp}>Sign up</Link>
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
  inputSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'left',
  },
  inputBox: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  signIn: {
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
  signUp: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'gray',
    width: 200,
    paddingVertical: 10,
    color: 'white',
    alignSelf: 'center',
    borderRadius: 5,
  },
});
