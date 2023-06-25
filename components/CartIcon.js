import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from "../slices/CartSlice";
const CartIcon = () => {
  const navigation = useNavigation()
const cartTotal = useSelector(selectCartTotal)
  const cartItems =useSelector(selectCartItems)
  if (!cartItems.length) {
    return;
    
  }
  return (
    <View  className="bg-secondary absolute bottom-5  w-[90%] mx-5 rounded-full z-1    ">
    <TouchableOpacity
    onPress={()=>navigation.navigate('Cart')} className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg">
        <View className="p-2 px-4 rounded-full bg-primary">
    <Text className="font-extrabold text-txtprimary text-lg">{cartItems.length}</Text>
    </View>
     <Text className="flex-1 text-center font-extrabold text-txtprimary text-lg">View Cart
    </Text>
    <Text className="font-extrabold text-txtprimary text-lg">Rs {cartTotal}</Text>
    </TouchableOpacity>
  
</View>
  
  )
}

export default CartIcon