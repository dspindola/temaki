import BlurTabBarBackground from "@/components/ui/tab-bar-background";
import { Tabs } from "expo-router";

export default function SettingsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: "none" },
        tabBarBackground: BlurTabBarBackground,
      }}
    />
  );
}
