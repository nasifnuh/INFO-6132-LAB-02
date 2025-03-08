import React from "react";
import { View, Text, TextInput as DefaultTextInput } from "react-native";

import styles from "./styles";

const TextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  error,
  touched,
  editable
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, error && touched && styles.errorLabel]}>
        {label}
      </Text>

      <View style={styles.inputContainer}>
        <DefaultTextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          editable={editable}
          keyboardType={keyboardType}
          placeholderTextColor="#ababab"
        />
      </View>
    </View>
  );
};

export default TextInput;
