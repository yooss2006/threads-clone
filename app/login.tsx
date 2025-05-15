import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Login() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <Redirect href="/(tabs)" />;
  }

  return (
    <View>
      <Text>Login</Text>
    </View>
  );
}
