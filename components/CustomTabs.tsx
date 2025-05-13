// app/components/CustomTabs.tsx
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Image, ImageSourcePropType } from "react-native";
import icons from "@/constants/icons";

interface TabIconProps {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
}

const TabIcon = ({ focused, icon, title }: TabIconProps) => (
  <View style={styles.tabIconContainer}>
    <Image
      source={icon}
      resizeMode="contain"
      style={[styles.tabIcon, { tintColor: focused ? "#0061FF" : "#666876" }]}
    />
    <Text
      style={[
        styles.tabText,
        focused ? styles.tabTextActive : styles.tabTextInactive,
      ]}
    >
      {title}
    </Text>
  </View>
);

export const CustomTabs = ({ activeTab }: { activeTab: string }) => {
  const tabs = [
    { 
      id: 'index', 
      label: 'Home', 
      route: '/', 
      icon: icons.home 
    },
    { 
      id: 'explore', 
      label: 'Terapia', 
      route: '/(roots)/(tabs)/explore', 
      icon: icons.lung 
    },
    { 
      id: 'profile', 
      label: 'Perfil', 
      route: '/(roots)/(tabs)/profile', 
      icon: icons.person 
    },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <TouchableOpacity
            key={tab.id}
            style={styles.tabButton}
            onPress={() => router.replace(tab.route)}
            activeOpacity={0.7}
          >
            <TabIcon 
              focused={isActive} 
              icon={tab.icon} 
              title={tab.label} 
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopColor: "#0061FF1A",
    borderTopWidth: 1,
    minHeight: 70,
    paddingVertical: 12,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabIconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  tabText: {
    fontSize: 12,
    textAlign: "center",
  },
  tabTextActive: {
    color: "#0061FF",
    fontFamily: "Rubik-Medium",
  },
  tabTextInactive: {
    color: "#666876",
    fontFamily: "Rubik-Regular",
  },
});