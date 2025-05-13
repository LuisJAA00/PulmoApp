import TherapyTracker from "@/components/TherapyTracker";
import auth from '@react-native-firebase/auth';
import { useRouter } from 'expo-router';
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Page = () => {
  const user = auth().currentUser;
  const router = useRouter();


  if (!user) {
    router.replace('/(auth)/home');
    return null; // Evita renderizar temporalmente
  }
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/* Simple Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Therapy Management</Text>
        </View>
   
        {/* Calendar Component */}
        <TherapyTracker />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    padding: 16,
    paddingTop: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  }
});

export default Page;