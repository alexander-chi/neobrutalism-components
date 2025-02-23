'use client'

import ReactDom from 'react-dom'
import { MdClose } from 'react-icons/md'

import React, { useEffect, useState } from 'react'

type Props = {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

export default function Modal({ active, setActive, children }: Props) {
  const [isVisible, setIsVisible] = useState(false)

  const closeModal = () => {
    setIsVisible(false)
    setTimeout(() => {
      setActive(false)
    }, 300)
  }

  useEffect(() => {
    if (active) {
      setIsVisible(true)
    }
  }, [active])

  if (!active) return null

  return ReactDom.createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center"
    >
      <div
        style={{
          opacity: isVisible ? '1' : '0',
          visibility: isVisible ? 'visible' : 'hidden',
        }}
        className="relative flex w-[350px] flex-col items-center justify-center rounded-base border-2 border-black bg-main p-10 pt-12 font-bold shadow-base transition-all duration-300"
      >
        <button onClick={closeModal}>
          <MdClose className="absolute right-3 top-3 h-6 w-6" />
        </button>
        {children}
        <button
          className="mt-5 cursor-pointer rounded-base border-2 border-black bg-white px-4 py-1.5 font-bold shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
          onClick={closeModal}
        >
          Ok
        </button>
      </div>
    </div>,
    document.getElementById('modal') as HTMLElement,
  )
}
