import React from "react";
import { View, Text, Image } from "react-native";

import Layout from "@/layout";
import BackButton from "@/components/BackButton";

import ShoppingIcon from "@assets/shopping.png";
import FoodIcon from "@assets/food.png";
import SubscriptionIcon from "@assets/subscription.png";

import { styles } from "./styles";

const Header = () => {
  return (
    <View style={styles.header}>
      <BackButton />
      <Text style={styles.headerLabel}>Expense Details</Text>
    </View>
  );
};

const TransactionDetails = ({ route }) => {
  const { transaction } = route.params;
  return (
    <Layout header={<Header />}>
      <View style={styles.container}>
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
        <Text style={styles.categoryLabel}>{transaction.category}</Text>

        <View style={styles.details}>
          <Text style={styles.amountLabel}>${transaction.amount}</Text>
          <Text style={styles.transactionTypeLabel}>
            ({transaction.transactionType})
          </Text>
          <Text>{transaction.date}</Text>
          <Text style={styles.descriptionLabel}>{transaction.description}</Text>
          <Text style={styles.locationLabel}>{transaction.location}</Text>
        </View>
      </View>
    </Layout>
  );
};

export default TransactionDetails;
