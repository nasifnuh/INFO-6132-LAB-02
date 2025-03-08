import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import Layout from "@/layout";

import ShoppingIcon from "@assets/shopping.png";
import FoodIcon from "@assets/food.png";
import SubscriptionIcon from "@assets/subscription.png";
import { styles } from "./styles";

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.replace("Login")}
        style={styles.logoutButton}
      >
        <MaterialIcons name="logout" size={16} color="white" />
        <Text style={styles.logoutLabel}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const Dashboard = ({ navigation }) => {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <Layout header={<Header navigation={navigation} />}>
      <View style={styles.container}>
        {transactions.length > 0 ? (
          <>
            <Text style={styles.recentLabel}>Recent Expenses</Text>
            <View style={styles.transactions}>
              {transactions.map((transaction, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.transaction}
                  onPress={() =>
                    navigation.navigate("TransactionDetails", { transaction })
                  }
                >
                  <View style={styles.left}>
                    <View
                      style={[
                        styles.iconContainer,
                        transaction.category === "Food"
                          ? styles.food
                          : transaction.category === "Shopping"
                          ? styles.shopping
                          : styles.subscription,
                      ]}
                    >
                      <Image
                        source={
                          transaction.category === "Food"
                            ? FoodIcon
                            : transaction.category === "Shopping"
                            ? ShoppingIcon
                            : SubscriptionIcon
                        }
                        style={styles.icon}
                      />
                    </View>
                    <View style={styles.center}>
                      <Text style={styles.categoryLabel}>
                        {transaction.category}
                      </Text>
                      <Text style={styles.descriptionLabel}>
                        {transaction.description}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.amountLabel}>
                      - ${transaction.amount}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </>
        ) : (
          <View style={styles.empty}>
            <Text style={styles.emptyLabel}>No recent expenses :)</Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.fab}
          onPress={() =>
            navigation.navigate("AddTransaction", { handleAddTransaction })
          }
        >
          <MaterialIcons name="add" size={36} color="white" />
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default Dashboard;
