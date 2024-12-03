import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput } from "react-native";
import { Link } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Index() {
	const [intro, setIntro] = useState('');

	const nextFunction = () => {
		AsyncStorage.setItem('myIntro', intro);
	};
	
  return (
    <View style={styles.container}>
      <View style={styles.inputSection}>
        <Text style={styles.label}>Introduce yourself</Text>
        <TextInput style={styles.inputBox} value={intro} onChangeText={setIntro} />
      </View>
			<Link href="/signup3" style={styles.next} onPress={nextFunction}>Next</Link>
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
    height: 500,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
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
