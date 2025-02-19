import { Center } from "./ui/center";
import { Spinner } from "./ui/spinner";
import colors from 'tailwindcss/colors'

export function Loading() {
  return (
    <Center className="flex-1 bg-gray-700">
      <Spinner size='large' color={colors.green[700]} />
    </Center>
  )
}