import { Button } from "@tamagui/button";
import { PropsWithChildren, useState } from "react";

import { Text, View } from "@tamagui/core";

export function Collapsible({
  children,
  title,
}: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <Button onPress={() => setIsOpen(!isOpen)}>
        <Text>{title}</Text>
      </Button>
    </View>
  );
}
