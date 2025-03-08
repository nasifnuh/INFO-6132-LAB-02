import React from "react";
import { View, Text, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Layout from "@/layout";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";

import Logo from "@assets/logo.png";

import { styles } from "./styles";

const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

const Login = ({ navigation }) => {
  return (
    <Layout>
      <View style={styles.container}>
        <Image source={Logo} style={styles.image} />
        <Text style={styles.title}>Expense Tracker</Text>

        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            if (values.username === "admin" && values.password === "admin") {
              navigation.replace("Dashboard");
            }
          }}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <View style={styles.form}>
              <TextInput
                label="Username*"
                onChangeText={handleChange("username")}
                value={values.username}
                placeholder="Enter your username"
                error={errors.username}
                touched={touched.username}
              />
              <TextInput
                label="Password*"
                onChangeText={handleChange("password")}
                value={values.password}
                placeholder="Enter your password"
                secureTextEntry={true}
                error={errors.password}
                touched={touched.password}
              />

              <Button
                label="Login"
                onPress={handleSubmit}
                style={styles.loginButton}
              />
            </View>
          )}
        </Formik>
      </View>
    </Layout>
  );
};

export default Login;
