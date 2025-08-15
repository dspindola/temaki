import { ThemedView } from "@/components/themed-view";
import { Card } from "@tamagui/card";
import { styled, Text, View, ScrollView } from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Separator } from "@tamagui/separator";
import { XStack, YStack } from "@tamagui/stacks";
import { Switch } from "@tamagui/switch";
import { useState } from "react";
import { Alert } from "react-native";

const Circle = styled(View, {
  backgroundColor: "$blue10",
  borderRadius: 16,
  width: 16,
  height: 16,
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 1,
  borderColor: "$blue8",
});

/**
 * # Stunning Settings Screen
 * @symbol {{ 🎡😢 }}
 * @module Settings
 * @source local
 */
export default function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [biometrics, setBiometrics] = useState(false);
  const [autoSync, setAutoSync] = useState(true);

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout? This will clear all your local data.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => console.log("Logged out"),
        },
      ]
    );
  };

const SettingItem = ({
    title,
    description,
    value,
    onValueChange,
    icon,
  }: {
    title: string;
    description: string;
    value: boolean;
    onValueChange: (value: boolean) => void;
    icon: string;
  }) => (
    <Card
      elevate
      bordered
      animation="bouncy"
      hoverStyle={{ scale: 1.02 }}
      pressStyle={{ scale: 0.98 }}
      padding="$4"
      backgroundColor="$background"
      borderColor="$borderColor"
    >
      <XStack alignItems="center" justifyContent="space-between">
        <XStack alignItems="center" gap="$3" flex={1}>
          <Circle />
          <YStack flex={1}>
            <Text fontSize="$5" fontWeight="600" color="$color">
              {title}
            </Text>
            <Text fontSize="$3" color="$gray10" opacity={0.8}>
              {description}
            </Text>
          </YStack>
        </XStack>
        <Switch
          size="$3"
          checked={value}
          onCheckedChange={onValueChange}
          backgroundColor={value ? "$blue10" : "$gray8"}
        >
          <Switch.Thumb animation="quick" backgroundColor="$background" />
        </Switch>
      </XStack>
    </Card>
  );

const ActionButton = ({
    title,
    description,
    onPress,
    icon,
    variant = "outlined",
  }: {
    title: string;
    description: string;
    onPress: () => void;
    icon: string;
    variant?: "outlined" | "solid";
  }) => (
    <Card
      elevate
      bordered
      animation="bouncy"
      hoverStyle={{ scale: 1.02 }}
      pressStyle={{ scale: 0.98 }}
      padding="$4"
      backgroundColor="$background"
      borderColor="$borderColor"
      onPress={onPress}
    >
      <XStack alignItems="center" gap="$3">
        <Circle />
        <YStack flex={1}>
          <Text fontSize="$5" fontWeight="600" color="$color">
            {title}
          </Text>
          <Text fontSize="$3" color="$gray10" opacity={0.8}>
            {description}
          </Text>
        </YStack>
        <Text color="$gray10" fontSize="$4">
          ›
        </Text>
      </XStack>
    </Card>
  );

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [biometrics, setBiometrics] = useState(false);
  const [autoSync, setAutoSync] = useState(true);

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout? This will clear all your local data.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => console.log("Logged out"),
        },
      ]
    );
  };

  return (
    <ThemedView flex={1} backgroundColor="$background">
      <LinearGradient
        colors={["$blue2", "$purple2", "$pink2"]}
        start={[0, 0]}
        end={[1, 1]}
        style={{ position: "absolute", top: 0, left: 0, right: 0, height: 200 }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <YStack padding="$4" paddingTop="$8" gap="$4">
          <YStack alignItems="center" gap="$3" paddingVertical="$6">
            <Circle />
            <YStack alignItems="center" gap="$1">
              <Text fontSize="$8" fontWeight="bold" color="$color">
                Settings
              </Text>
              <Text fontSize="$4" color="$gray11" opacity={0.8}>
                Customize your experience
              </Text>
            </YStack>
          </YStack>

          <YStack gap="$3">
            <Text fontSize="$6" fontWeight="bold" color="$color" paddingLeft="$2">
              Preferences
            </Text>

            <SettingItem
              title="Dark Mode"
              description="Switch between light and dark themes"
              value={darkMode}
              onValueChange={setDarkMode}
              icon="🌙"
            />

            <SettingItem
              title="Push Notifications"
              description="Receive updates and alerts"
              value={notifications}
              onValueChange={setNotifications}
              icon="🔔"
            />

            <SettingItem
              title="Biometric Authentication"
              description="Use fingerprint or Face ID"
              value={biometrics}
              onValueChange={setBiometrics}
              icon="🔐"
            />

            <SettingItem
              title="Auto Sync"
              description="Automatically sync data across devices"
              value={autoSync}
              onValueChange={setAutoSync}
              icon="🔄"
            />
          </YStack>

          <Separator marginVertical="$4" />

          <YStack gap="$3">
            <Text fontSize="$6" fontWeight="bold" color="$color" paddingLeft="$2">
              Account
            </Text>

            <ActionButton
              title="Profile Settings"
              description="Manage your personal information"
              onPress={() => Alert.alert("Profile", "Profile settings coming soon!")}
              icon="👤"
            />

            <ActionButton
              title="Privacy & Security"
              description="Control your data and security settings"
              onPress={() => Alert.alert("Privacy", "Privacy settings coming soon!")}
              icon="🛡️"
            />

            <ActionButton
              title="Data & Storage"
              description="Manage app data and storage usage"
              onPress={() => Alert.alert("Storage", "Storage settings coming soon!")}
              icon="💾"
            />
          </YStack>

          <Separator marginVertical="$4" />

          <YStack gap="$3">
            <Text fontSize="$6" fontWeight="bold" color="$color" paddingLeft="$2">
              Support
            </Text>

            <ActionButton
              title="Help & FAQ"
              description="Get help and find answers"
              onPress={() => Alert.alert("Help", "Help center coming soon!")}
              icon="❓"
            />

            <ActionButton
              title="Contact Support"
              description="Reach out to our support team"
              onPress={() => Alert.alert("Support", "Contact support coming soon!")}
              icon="💬"
            />

            <ActionButton
              title="Rate the App"
              description="Share your feedback on the App Store"
              onPress={() => Alert.alert("Rate", "App Store rating coming soon!")}
              icon="⭐"
            />
          </YStack>

          <Separator marginVertical="$4" />

          <Card
            elevate
            bordered
            animation="bouncy"
            hoverStyle={{ scale: 1.02 }}
            pressStyle={{ scale: 0.98 }}
            padding="$4"
            backgroundColor="$red2"
            borderColor="$red8"
            onPress={handleLogout}
          >
            <XStack alignItems="center" justifyContent="center" gap="$3">
              <Circle />
              <Text fontSize="$5" fontWeight="600" color="$red11">
                Logout
              </Text>
            </XStack>
          </Card>

          <YStack alignItems="center" paddingVertical="$6" gap="$2">
            <Text fontSize="$3" color="$gray10" opacity={0.6}>
              App Version 1.0.0
            </Text>
            <Text fontSize="$2" color="$gray10" opacity={0.4}>
              Made with ❤️ for an amazing experience
            </Text>
          </YStack>
        </YStack>
      </ScrollView>
    </ThemedView>
  );
}
