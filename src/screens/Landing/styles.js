import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 30,
  },
  content: {
    alignItems: "center",
  },
  image: {
    width: 164,
    height: 164,
    marginTop: 144,
    marginBottom: 54,
  },
  title: {
    fontSize: 44,
    fontWeight: 500,
    textAlign: "center",
    color: "#7F3DFF",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#585858",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  loginButton: {
    marginTop: 10,
  },
});
