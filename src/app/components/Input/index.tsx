import { ComponentProps } from 'react'

export interface InputProps {
  className?: string
}

type PrefixProps = ComponentProps<'div'>

export function Prefix(props: PrefixProps) {
  return <div {...props} />
}

type ConTrolProps = ComponentProps<'input'>

export function Control(props: ConTrolProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-8 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  )
}

export type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
