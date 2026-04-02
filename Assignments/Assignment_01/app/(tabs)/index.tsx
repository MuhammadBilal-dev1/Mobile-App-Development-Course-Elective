import { View, StyleSheet } from "react-native";
import ProfileCard from "../../components/ProfileCard";
import { useTheme } from "../../context/ThemeContext";
import { Colors } from "../../constants/Colors";

export default function HomeScreen() {
  const { isDark } = useTheme();
  const theme = isDark ? Colors.dark : Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ProfileCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});