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
    marginVertical: 30,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    padding: 20,
    width: "100%",
    marginTop: 20,
  },
  iconContainer: {
    width: 80,
    height: 80,
    padding: 10,
    borderRadius: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  food: {
    backgroundColor: "#FDD5D7",
  },
  shopping: {
    backgroundColor: "#FCEED4",
  },
  subscription: {
    backgroundColor: "#EEE5FF",
  },
  icon: {
    width: 40,
    height: 40,
  },
  categoryLabel: { fontSize: 18, fontWeight: "600", color: "#292B2D" },
  amountLabel: {
    fontSize: 44,
    fontWeight: "700",
    color: "#FD3C4A",
  },
  transactionTypeLabel: {
    fontSize: 13,
    marginBottom: 12,
  },
  descriptionLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: "auto",
    marginTop: 24,
  },
  locationLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "#91919F",
    marginRight: "auto",
    marginTop: 10,
  },
});
