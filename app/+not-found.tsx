import { Link, Stack } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView 
        flex={1}
        alignItems="center"
        justifyContent="center"
        padding="$5"
        gap="$4"
      >
        <ThemedText type="title">This screen does not exist.</ThemedText>
        <Link href="/" style={{ marginTop: 15, paddingVertical: 15 }}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}
