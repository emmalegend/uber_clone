import { SafeAreaView, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../Components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../Redux/Slices/navSlice";
import NavFavourites from "../Components/NavFavourites";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        ></Image>

        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"Search"}
          minLength={2}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          placeholder="Where From"
          debounce={400}
          nearbyPlacesAPI="GooglePlacesSearch"
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
}
