import { Image } from "@tamagui/image";
import { Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Stack, Text, View } from "@tamagui/core";

export default function HomeScreen() {
  return (
    <View backgroundColor="$background" flex={1}>
      <ThemedView
        padding="$4"
        backgroundColor="$blue4"
        minHeight="$20"
        justifyContent="flex-end"
        position="relative"
      >
        <Image
          source={{ uri: require("@/assets/images/partial-react-logo.png") }}
          height={178}
          width={290}
          position="absolute"
          bottom={0}
          left={0}
        />
      </ThemedView>

      <ThemedView padding="$4" gap="$4">
        <Stack flexDirection="row" alignItems="center" gap="$2">
          <Text color="$color" fontWeight="bold" fontSize="$8">
            Welcome!
          </Text>
          <HelloWave />
        </Stack>

        <ThemedView gap="$2">
          <ThemedText type="subtitle">Step 1: Try it</ThemedText>
          <ThemedText>
            Edit{" "}
            <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
            to see changes. Press{" "}
            <ThemedText type="defaultSemiBold">
              {Platform.select({
                ios: "cmd + d",
                android: "cmd + m",
                web: "F12",
              })}
            </ThemedText>{" "}
            to open developer tools.
          </ThemedText>
        </ThemedView>

        <ThemedView gap="$2">
          <ThemedText type="subtitle">Step 2: Explore</ThemedText>
          <ThemedText>
            Tap the Explore tab to learn more about what&apos;s included in this
            starter app.
          </ThemedText>
        </ThemedView>

        <ThemedView gap="$2">
          <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
          <ThemedText>
            When you&apos;re ready, run{" "}
            <ThemedText type="defaultSemiBold">
              npm run reset-project
            </ThemedText>{" "}
            to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
            directory. This will move the current{" "}
            <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
            <ThemedText type="defaultSemiBold">app-example</ThemedText>.
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </View>
  );
}
