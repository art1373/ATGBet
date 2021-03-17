import { StyleSheet } from "react-native";
import { Colors } from "App/Theme";
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  businessIcon: {
    width: 16,
    marginRight: 16,
  },

  detailButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailButtonText: {
    marginRight: 4,
    lineHeight: 23.3,
    letterSpacing: 0,
    textAlign: "left",
    color: Colors.primary,
  },
});
