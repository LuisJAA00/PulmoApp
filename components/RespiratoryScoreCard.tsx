import React from "react";
import { View, Text } from "react-native";

const RespiratoryScoreCard = () => {
  return (
    <View
      className="bg-white p-4 mx-4 rounded-lg flex-row items-center"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Soft shadow for Android
      }}
    >
      {/* Vibrant Colored Square with Number */}
      <View className="w-16 h-16 bg-[#0f67fe] rounded-lg justify-center items-center mr-4">
        <Text className="text-white text-2xl font-bold">85</Text>
      </View>

      {/* Text Section */}
      <View className="flex-1">
        <Text className="text-lg font-bold text-gray-900">Respiratory Score</Text>
        <Text className="text-sm text-gray-500 mt-1">
          Based on your exams and results, this is your score.
        </Text>
      </View>
    </View>
  );
};

export default RespiratoryScoreCard;