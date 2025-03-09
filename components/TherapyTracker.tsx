import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TerapyTracker = () => {
  const days = new Array(42).fill(null).map((_, index) => {
    if (index % 10 === 0) return "missed";
    if (index % 5 === 0) return "skipped";
    return "taken";
  });

  // Define the type for the `status` parameter
  const getColor = (status: "taken" | "missed" | "skipped") => {
    switch (status) {
      case "taken":
        return "bg-[#0f67fe]"; // Electric Blue
      case "missed":
        return "bg-[#fa4d5e]"; // Electric Pink/Red
      case "skipped":
        return "bg-gray-400"; // Neutral Gray
      default:
        return "bg-gray-200";
    }
  };

  return (
    <View className="bg-white p-6 rounded-lg mx-4" style={{
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3, // Soft shadow for Android
    }}>
      {/* Header Section */}
      <View className="flex-row justify-between items-center mb-6">
        <View>
          <Text className="text-3xl font-extrabold text-gray-900">205</Text>
          <Text className="text-gray-500 font-medium">Therapies</Text>
        </View>
        <TouchableOpacity className="bg-[#0f67fe] p-3 rounded-lg">
          <Text className="text-white text-lg font-bold">+</Text>
        </TouchableOpacity>
      </View>

      {/* Days Grid */}
      <View className="flex-row flex-wrap">
        {days.map((status, index) => (
          <View
            key={index}
            className={`w-5 h-5 m-1 rounded ${getColor(status)}`}
          />
        ))}
      </View>

      {/* Legend Section */}
      <View className="flex-row justify-between mt-6">
        <View className="flex-row items-center">
          <View className="w-4 h-4 bg-[#0f67fe] rounded mr-2" />
          <Text className="text-gray-500 font-medium">Taken</Text>
        </View>
        <View className="flex-row items-center">
          <View className="w-4 h-4 bg-[#fa4d5e] rounded mr-2" />
          <Text className="text-gray-500 font-medium">Missed</Text>
        </View>
        <View className="flex-row items-center">
          <View className="w-4 h-4 bg-gray-400 rounded mr-2" />
          <Text className="text-gray-500 font-medium">Skipped</Text>
        </View>
      </View>
    </View>
  );
};

export default TerapyTracker;