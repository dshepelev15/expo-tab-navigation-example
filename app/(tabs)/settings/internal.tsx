import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Link, usePathname } from "expo-router";
import { StackActions, useNavigation } from "@react-navigation/native";

const internal = () => {
  const navigation = useNavigation();
  const path = usePathname();

  useEffect(() => {
    const state = navigation.getState();
    console.log({ path, state });

    // StackActions.popToTop();

    // @ts-ignore
    // navigation.navigate("/settings");
  }, []);

  return (
    <View>
      <Text>internal</Text>
      <Link href={"/settings"}>Go to settings index</Link>
    </View>
  );
};

export default internal;
