import React, { useState } from "react";
import { View, Text, Platform, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Layout from "@/layout";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";

import { styles } from "./styles";

const validationSchema = Yup.object().shape({
  date: Yup.string().required(),
  amount: Yup.string().required(),
  description: Yup.string().required(),
  location: Yup.string().required(),
  transactionType: Yup.string().required(),
  category: Yup.string().required(),
});

const Header = () => {
  return (
    <View style={styles.header}>
      <BackButton />
      <Text style={styles.headerLabel}>Add Expense</Text>
    </View>
  );
};

const AddTransaction = ({ route, navigation }) => {
  const { handleAddTransaction } = route.params;
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTypePicker, setShowTypePicker] = useState(false);
  const [showCategoryPicker, setShowCategoryPicker] = useState(false);

  const transactionTypes = ["Credit", "Debit", "Refund"];
  const categories = ["Food", "Shopping", "Subscription"];

  return (
    <Layout header={<Header />}>
      <View style={styles.container}>
        <Formik
          initialValues={{
            date: new Date().toISOString(),
            amount: "",
            description: "",
            location: "",
            transactionType: "",
            category: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            const transaction = {
              date: values.date,
              amount: values.amount,
              description: values.description,
              location: values.location,
              transactionType: values.transactionType,
              category: values.category,
            };
            handleAddTransaction(transaction);
            navigation.goBack("Dashboard");
          }}
        >
          {({
            handleChange,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.form}>
              <View style={styles.datepicker}>
                <TextInput
                  label="Date*"
                  value={new Date(values.date).toLocaleDateString()}
                  placeholder="Select date"
                  editable={false}
                  error={errors.date}
                  touched={touched.date}
                />
                <TouchableOpacity
                  style={styles.dateButton}
                  onPress={() => setShowDatePicker(!showDatePicker)}
                >
                  <FontAwesome5 name="calendar-alt" size={16} color="black" />
                </TouchableOpacity>
              </View>
              {showDatePicker && (
                <DateTimePicker
                  style={{ marginHorizontal: "auto" }}
                  value={new Date(values.date)}
                  mode="date"
                  display="default"
                  onChange={(event, selectedDate) => {
                    setShowDatePicker(Platform.OS === "ios");
                    if (selectedDate) {
                      setFieldValue(
                        "date",
                        selectedDate.toISOString().split("T")[0]
                      );
                      setShowDatePicker(false);
                    }
                  }}
                />
              )}

              <TextInput
                label="Amount*"
                onChangeText={handleChange("amount")}
                value={values.amount}
                placeholder="Enter the amount"
                error={errors.amount}
                touched={touched.amount}
              />

              <TextInput
                label="Description*"
                onChangeText={handleChange("description")}
                value={values.description}
                placeholder="Enter the description"
                error={errors.description}
                touched={touched.description}
              />

              <TextInput
                label="Location*"
                onChangeText={handleChange("location")}
                value={values.location}
                placeholder="Enter the location"
                error={errors.location}
                touched={touched.location}
              />

              <View style={styles.datepicker}>
                <TextInput
                  label="Transaction Type*"
                  value={values.transactionType}
                  placeholder="Select transaction type"
                  editable={false}
                  error={errors.transactionType}
                  touched={touched.transactionType}
                />
                <TouchableOpacity
                  style={styles.dateButton}
                  onPress={() => setShowTypePicker(!showTypePicker)}
                >
                  <MaterialCommunityIcons
                    name="form-dropdown"
                    size={16}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              {showTypePicker && (
                <Picker
                  selectedValue={values.transactionType}
                  onValueChange={(e) => {
                    setFieldValue("transactionType", e);
                    setShowTypePicker(false);
                  }}
                  style={{ marginTop: -30 }}
                >
                  {transactionTypes.map((type, index) => (
                    <Picker.Item key={index} label={type} value={type} />
                  ))}
                </Picker>
              )}

              <View style={styles.datepicker}>
                <TextInput
                  label="Category*"
                  value={values.category}
                  placeholder="Select category"
                  editable={false}
                  error={errors.category}
                  touched={touched.category}
                />
                <TouchableOpacity
                  style={styles.dateButton}
                  onPress={() => setShowCategoryPicker(!showCategoryPicker)}
                >
                  <MaterialCommunityIcons
                    name="form-dropdown"
                    size={16}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              {showCategoryPicker && (
                <Picker
                  selectedValue={values.category}
                  onValueChange={(e) => {
                    setFieldValue("category", e);
                    setShowCategoryPicker(false);
                  }}
                  style={{ marginTop: -30 }}
                >
                  {categories.map((category, index) => (
                    <Picker.Item
                      key={index}
                      label={category}
                      value={category}
                    />
                  ))}
                </Picker>
              )}

              <Button
                label="Add Transaction"
                onPress={handleSubmit}
                style={styles.addButton}
              />
            </View>
          )}
        </Formik>
      </View>
    </Layout>
  );
};

export default AddTransaction;
