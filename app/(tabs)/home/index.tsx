import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Link, usePathname } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const home = () => {
  const navigation = useNavigation();
  const path = usePathname();

  useEffect(() => {
    const state = navigation.getState();
    console.log({ path, state });
  }, []);

  return (
    <View>
      <Text>home</Text>
      <Link href={"/home/internal"}>Go to home internal</Link>
    </View>
  );
};

export default home;
