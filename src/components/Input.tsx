import { Input as GluestackInput, InputField } from '@components/ui/input'
import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<typeof InputField> { }

export function Input({ ...props }: InputProps) {

  return (
    <GluestackInput className='bg-gray-700 h-14 rounded-md focus:border focus:border-green-500'>
      <InputField {...props} className='color-white font-body rounded-md placeholder:text-gray-300 border-0'/>
    </GluestackInput>
  )
}