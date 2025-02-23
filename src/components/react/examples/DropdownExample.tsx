'use client'

import { FaChevronDown } from 'react-icons/fa'

import { useState } from 'react'

export default function DropdownExample() {
  const [isActiveDropdown, setIsActiveDropdown] = useState(false)
  const items = [
    {
      name: 'Youtube',
      link: 'https://www.youtube.com',
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com',
    },
    {
      name: 'Google',
      link: 'https://www.google.com',
    },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsActiveDropdown(!isActiveDropdown)
        }}
        className="flex w-[200px] cursor-pointer items-center rounded-base border-2 border-black bg-main px-7 py-3 font-bold shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
      >
        <div className="mx-auto flex items-center">
          Dropdown
          <FaChevronDown
            style={{
              transform: `rotate(${isActiveDropdown ? '180deg' : '0'})`,
            }}
            className={'ml-3 h-4 w-4 transition-transform ease-in-out'}
          />
        </div>
      </button>
      <div
        style={{
          top: isActiveDropdown ? '80px' : '50px',
          opacity: isActiveDropdown ? '1' : '0',
          visibility: isActiveDropdown ? 'visible' : 'hidden',
        }}
        className="absolute left-0 top-[70px] w-[200px] rounded-base border-2 border-black text-center font-bold shadow-base transition-all"
      >
        {items.map((item, index) => {
          return (
            <a
              key={index}
              href={item.link}
              className="block w-full border-b-2 border-black bg-main px-7 py-3 no-underline first:rounded-t-base last:rounded-b-base hover:bg-mainAccent"
            >
              {item.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}
