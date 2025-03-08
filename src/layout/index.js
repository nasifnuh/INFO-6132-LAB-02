import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { styles } from "./styles";

const Layout = ({
  header,
  children,
  safeAreaStyle,
  contentContainerStyle,
  ...scrollViewProps
}) => {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <SafeAreaView style={styles.safeArea}>
        {header}
        <ScrollView
          contentContainerStyle={[
            styles.scrollViewContent,
            contentContainerStyle,
          ]}
          {...scrollViewProps}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Layout;
