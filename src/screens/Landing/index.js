import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Layout from "@/layout";
import Button from "@/components/Button";

import Logo from "@assets/logo.png";
import { styles } from "./styles";

const Landing = () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={Logo} style={styles.image} />
          <Text style={styles.title}>Expense Manager</Text>
          <Text style={styles.subTitle}>Track your expenses effortlessly!</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            label="Login"
            onPress={() => navigation.navigate("Login")}
            variant="outlined"
            customBoxStyle={styles.loginButton}
          />
        </View>
      </View>
    </Layout>
  );
};

export default Landing;
