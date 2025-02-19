import { View, StatusBar } from 'react-native';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto'
import { GluestackUIProvider } from '@components/ui/gluestack-ui-provider';
import { Text } from '@/gluestack-ui/text';
import { Center } from '@/gluestack-ui/center';
import './global.css'

export default function App() {
  const [fontsLoad] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <GluestackUIProvider>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      {fontsLoad ? (
        <Center className='flex-1 bg-gray-700'>
          <Text className='text-secondary-300'>Open up App.tsx to start working on your app!</Text>
        </Center>
      ) : <View />}
    </GluestackUIProvider >
  );
}