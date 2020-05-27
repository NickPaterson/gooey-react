import React from 'react'
import Goo from 'gooey-react'

export default () => (
  <Goo intensity="strong">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-80 h-80 mx-auto">
      <defs>
        <linearGradient id="gradient">
          <stop offset="0%" style={{ stopColor: 'darkviolet' }} />
          <stop offset="100%" style={{ stopColor: 'darkturquoise' }} />
        </linearGradient>
      </defs>
      <g
        className="origin-center"
        style={{ animation: 'rotate 8s linear infinite' }}
      >
        <rect
          x={`${50 - 17.5 / 2}%`}
          y={`${50 - 17.5 / 2}%`}
          rx={`${17.5 * 0.45}%`}
          width={`${17.5}%`}
          height={`${17.5}%`}
          className="origin-center"
          fill="url(#gradient)"
          style={{
            animation: 'hero_one 4s ease-in-out -5s infinite alternate',
          }}
        />
        <rect
          x={`${50 - 20 / 2}%`}
          y={`${50 - 20 / 2}%`}
          rx={`${20 * 0.45}%`}
          width={`${20}%`}
          height={`${20}%`}
          className="origin-center"
          fill="url(#gradient)"
          style={{
            animation: 'hero_three 12s ease-in-out -5s infinite alternate',
          }}
        />
        <rect
          x={`${50 - 25 / 2}%`}
          y={`${50 - 25 / 2}%`}
          rx={`${25 * 0.45}%`}
          width={`${25}%`}
          height={`${25}%`}
          className="origin-center"
          fill="url(#gradient)"
          style={{
            animation: 'hero_two 8s ease-in-out -5s infinite alternate',
          }}
        />
        <rect
          x={`${50 - 30 / 2}%`}
          y={`${50 - 30 / 2}%`}
          rx={`${30 * 0.45}%`}
          width={`${30}%`}
          height={`${30}%`}
          className="origin-center"
          fill="url(#gradient)"
          style={{
            animation: 'hero_four 16s ease-in-out -5s infinite alternate',
          }}
        />
      </g>
    </svg>
  </Goo>
)
