import { StyleSheet } from "react-native";
import { Colors, Helpers } from "App/Theme";

const styles = StyleSheet.create({
  collapsedRow: {
    ...Helpers.collapsedCol,
    backgroundColor: Colors.gray,
    padding: 10,
  },
  row: {
    paddingVertical: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderTopColor: Colors.primary,
    borderBottomColor: Colors.secondary,
  },
  rowInner: {
    ...Helpers.row,
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
});

export default styles;
