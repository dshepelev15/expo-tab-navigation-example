import { Stack, Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="settings" options={{ unmountOnBlur: true }} />
    </Tabs>
  );
};

export default _layout;
