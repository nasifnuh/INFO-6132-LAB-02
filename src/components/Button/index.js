import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const Button = ({ label, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
