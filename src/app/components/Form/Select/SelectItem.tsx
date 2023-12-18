'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export type SelectItemProps = SelectPrimitive.SelectItemProps & {
  text: string
}

export const SelectItem = ({ text, ...props }: SelectItemProps) => {
  return (
    <SelectPrimitive.Item
      className="data-[highlighted]:bg-zinc-50] flex items-center justify-between gap-2 px-3 py-2.5 outline-none"
      {...props}
    >
      <SelectPrimitive.ItemText className="text-black">
        {text}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4 text-violet-50 dark:text-zinc-400" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}
