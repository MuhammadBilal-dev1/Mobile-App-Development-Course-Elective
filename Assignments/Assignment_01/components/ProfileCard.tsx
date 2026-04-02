import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";
import { Colors } from "../constants/Colors";

export default function PremiumProfileCard() {
  const { isDark } = useTheme();
  const theme = isDark ? Colors.dark : Colors.light;

  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: isDark ? "#aaa" : "#888" }]}>
          Profile Details
        </Text>
        <TouchableOpacity style={styles.iconButton}>
          <Feather
            name="more-vertical"
            size={20}
            color={isDark ? "#ccc" : "#777"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri: "https://lh3.google.com/u/0/ogw/AF2bZyjDw63NKf6zXeDOrvWkedpCSnAnWV-P1VC5j99gTqiV6A=s64-c-mo",
            }}
            style={[styles.image, { borderColor: isDark ? "#333" : "#f0f0f0" }]}
          />
          <View style={[styles.onlineBadge, { borderColor: theme.card }]} />
        </View>

        {/* Name and Premium Role Design */}
        <View style={styles.nameContainer}>
          <Text style={[styles.name, { color: theme.text }]}>
            Muhammad Bilal
          </Text>
          <View
            style={[
              styles.roleTag,
              {
                backgroundColor: isDark
                  ? "rgba(10, 132, 255, 0.15)"
                  : "rgba(0,122,255,0.08)",
              },
            ]}
          >
            <Ionicons name="shield-checkmark" size={14} color={theme.tint} />
            <Text style={[styles.roleText, { color: theme.tint }]}>
              {" "}
              Full-Stack Software Architect
            </Text>
          </View>
        </View>


        <View
          style={[
            styles.divider,
            { backgroundColor: isDark ? "#333" : "#f1f1f1" },
          ]}
        />
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Followers</Text>
            <Text style={[styles.statNumber, { color: theme.text }]}>1.2K</Text>
          </View>
          <View
            style={[
              styles.verticalDivider,
              { backgroundColor: isDark ? "#333" : "#f1f1f1" },
            ]}
          />
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Projects</Text>
            <Text style={[styles.statNumber, { color: theme.text }]}>45+</Text>
          </View>
          <View
            style={[
              styles.verticalDivider,
              { backgroundColor: isDark ? "#333" : "#f1f1f1" },
            ]}
          />
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Rating</Text>
            <Text style={[styles.statNumber, { color: theme.text }]}>
              4.9 <Feather name="star" size={12} color="#f1c40f" />
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.divider,
            { backgroundColor: isDark ? "#333" : "#f1f1f1" },
          ]}
        />
      </View>

      {/* 4. Action Buttons Footer - Premium Spacing */}
      <View
        style={[
          styles.footer,
          { backgroundColor: isDark ? "#252525" : "#fcfcfc" },
        ]}
      >
        <TouchableOpacity
          style={[
            styles.button,
            styles.messageBtn,
            {
              backgroundColor: isDark
                ? "rgba(10, 132, 255, 0.1)"
                : "rgba(0,122,255,0.05)",
            },
          ]}
        >
          <Feather name="mail" size={18} color={theme.tint} />
          <Text style={[styles.btnTextBlue, { color: theme.tint }]}>
            {" "}
            Message
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            styles.followBtn,
            { backgroundColor: theme.tint },
          ]}
        >
          <Feather name="plus-circle" size={18} color="white" />
          <Text style={styles.btnTextWhite}> Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 30,
    width: "92%",
    elevation: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 20,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  iconButton: { padding: 5 },
  contentContainer: { alignItems: "center", paddingHorizontal: 25 },
  imageWrapper: { position: "relative", marginBottom: 15 },
  image: { width: 100, height: 100, borderRadius: 50, borderWidth: 5 },
  onlineBadge: {
    position: "absolute",
    bottom: 0,
    right: 5,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#4cd964",
    borderWidth: 4,
  },
  nameContainer: { alignItems: "center", marginBottom: 20 },
  name: { fontSize: 24, fontWeight: "800", letterSpacing: 0.5 },
  roleTag: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
    marginTop: 6,
  },
  roleText: { fontSize: 13, fontWeight: "700" },
  divider: { height: 1, width: "100%" },
  verticalDivider: { width: 1, height: "60%" },
  statsRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
  },
  statBox: { alignItems: "center", flex: 1 },
  statLabel: {
    fontSize: 12,
    color: "#a0a0a0",
    fontWeight: "500",
    marginBottom: 3,
  },
  statNumber: { fontSize: 18, fontWeight: "700" },
  footer: {
    flexDirection: "row",
    padding: 20,
    paddingTop: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    flexDirection: "row",
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  messageBtn: { borderWidth: 1, borderColor: "rgba(0,122,255,0.1)" },
  followBtn: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  btnTextBlue: { fontWeight: "700", fontSize: 15 },
  btnTextWhite: { color: "#fff", fontWeight: "700", fontSize: 15 },
});
