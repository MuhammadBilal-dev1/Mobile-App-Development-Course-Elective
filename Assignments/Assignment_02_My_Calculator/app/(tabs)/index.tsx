import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  LayoutAnimation,
  Platform,
  UIManager,
  useColorScheme,
} from "react-native";
import { CalcButton } from "@/components/CalcButton";
import { Audio } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "@/context/ThemeContext";

// Android pe animations enable karne ke liye
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function CalculatorPro() {
  const { isDark } = useTheme();
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const bgColor = isDark ? "#000" : "#f2f2f7";
  const bgColorDisplayContainer = isDark ? "#1c1c1c" : "#d5d5d5";
  const textColor = isDark ? "#fff" : "#000";
  const bgColorForNumbers = isDark ? "#2c2c2c" : "#d7d7d7";

  // Sound effect load karne ke liye function
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/sounds/denielcz-click-463080.mp3"), 
    );
    await sound.playAsync();
  }

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const savedHistory = await AsyncStorage.getItem("calc_history");
      if (savedHistory) setHistory(JSON.parse(savedHistory));
    } catch (e) {
      console.error(e);
    }
  };

  
    // Save History for (Last 5 calculations)
   
  const saveToHistory = async (newCalc: string) => {
    let updatedHistory = [newCalc, ...history].slice(0, 5);
    setHistory(updatedHistory);
    await AsyncStorage.setItem("calc_history", JSON.stringify(updatedHistory));
  };

  /*
   Function to handle button presses
   Appends the value to the current expression
   */
  const handlePress = (value: string) => {
    playSound();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpression((prev) => prev + value);
  };

  // Function to clear the entire screen
  const clearAll = () => {
    setExpression("");
    setResult("");
  };

  // Function to delete the last character
  const deleteLast = () => {
    setExpression(expression.slice(0, -1));
  };

  // Function to evaluate the mathematical expression and update the result
  const calculateResult = () => {
    try {
      if (expression !== "") {
        const evalResult = eval(expression);
        setResult(evalResult.toString());
        saveToHistory(`${expression} = ${evalResult}`);
      }
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      {/* Display Area for Expression and Result */}
      <View
        style={[
          styles.displayContainer,
          { backgroundColor: bgColorDisplayContainer },
        ]}
      >
        <View
          style={[
            styles.displayContainer,
            { backgroundColor: bgColorDisplayContainer },
          ]}
        >
          <Text style={[styles.expressionText, { color: textColor }]}>
            {expression || "0"}
          </Text>
          <Text style={[styles.resultText, { color: textColor }]}>
            {result}
          </Text>
        </View>
        <Text style={[styles.expressionText, { color: textColor }]}>
          {expression || "0"}
        </Text>
        <Text style={[styles.resultText, { color: textColor }]}>{result}</Text>
      </View>

      {/* Buttons Grid */}
      <View style={styles.keypad}>
        <View style={styles.row}>
          <CalcButton title="AC" color="#ff3b30" onPress={clearAll} />
          <CalcButton title="DEL" color="#a5a5a5" onPress={deleteLast} />
          <CalcButton
            title="%"
            color="#a5a5a5"
            onPress={() => handlePress("/100")}
          />
          <CalcButton
            title="/"
            color="#ff9500"
            onPress={() => handlePress("/")}
          />
        </View>

        <View style={styles.row}>
          <CalcButton
            title="7"
            color={bgColorForNumbers}
            textColor={textColor}
            onPress={() => handlePress("7")}
          />
          <CalcButton
            title="8"
            color={bgColorForNumbers}
            textColor={textColor}
            onPress={() => handlePress("8")}
          />
          <CalcButton
            title="9"
            color={bgColorForNumbers}
            textColor={textColor}
            onPress={() => handlePress("9")}
          />
          <CalcButton
            title="*"
            color="#ff9500"
            onPress={() => handlePress("*")}
          />
        </View>

        <View style={styles.row}>
          <CalcButton
            title="4"
            color={bgColorForNumbers}
            textColor={textColor}
            onPress={() => handlePress("4")}
          />
          <CalcButton
            title="5"
            color={bgColorForNumbers}
            textColor={textColor}
            onPress={() => handlePress("5")}
          />
          <CalcButton
            title="6"
            color={bgColorForNumbers}
            textColor={textColor}
            onPress={() => handlePress("6")}
          />
          <CalcButton
            title="-"
            color="#ff9500"
            onPress={() => handlePress("-")}
          />
        </View>

        <View style={styles.row}>
          <CalcButton
            title="1"
            color={bgColorForNumbers}
            textColor={textColor}
            onPress={() => handlePress("1")}
          />
          <CalcButton
            title="2"
            color={bgColorForNumbers}
            textColor={textColor}
            onPress={() => handlePress("2")}
          />
          <CalcButton
            title="3"
            color={bgColorForNumbers}
            textColor={textColor}
            onPress={() => handlePress("3")}
          />
          <CalcButton
            title="+"
            color="#ff9500"
            onPress={() => handlePress("+")}
          />
        </View>

        <View style={styles.row}>
          <CalcButton
            title="0"
            color={bgColorForNumbers}
            textColor={textColor}
            onPress={() => handlePress("0")}
          />
          <CalcButton
            title="."
            color={bgColorForNumbers}
            textColor={textColor}
            onPress={() => handlePress(".")}
          />
          <CalcButton title="=" color="#ff9500" onPress={calculateResult} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  displayContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
    marginBottom: 10,
    borderRadius: 20,
    marginHorizontal: 10,
    marginTop: 50,
  },
  expressionText: { color: "#888", fontSize: 30, marginBottom: 10 },
  resultText: { fontSize: 60, fontWeight: "bold" },
  keypad: { paddingBottom: 30 },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 15,
  },
  button: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // Android shadow
    shadowColor: "#fff", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonText: { fontSize: 28, fontWeight: "600" },
});
