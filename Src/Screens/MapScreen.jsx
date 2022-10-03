import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import Map from "../Components/Map";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../Components/NavigateCard";
import RideOptions from "../Components/RideOptions";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
export default function MapScreen() {
  const Stack = createStackNavigator();
  const navigator = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={tw`bg-gray-100 absolute top-16 left-8  z-50 p-3 rounded-full shadow-lg`}
        onPress={() => navigator.navigate("HomeScreen")}
      >
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptions"
            component={RideOptions}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}
