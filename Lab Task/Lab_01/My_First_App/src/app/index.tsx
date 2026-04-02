import * as Device from "expo-device";
import {
  Button,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "@/components/themed-view";
import { useState } from "react";
import NewComponent from "@/components/NewComponent";

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  

  return (
    <ThemedView>
      <SafeAreaView style={{paddingTop: 15 }}>
        <View style={{alignItems: "center"}}>
          <Image
            source={{
              uri: "https://www.shutterstock.com/image-photo/pictures-sunset-on-island-amazing-600w-2498687069.jpg",
            }}
            style={{ width: 300, height: 300 }}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Welcome Guest
          </Text>
          <TextInput placeholder="Enter your name" />
          <Button title="Guest" onPress={() => alert("Hi! Guest")} />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              title="-"
              onPress={() => setCount(count > 0 ? count - 1 : count)}
            />

            {/* <Text style={{
                fontSize: 20,
                fontWeight: "bold",
                paddingTop: 15,
                paddingBottom: 15,
              }}>{count}</Text> */}
            <NewComponent count={count} />
            <Button title="+" onPress={() => setCount(count + 1)} />
          </View>
          <Button title="Reset" onPress={() => setCount(0)} />
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

