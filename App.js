// import { StatusBar } from "expo-status-bar";
import LoginScreen from "./src/screens/login/LoginScreen";
import RegisterScreen from "./src/screens/register/RegisterScreen";
import TabNavigation from "./src/navigations/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Tabs" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
