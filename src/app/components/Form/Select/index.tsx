'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

export interface Props {
  children: ReactNode
  placeholder: string
}

export const Select = ({ children, placeholder }: Props) => {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <SelectPrimitive.Value
          placeholder={placeholder}
          className="text-black"
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            sideOffset={8}
            side="bottom"
            position="popper"
            className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
          >
            <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Trigger>
    </SelectPrimitive.Root>
  )
}
