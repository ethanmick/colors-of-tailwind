'use client'

import clsx from 'clsx'
import { Inter } from 'next/font/google'
import React, { useState } from 'react'
import * as colors from 'tailwindcss/colors'
import { ColorButton } from './button'
import { Switch } from './switch'

const inter = Inter({ subsets: ['latin'] })

const PALETTES: Array<keyof typeof colors> = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
]

const STEPS: Array<keyof typeof colors['slate']> = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
]

export default function Home() {
  const [includeHexChar, setIncludeHexChar] = useState(true)
  return (
    <main className={inter.className}>
      <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-11 xl:grid-cols-22">
        {PALETTES.map((p) => (
          <React.Fragment key={p}>
            <div className="flex-grow">
              <h2 className="capitalize font-light text-sm md:text-base flex justify-center items-center h-12">
                {p}
              </h2>
              <ul className="flex flex-col h-screen">
                {STEPS.map((s) => (
                  <li
                    key={s}
                    className={clsx(
                      'flex-grow flex justify-center items-center relative z-0 transition hover:shadow-lg hover:z-10'
                    )}
                    style={{
                      backgroundColor: colors[p][s],
                    }}
                  >
                    <ColorButton
                      includeHexChar={includeHexChar}
                      palette={p}
                      step={s}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="h-full xl:h-12 flex flex-col lg:flex-row py-4 items-center px-4 justify-between bg-black gap-4">
        <form className="flex items-center">
          <label
            className="text-[15px] leading-none pr-[15px] text-white font-semibold"
            htmlFor="hex-char"
          >
            Include{' '}
            <code className="inline font-mono bg-slate-300 rounded-md p-1 px-2 text-black">
              #
            </code>{' '}
            character:
          </label>
          <Switch
            id="hex-char"
            checked={includeHexChar}
            onCheckedChange={(e) => setIncludeHexChar(e)}
          />
        </form>
        <div className="text-lg text-white">Click to Copy Tailwind Color</div>
        <div>
          <a
            className="text-indigo-500 visited:text-indigo-700 hover:underline"
            href="https://ethanmick.com"
          >
            Made by Ethan Mick
          </a>
        </div>
      </div>
    </main>
  )
}
