import icons from "@/constants/icons";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RespiratoryExerciseCard = () => {
  return (
    <View style={styles.cardContainer}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Respiratory Exercises</Text>
        <Text style={styles.subtitle}>Guided breathing for better lung health.</Text>
      </View>

      {/* Icon Section */}
      <View style={styles.iconContainer}>
        <View style={styles.iconCircle}>
          <Image source={icons.lung} style={styles.icon} />
        </View>
      </View>

      {/* Call-to-Action Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/respEjercicios")}
      >
        <Text style={styles.buttonText}>Start Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 24,
    borderRadius: 24,
    marginHorizontal: 16,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  icon: {
    width: 48,
    height: 48,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 999,
    alignItems: 'center',
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  }
});

export default RespiratoryExerciseCard;