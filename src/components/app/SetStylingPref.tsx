'use client'

import { useLayoutEffect } from 'react'

export default function SetStylingPref() {
  useLayoutEffect(() => {
    const colorObj = JSON.parse(localStorage.getItem('color') as string)
    const borderRadius = localStorage.getItem('borderRadius')
    const boxShadow = localStorage.getItem('boxShadow')?.split(',')

    const r = window.document.querySelector(':root') as HTMLElement

    if (colorObj) {
      r.style.setProperty('--bg', colorObj.bg)
      r.style.setProperty('--main', colorObj.main)
      r.style.setProperty('--main-accent', colorObj.mainAccent)
    }

    if (borderRadius) {
      r.style.setProperty('--border-radius', borderRadius + 'px')
    }

    if (boxShadow) {
      r.style.setProperty('--horizontal-box-shadow', boxShadow[0] + 'px')
      r.style.setProperty('--vertical-box-shadow', boxShadow[1] + 'px')
    }
  }, [])

  return <></>
}
