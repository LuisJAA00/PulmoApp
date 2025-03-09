import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import icons from "@/constants/icons";

const RespiratoryExerciseCard = () => {
  return (
    <View
      className="p-6 rounded-3xl mx-4"
      style={{
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        borderWidth: 1,
        borderColor: "#E5E5E5",
      }}
    >
      {/* Header Section */}
      <View className="items-center mb-6">
        <Text className="text-3xl font-bold text-gray-900 mb-2">
          Respiratory Exercises
        </Text>
        <Text className="text-base text-gray-500 text-center">
          Guided breathing for better lung health.
        </Text>
      </View>

      {/* Icon Section */}
      <View className="items-center mb-6">
        <View
          className="w-20 h-20 rounded-full bg-[#0000] justify-center items-center"
          style={{
            shadowColor: "#007AFF",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 6,
          }}
        >
           <Image source={icons.lung} className="w-12 h-12" />
        </View>
      </View>

      {/* Call-to-Action Button */}
      <TouchableOpacity
        className="bg-[#007AFF] px-8 py-4 rounded-full items-center"
        style={{
          shadowColor: "#007AFF",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 6,
        }}
        onPress={() => console.log("Start Respiratory Exercises")}
      >
        <Text className="text-white text-lg font-semibold">Start Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RespiratoryExerciseCard;