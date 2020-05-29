import React from 'react'
import Wrap from './Wrap'

export default () => (
  <div className="bg-cool-gray-100 text-sm mt-8 md:mt-12 lg:mt-16 text-center">
    <Wrap noMargin>
      <div className="flex flex-col sm:flex-row justify-between py-12 lg:py-16">
        <p className="mb-8 sm:mb-0">
          gooey-react is a project by{' '}
          <a
            className="underline font-medium"
            href="https://www.luuk.site"
            target="_blank"
            rel="noopener"
          >
            Luuk
          </a>
          .
        </p>
        <div className="flex justify-center">
          <a
            className="underline font-semibold px-4"
            href="https://www.npmjs.com/package/gooey-react"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            NPM
          </a>
          <a
            className="underline font-semibold px-4"
            href="https://github.com/luukdv/gooey-react"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="underline font-semibold px-4"
            href="https://www.luuk.site"
            target="_blank"
            rel="noopener"
          >
            Contact
          </a>
        </div>
      </div>
    </Wrap>
  </div>
)
