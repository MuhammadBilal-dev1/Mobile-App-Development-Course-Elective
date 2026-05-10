import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";
import { ThemedText } from "@/components/themed-text";

const BACKGROUND_FETCH_TASK = "background-fetch-lab4";

export default function TaskScreen() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    checkTaskStatus();
  }, []);

  const startFakeBackgroundProcess = () => {
    alert("Simulation mode active!");

    // Naya interval start karein aur uski ID save karein
    const id = setInterval(() => {
      console.log("🔄 Simulated Background Task: Fetching fresh data...");
    }, 5000);

    setIntervalId(id);
  };

  const stopFakeBackgroundProcess = () => {
    if (intervalId) {
      clearInterval(intervalId); // 🛑 Ye line console logs ko rok degi
      setIntervalId(null);
      console.log("⏹️ Simulation Stopped.");
    }
  };

  const checkTaskStatus = async () => {
    const registered = await TaskManager.isTaskRegisteredAsync(
      BACKGROUND_FETCH_TASK,
    );
    setIsRegistered(registered);
  };

  const toggleTask = async () => {
    if (isRegistered) {
      await BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
      stopFakeBackgroundProcess();
    } else {
      await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
        minimumInterval: 60 * 15, // 15 Minutes
        stopOnTerminate: false,
        startOnBoot: true,
      });
      startFakeBackgroundProcess();
    }
    checkTaskStatus();
  };

  return (
    <View style={styles.container}>
      <ThemedText type="title">Background Engine</ThemedText>

      <View
        style={[
          styles.statusBadge,
          { backgroundColor: isRegistered ? "#4CAF50" : "#F44336" },
        ]}
      >
        <Text style={styles.statusText}>
          {isRegistered ? "Task Active" : "Task Inactive"}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={toggleTask}>
        <Text style={styles.buttonText}>
          {isRegistered ? "Stop Background Task" : "Start Background Task"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  statusBadge: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginVertical: 20,
  },
  statusText: { color: "white", fontWeight: "bold" },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "600" },
});
