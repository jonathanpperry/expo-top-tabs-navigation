import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { Image } from 'react-native';

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="(tabs)/index"
        options={{
          headerLeft: () => (
            <Image
              source={{
                uri: 'https://yt3.googleusercontent.com/-7THQ3F7XczON7lUlwCuc4HZLMXhoRS0Yuo1UqsO4a0u6JaPQCiHkqJJUy8OurLwcroSZYjiOeE=s176-c-k-c0x00ffffff-no-rj',
              }}
              style={{ width: 30, height: 30, borderRadius: 20 }}
            />
          ),
          headerRight: () => <Ionicons name="settings-outline" size={24} color="black" />,
          headerTitle: () => (
            <Image
              source={{
                uri: 'https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png',
              }}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="details" options={{ headerTitle: 'Details', headerBackTitle: 'Back' }} />
    </Stack>
  );
};

export default Layout;
