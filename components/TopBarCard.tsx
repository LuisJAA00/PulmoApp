import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import icons from "@/constants/icons";

interface TopBarProps {
  user: {
    name: string;
    avatar: string;
  };
}

const TopBarCard: React.FC<TopBarProps> = ({ user }) => {
  return (
    <View className="bg-[#1E2A47] pt-20 pb-5 rounded-b-2xl shadow-md w-full"> {/* Increased top padding */}
      <View className="px-5"> {/* Add horizontal padding here */}
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <Image source={{ uri: user.avatar }} className="size-12 rounded-full" />
            <View className="ml-3">
              <Text className="text-sm text-gray-300">Hi!</Text>
              <Text className="text-lg font-semibold text-white">{user.name}</Text>
            </View>
          </View>

          {/* Notification Bell */}
          <TouchableOpacity>
         <Image 
        source={icons.bell} 
        className="size-6" 
        style={{ tintColor: 'white' }} 
    />
    </TouchableOpacity>
        </View>

        {/* Search Bar */}
        {/*}
        <View className="mt-4 bg-gray-700 p-3 rounded-xl flex flex-row items-center">
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#CBD5E1"
            className="flex-1 text-white"
          />
        </View>
         */}
      </View>
    </View>
  );
};

export default TopBarCard;