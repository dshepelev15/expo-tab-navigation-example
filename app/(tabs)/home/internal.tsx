import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Link, usePathname } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const internal = () => {
  const navigation = useNavigation();
  const path = usePathname();

  useEffect(() => {
    const state = navigation.getState();
    console.log({ path, state });
  }, []);

  return (
    <View>
      <Text>internal</Text>
      <Link href={"/settings/internal"}>Go to settings internal</Link>
    </View>
  );
};

export default internal;
