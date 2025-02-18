import { View, StatusBar, Text } from 'react-native';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto'
import { GluestackUIProvider } from '@components/ui/gluestack-ui-provider';

export default function App() {
  const [fontsLoad] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <GluestackUIProvider>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202024' }}>
        <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
        {fontsLoad ? <Text>Open up App.tsx to start working on your app!</Text> : <View />}
      </View>
    </GluestackUIProvider>
  );
}