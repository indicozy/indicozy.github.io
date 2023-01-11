import { Fragment } from 'react'

import { Menu, Transition } from '@headlessui/react'

type TypeDropdownItem = {
  text: string
  href?: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClick?: Function
}

type TypeDropdown = {
  button: string
  items: TypeDropdownItem[]
}

export function MyDropdown(props: TypeDropdown) {
  return (
    <Menu as='div' className='inline-block relative text-xl text-center'>
      <Menu.Button className={'p-2'}>{props.button}</Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 left-0 bg-stone-100 dark:bg-zinc-700'>
          <div className='flex flex-col items-center px-2'>
            {props.items.map((item, i) => (
              <Menu.Item key={i}>
                {({ active }) => {
                  if (item.href)
                    return (
                      <a
                        className={`${active && 'bg-blue-500'} p-2`}
                        href={item.href}
                      >
                        {item.text}
                      </a>
                    )
                  return (
                    <button
                      className={
                        `${
                          active
                            ? 'bg-rose-300 transition dark:bg-zinc-500'
                            : ``
                        } ` + 'text-center w-8'
                      }
                      onClick={() => {
                        item.onClick()
                      }}
                    >
                      {item.text}
                    </button>
                  )
                }}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
