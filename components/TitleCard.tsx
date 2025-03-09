import React from "react";
import { View, Text } from "react-native";

interface CenteredSignInHeaderProps {
  title: string; // Add a title prop
}

const CenteredSignInHeader: React.FC<CenteredSignInHeaderProps> = ({ title }) => {
  return (
    <View className="bg-[#1E2A47] h-56 rounded-b-2xl shadow-md w-full"> {/* Increased h-48 to h-56 */}
      <View className="flex-1 justify-center items-center"> {/* Center text horizontally and vertically */}
        <Text className="text-4xl font-semibold text-white">{title}</Text> {/* Use the title prop */}
      </View>
    </View>
  );
};

export default CenteredSignInHeader;