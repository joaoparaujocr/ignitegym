import { VStack } from "@components/ui/vstack";
import { Image } from "@components/ui/image";
import { Center } from "@components/ui/center";
import { Text } from "@components/ui/text";
import BackgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heading } from "@components/ui/heading";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {

  return (
    <SafeAreaView className="bg-gray-700 flex-1">
      <VStack className="flex-1 bg-gray-700">
        <Image
          source={BackgroundImg}
          alt="Pessoas treinando"
          className="w-full h-[684px] absolute"
          defaultSource={BackgroundImg}
        />

        <Center className="gap-20 flex-1 px-10">
          <Center>
            <Logo />

            <Text className="text-gray-100 text-sm">
              Treine sua mente e o seu corpo
            </Text>
          </Center>

          <Center className="gap-2">
            <Heading className="text-gray-100">Acesse sua conta</Heading>
            
            <Input placeholder="E-mail" keyboardType="email-address" />
            <Input placeholder="Senha" type="password" secureTextEntry/>

            <Button title="Acessar" />
          </Center>
        </Center>
      </VStack>
    </SafeAreaView>
  )
}