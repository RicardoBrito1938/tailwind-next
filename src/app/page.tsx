'use client'

import { SettingTabs } from './components/SettingsTabs'
import * as Input from './components/Input'
import * as FileInput from './components/Form/FileInput'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { Select } from './components/Form/Select'
import { SelectItem } from './components/Form/Select/SelectItem'
import { TextArea } from './components/Form/Textarea'
import { Button } from './components/Button'

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-800 dark:bg-zinc-900 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal Info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col  gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Ricardo" />
              </Input.Root>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
                >
                  Last name
                </label>
              </div>

              <Input.Root>
                <Input.Control id="lastName" defaultValue="Brito" />
              </Input.Root>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="ricardo@mail.com"
              />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className=" text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                This will be displayed on your profile
              </span>
            </label>
            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="Software developer" />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem value="br" text="America Sao Paulo (UTC-03:00)" />
              <SelectItem value="us" text="Pacific Standard Time (UTC-08:00)" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="bio"
              className=" text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                Write a short introduction about yourself
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    defaultChecked
                    value="normal"
                    text="Normal text"
                  />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold
                      className="h-4 w-4 text-zinc-500 dark:text-zinc-400"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic
                      className="h-4 w-4 text-zinc-500 dark:text-zinc-400"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link
                      className="h-4 w-4 text-zinc-500 dark:text-zinc-400"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List
                      className="h-4 w-4 text-zinc-500 dark:text-zinc-400"
                      strokeWidth={3}
                    />
                  </Button>
                  <button
                    type="button"
                    className="ml-auto rounded-md p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500 dark:text-zinc-400"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>
              <TextArea
                id="bio"
                defaultValue=" I am software developer based in isle of man"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="portfolio"
              className=" text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                Share a few snippets of your work
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Home
