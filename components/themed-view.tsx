import { YStack, type YStackProps } from "@tamagui/stacks";

export type ThemedViewProps = YStackProps;

export function ThemedView(props: ThemedViewProps) {
  return <YStack background="$background" {...props} />;
}
