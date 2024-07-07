import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Link, useNavigation, usePathname } from "expo-router";

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
      <Link href={"/settings/internal"}>Go to settings internal</Link>
    </View>
  );
};

export default home;
