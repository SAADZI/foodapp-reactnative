import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { featured } from "../constant";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { SolidIcon } from "../Icon";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../slices/RestaurantSlice";
const DeliveryScreen = () => {
  // const restaurant = featured.restaurants[0];
const restaurant =useSelector(selectRestaurant)
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1 "
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
          className="bg-yellow-700"
        />
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl  text-gray-700 font-extrabold">
              2-30 Minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Your order is own its way!
            </Text>
          </View>  
        <Image source={require('../assets/images/bikeGuy2.gif')} className="w-24 h-24"/>
        </View>
<View className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2 bg-secondary">
  <View className="p-1 rounded-full bg-primary ">
   <Image source={require('../assets/images/deliveryGuy.png')} className="h-16 w-16 rounded-full"/> 
  </View>
<View className="flex-1 ml-3">
  <Text className="text-lg font-bold text-white">
    SAADZI UNKOWN
  </Text>
  <Text className=" font-semibold text-white">
    Your Rider
  </Text>
</View>

<View className="flex-row items-center space-x-2 mr-3">

<TouchableOpacity className=" bg-white p-2 rounded-full">
  <SolidIcon.PhoneIcon size={25} className="text-secondary"/>
  

</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Home')} className=" bg-white p-2 rounded-full">
  <SolidIcon.XMarkIcon size={25} className="text-red-600"/>
  

</TouchableOpacity>
</View>
</View>

      </View>



    </View>
  );
};

export default DeliveryScreen;
