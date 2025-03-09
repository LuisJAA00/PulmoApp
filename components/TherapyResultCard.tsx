import React from "react";
import { View, Text } from "react-native";

const TherapyResultsCard = () => {
  return (
    <View className="bg-white rounded-lg shadow-md p-4 mx-4 my-2 flex-row items-center">
      {/* Left Side: Text Content */}
      <View className="flex-1">
        {/* Bold Title */}
        <Text className="text-lg font-bold text-black">Therapy Results</Text>

        {/* Bold Number */}
        <Text className="text-3xl font-bold text-black mt-1">120</Text>

        {/* Normal Text */}
        <Text className="text-sm text-gray-600 mt-1">
          In the previous therapy, this was the result obtained.
        </Text>
      </View>

      {/* Right Side: Chart Placeholder */}
      <View className="w-24 h-24 bg-gray-200 rounded-lg justify-center items-center">
        {/* Placeholder for Chart */}
        <Text className="text-center text-gray-500">Chart</Text>
      </View>
    </View>
  );
};

export default TherapyResultsCard;