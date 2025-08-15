import config from "@/tamagui.config";
import { TamaguiProvider } from "@tamagui/core";
import { useColorScheme } from "react-native";

export function Provider({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();

  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme || "dark"}>
      {children}
    </TamaguiProvider>
  );
}
