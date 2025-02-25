import { StatusBar } from 'react-native';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto'
import { GluestackUIProvider } from '@components/ui/gluestack-ui-provider';
import './global.css'
import { Loading } from '@components/Loading';
import { SignIn } from '@screens/SignIn';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoad] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <GluestackUIProvider>
      <SafeAreaProvider>
        <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
        {fontsLoad ? (
          <SignIn />
        ) : <Loading />}
      </SafeAreaProvider>
    </GluestackUIProvider >
  );
}