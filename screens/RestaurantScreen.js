import { View, Text, ScrollView,  TouchableOpacity, Image } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import DishRow from '../components/DishRow'
import CartIcon from "../components/CartIcon"
import { StatusBar } from 'expo-status-bar'
import { OutlineIcon,SolidIcon } from "../Icon";
import { useDispatch } from 'react-redux'
import {setRestaurant} from "../slices/RestaurantSlice"
const RestaurantScreen = () => {
  const { params } = useRoute()
  const item = params
  //   console.log('restaurant:', item)
  const navigation = useNavigation()
const dispatch =useDispatch()

useEffect(() => {
  if (item && item.id) {
    dispatch(setRestaurant({...item}))
  }
  return () => {
    
  }
}, [])

  return (
    <View>
     
<StatusBar style='light'/> 
     <ScrollView  showsVerticalScrollIndicator={false}>
        <View>
          <Image className="w-full h-72 " source={item.image} />
          <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
<View className="bg-txtprimary rounded-full ">
<SolidIcon.ArrowLeftIcon size={23} className="text-secondary    shadow" />

</View>
          </TouchableOpacity>

          <View className=" bg-txtprimary -mt-12 pt-6 rounded-tr-3xl rounded-tl-3xl">
            <View className="px-5 border-r-8">
              <Text className="text-3xl font-bold">{item.name}</Text>
              <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                  <SolidIcon.StarIcon size={20} className="text-yellow-500" />
                  <Text className="text-xs">
                    <Text >{item.rating}</Text>
                    <Text className="text-gray-700"> ({item.reviews} review)</Text> · <Text className="font-semibold text-gray-700">{item.category}</Text>
                  </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                  <OutlineIcon.MapPinIcon color="gray" width={15} height={15} />
                  <Text className="text-gray-700 text-xs"> Nearby · {item.address}</Text>
                </View>
              </View>
            </View>

<Text className="text-gray-500">{item.description}</Text>

          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="p-4 text-2xl font-bold">Menu</Text>
          {item.dishes.map((dish, index)=><DishRow item={{...dish}}key={index}/>)}
        </View>
      </ScrollView>
      <CartIcon/>
    </View>
  )
}

export default RestaurantScreen