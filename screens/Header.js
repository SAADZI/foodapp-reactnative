import { View, Text, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { OutlineIcon }  from "../Icon"

const Header = () => {
  return (
    <View>
      <StatusBar style='dark' />
      <View className=" flex-row items-center space-x-2 px-4 pb-6  p-3  shadow-2xl">
        <View className="flex-row flex-1 items-center p-3 rounded-full  border-2 border-gray-400">

          <OutlineIcon.MagnifyingGlassIcon size={25} className="text-secondary" />
          <TextInput placeholder='Nothing' className="ml-2 flex-1 " />

          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-300 ">


            <OutlineIcon.MapPinIcon size={20} className="text-gray-700" />
            <Text className="text-gray-500">New York, NYC</Text>

            <View />
          </View>

        </View>
        <View className=" bg-secondary p-3 rounded-full">
          <OutlineIcon.AdjustmentsVerticalIcon size={20} strokeWidth={2.5} className="text-txtsecondary  rounded-full" />

        </View>
      </View>
    </View>
  )
}

export default Header