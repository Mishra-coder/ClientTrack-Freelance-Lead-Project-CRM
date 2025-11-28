import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Authentication/LoginScreen.jsx";
import SignupScreen from "../screens/Authentication/SignupScreen.jsx";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
