import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

const TherapyTimer = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [therapyPhase, setTherapyPhase] = useState("therapy"); // 'therapy' or 'measurement'
  const [isPaused, setIsPaused] = useState(false); // Pause state
  const [isActive, setIsActive] = useState(false); // Timer active state (starts as false)

  // Calculate the progress of the timer (0 to 1)
  const progress = 1 - timeLeft / (30 * 60); // Progress for therapy phase
  const measurementProgress = 1 - timeLeft / (2 * 60); // Progress for measurement phase

  // Circle properties
  const circleRadius = 80; // Reduced radius of the circle
  const circleCircumference = 2 * Math.PI * circleRadius; // Circumference of the circle

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isActive && !isPaused && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      // Handle therapy and breathing phases
      if (therapyPhase === "therapy") {
        // Simulate motor vibration changes every 2.5 minutes (150 seconds)
        if (timeLeft % 150 === 0 && timeLeft < 30 * 60) {
          Alert.alert("Motor Vibration Change", "Motor vibration intensity has been adjusted.");
        }

        // Notify the patient every 10 minutes
        if (timeLeft === 20 * 60) {
          Alert.alert("Therapy Update", "10 minutes have passed. 20 minutes remaining.");
        } else if (timeLeft === 10 * 60) {
          Alert.alert("Therapy Update", "20 minutes have passed. 10 minutes remaining.");
        }

        // Notify the patient at specific intervals in the last 5 minutes
        if (timeLeft === 5 * 60) {
          Alert.alert("Therapy Update", "Only 5 minutes left!");
        } else if (timeLeft === 1 * 60) {
          Alert.alert("Therapy Update", "Almost done!");
        }
      }
    }

    return () => clearInterval(timer);
  }, [timeLeft, therapyPhase, isActive, isPaused]);

  useEffect(() => {
    if (timeLeft === 0) {
      // Switch from therapy to measurement or end
      if (therapyPhase === "therapy") {
        setTherapyPhase("measurement");
        setTimeLeft(2 * 60); // 2 minutes for measurement
      } else {
        Alert.alert("Therapy Complete", "Therapy and measurement complete!");
        setIsActive(false); // Stop the timer
      }
    }
  }, [timeLeft, therapyPhase]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleStart = () => {
    setIsActive(true); // Start the timer
    setIsPaused(false); // Ensure it's not paused
  };

  const handlePause = () => {
    setIsPaused((prev) => !prev); // Toggle pause state
  };

  const handleRestart = () => {
    setTimeLeft(30 * 60); // Reset to 30 minutes
    setTherapyPhase("therapy"); // Reset to therapy phase
    setIsActive(false); // Stop the timer
    setIsPaused(false); // Unpause
  };

  return (
    <View style={styles.container}>
      {/* Timer Display */}
      <View style={styles.timerContainer}>
        {/* Circular Progress Indicator */}
        <Svg height="180" width="180" viewBox="0 0 180 180">
          {/* Background Circle */}
          <Circle
            cx="90"
            cy="90"
            r={circleRadius}
            stroke="#E0E0E0" // Light gray for the background
            strokeWidth={10}
            fill="transparent"
          />
          {/* Progress Circle */}
          <Circle
            cx="90"
            cy="90"
            r={circleRadius}
            stroke="#0f67fe" // Blue for the progress
            strokeWidth={10}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={
              therapyPhase === "therapy"
                ? circleCircumference * (1 - progress)
                : circleCircumference * (1 - measurementProgress)
            }
            strokeLinecap="round"
          />
        </Svg>

        {/* Timer Text */}
        <View style={styles.timerTextContainer}>
          <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
          <Text style={styles.phaseText}>
            {therapyPhase === "therapy" ? "Therapy Time" : "Measurement Time"}
          </Text>
        </View>
      </View>

      {/* Control Buttons */}
      <View style={styles.buttonContainer}>
        {!isActive ? (
          <TouchableOpacity style={styles.button} onPress={handleStart}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity style={styles.button} onPress={handlePause}>
              <Text style={styles.buttonText}>
                {isPaused ? "Continue" : "Pause"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.restartButton]} // Red restart button
              onPress={handleRestart}
            >
              <Text style={styles.buttonText}>Restart</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 16, // Reduced padding
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
    width: "90%", // Smaller width for the container
    alignSelf: "center", // Center the container horizontally
  },
  timerContainer: {
    alignItems: "center",
    marginBottom: 16, // Reduced margin
  },
  timerTextContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  timerText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333333",
  },
  phaseText: {
    fontSize: 18,
    color: "#666666",
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    backgroundColor: "#0f67fe",
    paddingHorizontal: 16, // Reduced padding
    paddingVertical: 8, // Reduced padding
    borderRadius: 8,
  },
  restartButton: {
    backgroundColor: "#fa4d5e", // Red color for restart button
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16, // Slightly smaller font size
    fontWeight: "bold",
  },
});

export default TherapyTimer;