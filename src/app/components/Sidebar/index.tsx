import { SearchMd } from '@untitled-ui/icons-react'
import { MainNavigation } from './MainNavigation'
import { NavItem } from './NavItem'
import { Cog, LifeBuoy } from 'lucide-react'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <SearchMd className="h-5 w-5 text-zinc-500" />
        <input
          className="w-full bg-transparent focus:outline-none"
          placeholder="Search"
        />
      </div>

      <MainNavigation />

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
