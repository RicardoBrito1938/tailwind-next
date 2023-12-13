'use client'

import { ChangeEvent, ComponentProps, useCallback } from 'react'
import { useFileInput } from './Root'

type ControlProps = ComponentProps<'input'>

export const Control = (props: ControlProps) => {
  const { id, onFileSelected } = useFileInput()

  const handleFileSelected = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event?.target?.files) {
        return
      }

      const files = Array.from(event.target.files || [])
      onFileSelected(files)
    },
    [onFileSelected],
  )

  return (
    <input
      type="file"
      className="sr-only"
      onChange={handleFileSelected}
      id={id}
      {...props}
    />
  )
}
