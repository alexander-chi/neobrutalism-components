'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const signUpForNewsletter = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={signUpForNewsletter}
      className="flex w-min items-center rounded-base border-2 border-black font-bold shadow-base"
      role="form"
    >
      <input
        className="w-[30ch] rounded-base p-[10px] outline-none"
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <button
        className="rounded-e-[5px] border-l-2 border-black bg-main p-[10px] px-5"
        type="submit"
        aria-label="Submit Newsletter"
      >
        Submit
      </button>
    </form>
  )
}
