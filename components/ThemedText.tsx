import { Text, styled, type TextProps } from "@tamagui/core";

export type ThemedTextProps = TextProps & {
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

const StyledText = styled(Text, {
  variants: {
    type: {
      default: {
        fontSize: "$4",
        lineHeight: "$6",
        color: "$color",
      },
      defaultSemiBold: {
        fontSize: "$4",
        lineHeight: "$6",
        fontWeight: "600",
        color: "$color",
      },
      title: {
        fontSize: "$10",
        fontWeight: "bold",
        lineHeight: "$10",
        color: "$color",
      },
      subtitle: {
        fontSize: "$6",
        fontWeight: "bold",
        color: "$color",
      },
      link: {
        lineHeight: "$7",
        fontSize: "$4",
        color: "$blue10",
        textDecorationLine: "underline",
      },
    },
  } as const,
});

export function ThemedText({ type = "default", ...rest }: ThemedTextProps) {
  return <StyledText type={type} {...rest} />;
}
