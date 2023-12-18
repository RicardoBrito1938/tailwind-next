import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './TabItem'
import { useState } from 'react'

const tabs = [
  {
    value: 'tab1',
    title: 'My Details',
  },
  {
    value: 'tab2',
    title: 'Profile',
  },
  {
    value: 'tab3',
    title: 'Password',
  },
  {
    value: 'tab4',
    title: 'Team',
  },
  {
    value: 'tab5',
    title: 'Plan',
  },
  {
    value: 'tab6',
    title: 'Billing',
  },
  {
    value: 'tab7',
    title: 'Email',
  },
  {
    value: 'tab8',
    title: 'Notifications',
  },
  {
    value: 'tab9',
    title: 'Integrations',
  },
  {
    value: 'tab10',
    title: 'API',
  },
]

export const SettingTabs = () => {
  const [selected, setSelected] = useState(tabs[0]?.value)

  return (
    <Tabs.Root value={selected} onValueChange={setSelected}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900">
            {tabs.map((tab) => (
              <TabItem
                key={tab.value}
                value={tab.value}
                title={tab.title}
                isSelected={selected === tab.value}
              />
            ))}
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
