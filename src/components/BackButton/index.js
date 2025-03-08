import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";

const BackButton = ({ screen, color = "#595959" }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (screen) {
      navigation.navigate(screen);
    } else {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <AntDesign name="arrowleft" size={24} color={color} />
    </TouchableOpacity>
  );
};

export default BackButton;
