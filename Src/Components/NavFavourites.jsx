import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import tw from "twrnc";
const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code street, London, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London eye, London, UK",
  },
];
const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => {
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />;
      }}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            type="ionicon"
            name={item.icon}
            color="white"
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
