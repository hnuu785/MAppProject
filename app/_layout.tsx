import { Stack } from "expo-router";

export default function RootLayout() {
  return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="signin1" options={{ headerShown: false }} />
			<Stack.Screen name="signup1" options={{ headerShown: false }} />
			<Stack.Screen name="signup2" options={{ headerShown: false }} />
			<Stack.Screen name="signup3" options={{ headerShown: false }} />
			<Stack.Screen name="home" options={{ headerShown: false }} />
		</Stack>
	);
}
