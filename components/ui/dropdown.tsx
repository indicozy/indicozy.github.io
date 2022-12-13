import { Menu } from '@headlessui/react'

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
    <Menu>
      <Menu.Button>{props.button}</Menu.Button>
      <Menu.Items>
        {props.items.map((item, i) => (
          <Menu.Item key={i}>
            {({ active }) => {
              if (item.href)
                return (
                  <a className={`${active && 'bg-blue-500'}`} href={item.href}>
                    {item.text}
                  </a>
                )
              return (
                <button
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
      </Menu.Items>
    </Menu>
  )
}
