import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./Src/Redux/Store";
import Home from "./Src/Screens/Home";
import MapScreen from "./Src/Screens/MapScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { KeyboardAvoidingView, Platform } from "react-native";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? "-64" : 0}
            style={{ flex: 1 }}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
