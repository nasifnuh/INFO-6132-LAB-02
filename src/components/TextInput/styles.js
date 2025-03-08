import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1 },
  label: {
    fontSize: 14,
    color: "#000000",
    marginBottom: 8,
  },
  errorLabel: { color: "#f50031" },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 50,
    borderRadius: 16,
    paddingHorizontal: 15,
    fontSize: 14,
    backgroundColor: "#F4F4F4",
    flex: 1,
  },
});

export default styles;
