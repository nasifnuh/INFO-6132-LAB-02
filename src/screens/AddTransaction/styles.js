import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    height: 36,
    paddingVertical: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  headerLabel: { marginHorizontal: "auto", fontSize: 16, fontWeight: 600 },
  container: {
    flex: 1,
    marginBottom: 30,
    position: "relative",
  },
  image: {
    width: 124,
    height: 124,
    marginTop: 10,
    marginBottom: 12,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    color: "#000000",
    marginBottom: 30,
  },
  form: {
    gap: 24,
    marginTop: 30
  },
  datepicker: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  dateButton: {
    marginTop: 25,
    backgroundColor: "#F4F4F4",
    height: 50,
    width: 50,
    borderRadius: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "auto",
  },
  addButton: {
    marginTop: 40,
  },
});
