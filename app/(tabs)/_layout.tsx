import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="login" options={{ title: 'login' }} />
            <Stack.Screen name="register" options={{ title: 'register' }} />
            <Stack.Screen name="home" options={{ title: 'home' }} />
        </Stack>
    );
}
