'use client'

import { User } from 'lucide-react'
import { useFileInput } from './Root'
import { useMemo } from 'react'

export const ImagePreview = () => {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (!files.length) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-zinc-800">
        <User className="h-8 w-8 text-violet-50 dark:text-zinc-400" />
      </div>
    )
  }

  return (
    <img
      src={previewURL}
      alt="Preview"
      className="h-16 w-16 rounded-full object-cover"
    />
  )
}
