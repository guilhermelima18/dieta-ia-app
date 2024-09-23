import { colors } from "@/src/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    marginTop: 2,
  },
  input: {
    backgroundColor: colors.white,
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  errorText: {
    color: "red",
    marginTop: 4,
  },
});
