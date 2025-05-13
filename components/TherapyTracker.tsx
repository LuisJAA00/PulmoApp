import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TherapyTracker = () => {
  const days = new Array(42).fill(null).map((_, index) => {
    if (index % 10 === 0) return "missed";
    if (index % 5 === 0) return "skipped";
    return "taken";
  });

  const getBackgroundColor = (status: "taken" | "missed" | "skipped") => {
    switch (status) {
      case "taken":
        return styles.taken;
      case "missed":
        return styles.missed;
      case "skipped":
        return styles.skipped;
      default:
        return styles.defaultDay;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.therapyCount}>205</Text>
          <Text style={styles.therapyLabel}>Therapies</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Days Grid */}
      <View style={styles.daysGrid}>
        {days.map((status, index) => (
          <View
            key={index}
            style={[styles.day, getBackgroundColor(status)]}
          />
        ))}
      </View>

      {/* Legend Section */}
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendIcon, styles.taken]} />
          <Text style={styles.legendText}>Taken</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendIcon, styles.missed]} />
          <Text style={styles.legendText}>Missed</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendIcon, styles.skipped]} />
          <Text style={styles.legendText}>Skipped</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  therapyCount: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111827',
  },
  therapyLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6B7280',
  },
  addButton: {
    backgroundColor: '#0f67fe',
    padding: 12,
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  day: {
    width: 20,
    height: 20,
    margin: 4,
    borderRadius: 4,
  },
  taken: {
    backgroundColor: '#0f67fe',
  },
  missed: {
    backgroundColor: '#fa4d5e',
  },
  skipped: {
    backgroundColor: '#9CA3AF',
  },
  defaultDay: {
    backgroundColor: '#E5E7EB',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendIcon: {
    width: 16,
    height: 16,
    borderRadius: 4,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
});

export default TherapyTracker;