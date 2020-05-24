import React from 'react'

export default ({ children }: { children: React.ReactNode }) => (
  <h2
    className={`
      leading-tight
      text-2xl
      md:text-3xl
      lg:text-4xl
      tracking-tighter
      text-cool-gray-800
      font-bold
      font-heading
      mb-6
      md:mb-8
    `}
  >
    {children}
  </h2>
)
