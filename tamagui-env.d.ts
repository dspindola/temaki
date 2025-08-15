import type { AppConfig } from "./tamagui.config";

declare module "@tamagui/core" {
    interface TamaguiCustomConfig extends AppConfig { }
}