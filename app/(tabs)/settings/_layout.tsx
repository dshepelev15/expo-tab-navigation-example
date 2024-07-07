import { Stack, useNavigation } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="internal" />
    </Stack>
  );
};

export default _layout;
