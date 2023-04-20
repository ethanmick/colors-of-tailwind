'use client'

import { CheckCircle } from '@phosphor-icons/react'
import va from '@vercel/analytics'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import * as colors from 'tailwindcss/colors'

type Props = {
  includeHexChar: boolean
  palette: keyof typeof colors
  step: keyof typeof colors['slate']
}

export const ColorButton = ({ includeHexChar, palette, step }: Props) => {
  const [copied, setCopied] = useState(false)

  const onClick = () => {
    const color = colors[palette][step]
    setCopied(true)
    navigator.clipboard.writeText(includeHexChar ? color : color.slice(1))
    va.track('Color Copied', { palette, step })
  }

  useEffect(() => {
    if (!copied) return
    const id = setTimeout(() => {
      setCopied(false)
    }, 5000)
    return () => clearTimeout(id)
  }, [copied])

  return (
    <button
      onClick={onClick}
      className={clsx(
        'absolute inset-0 font-bold flex justify-center items-center group opacity-0 transition-opacity duration-300 hover:opacity-80 w-full',
        {
          'text-white': parseInt(step, 10) > 400,
        }
      )}
    >
      {copied ? <CheckCircle size={32} /> : <span className="">{step}</span>}
    </button>
  )
}
