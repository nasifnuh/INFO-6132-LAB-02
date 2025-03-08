import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "@/screens/Landing";
import Login from "@/screens/Login";
import Dashboard from "@/screens/Dashboard";
import AddTransaction from "@/screens/AddTransaction";
import TransactionDetails from "@/screens/TransactionDetails";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Landing" component={Landing} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="AddTransaction" component={AddTransaction} />
        <Stack.Screen
          name="TransactionDetails"
          component={TransactionDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
