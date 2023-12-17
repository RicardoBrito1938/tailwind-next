import { LogOut } from 'lucide-react'
import { Button } from '../../Button'

export const Profile = () => {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/RicardoBrito1938.png"
        alt="Ricardo Brito"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          ricardo.jucrist@hotmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
