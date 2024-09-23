import { colors } from "@/src/theme/colors";
import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
    marginBottom: 14,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight! + 34 : 34,
  },
  content: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 34,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    fontSize: 18,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.background,
    marginTop: 10,
  },
});
