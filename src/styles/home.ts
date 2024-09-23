import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.green,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    width: 240,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 8,
    lineHeight: 24,
  },
  button: {
    backgroundColor: colors.blue,
    width: "100%",
    height: 50,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 34,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
