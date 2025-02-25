import { Button as GluestackButton, ButtonText, ButtonSpinner } from '@components/ui/button'
import { ComponentProps } from 'react'
import colors from "tailwindcss/colors"

interface ButtonProps extends ComponentProps<typeof GluestackButton> {
  title: string
  isLoading?: boolean
}

export function Button({ title, isLoading, ...rest }: ButtonProps) {

  return (
    <GluestackButton
      className='w-full h-14 bg-green-700 border-2 border-green-500 data-[active=true]:bg-green-500'
      isDisabled={isLoading}
      {...rest}
    >
     {isLoading ? (
      <ButtonSpinner color={colors.gray[400]} className='text-center flex-1' hidesWhenStopped={!isLoading} />
     ): (
      <ButtonText className='text-center flex-1 rounded-sm font-heading text-sm'>{title}</ButtonText>
     )} 
    </GluestackButton>
  )
}