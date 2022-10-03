import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTime } from "../Redux/Slices/navSlice";

const data = [
  {
    id: 1112,
    title: "Uber-X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: 4512,
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: 1748,
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pF",
  },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptions = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInfo = useSelector(selectTravelTime);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-1 text-xl`}>
          Select a Ride - {travelTimeInfo?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${
              item?.id === selected?.id ? "bg-gray-200" : ""
            }`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: item.image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
              <Text>{travelTimeInfo?.duration?.text} Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "GBP",
              }).format(
                (travelTimeInfo?.duration.value *
                  SURGE_CHARGE_RATE *
                  item.multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      {selected && (
        <View styl>
          <TouchableOpacity
            disabled={!selected}
            style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
          >
            <Text style={tw`text-center text-white text-xl`}>
              Choose {selected?.title}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default RideOptions;

const styles = StyleSheet.create({});
