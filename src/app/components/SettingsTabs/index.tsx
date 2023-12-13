import * as Tabs from '@radix-ui/react-tabs'
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
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        {tabs.map((tab) => (
          <TabItem
            key={tab.value}
            value={tab.value}
            title={tab.title}
            isSelected={selected === tab.value}
          />
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}
