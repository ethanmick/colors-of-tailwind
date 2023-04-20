'use client'

import { CheckCircle } from '@phosphor-icons/react'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

type Props = {
  includeHexChar: boolean
  color: string
  step: string
}

export const ColorButton = ({ includeHexChar, color, step }: Props) => {
  const [copied, setCopied] = useState(false)

  const onClick = () => {
    setCopied(true)
    navigator.clipboard.writeText(includeHexChar ? color : color.slice(1))
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
        'absolute inset-0 font-bold flex justify-center items-center group opacity-0 transition-opacity duration-300 hover:opacity-80',
        {
          'text-white': parseInt(step, 10) > 400,
        }
      )}
    >
      {copied ? <CheckCircle size={32} /> : <span className="">{step}</span>}
    </button>
  )
}
