import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import icons from "@/constants/icons";

interface ClinicalHistoryCardProps {
  value: number; // The large number to display
  description: string; // The smaller text below the number
}

const ClinicalHistoryCard: React.FC<ClinicalHistoryCardProps> = ({
  value,
  description,
}) => {
  return (
    <View
      className="h-96 rounded-b-2xl shadow-md w-full relative" // Increased height to h-96
      style={{ backgroundColor: "#007BFF" }} // Strong electric blue color
    >
      {/* Back Arrow Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-16 left-5 z-10"
      >
        <Image
          source={icons.backArrow}
          className="size-6"
          style={{ tintColor: "white" }} // White arrow
        />
      </TouchableOpacity>

      {/* White Lines for Elegant and Fun Design */}
      <View className="absolute top-0 left-0 right-0 bottom-0 justify-center items-center">
        {/* Horizontal Line */}
        <View
          className="w-full h-2 bg-white opacity-70"
          style={{ top: "-35%", left: "-10%" }}
        />
      </View>

      {/* Centered Content */}
      <View className="flex-1 justify-center items-center z-20" style={{ marginTop: 110 }}>
        {/* Large Centered Number */}
        <Text className="text-9xl font-bold text-white">{value}</Text>

        {/* Smaller Text Below */}
        <Text className="text-lg text-white mt-2">{description}</Text>
      </View>
    </View>
  );
};

export default ClinicalHistoryCard;