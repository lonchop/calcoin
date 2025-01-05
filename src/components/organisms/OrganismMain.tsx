'use client'

import { useEffect, useState } from 'react'
import { AtomInput } from '@/components/atoms/AtomInput'
import { AtomClearButton } from '@/components/atoms/AtomClearButton'
import { AtomCopyButton } from '@/components/atoms/AtomCopyButton'
import { useDolarStore } from '@/store/dollarStore'
import { calculateDolarToBs, calculateBsToDolar } from '@/hooks/useCalculator'
import { copyToClipboard } from '@/hooks/useCopyClipboard'

// * Utils
const formatValue = (value: string) => {
  let val = value.replace(/[^\d.,]/g, '') // Solo dígitos, puntos y comas
  val = val.replace('.', ',') // Reemplaza puntos por comas

  // Asegúrate de que solo haya una coma decimal
  const parts = val.split(',')
  if (parts.length > 2) {
    val = parts[0] + ',' + parts.slice(1).join('')
  }

  // Elimina ceros iniciales si hay más de un dígito antes de la coma
  if (val.length > 1 && val[0] === '0' && val[1] !== ',') {
    val = val.substring(1)
  }

  return val
}

export const Main = () => {
  const dollar = useDolarStore((state) => state.dollar)

  const [valueDolar, setValueDolar] = useState('1')
  const [valueBs, setValueBs] = useState('')

  const [showCopyDolar, setShowCopyDolar] = useState(false)
  const [showCopyBs, setShowCopyBs] = useState(false)

  // * Data

  useEffect(() => {
    setValueBs(calculateDolarToBs(valueDolar, dollar.value).replace('.', ','))
  }, [dollar])

  // * Methods
  const handleValueDolar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatValue(e.target.value)

    // Actualiza el estado
    setValueBs(
      calculateDolarToBs(formattedValue, dollar.value).replace('.', ','),
    )
    setValueDolar(formattedValue)
    console.log('valueDolar', formattedValue)
  }

  const handleValueBs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatValue(e.target.value)

    // Actualiza el estado
    setValueDolar(
      calculateBsToDolar(formattedValue, dollar.value).replace('.', ','),
    )
    setValueBs(formattedValue)
  }

  const copyDolar = () => {
    if (valueDolar) {
      copyToClipboard(valueDolar, setShowCopyDolar)
    }
  }

  const copyBs = () => {
    if (valueBs) {
      copyToClipboard(valueBs, setShowCopyBs)
    }
  }

  const clearInputs = () => {
    setValueBs('')
    setValueDolar('')
  }

  return (
    <main className="flex w-full flex-col items-center gap-y-2 p-8 md:p-12">
      <h1 className="text-4xl font-bold text-white-color md:text-6xl">
        Bs. {dollar.value}
      </h1>
      <h2 className="select-none text-xl font-semibold text-primary md:text-2xl">
        Dolar {dollar.exchangeRate}
      </h2>

      <div className="flex w-full flex-col items-center gap-y-3 text-base font-semibold text-white-color md:text-lg">
        <AtomInput
          currency="Dolar"
          handleChange={handleValueDolar}
          value={valueDolar}
        >
          <AtomCopyButton handlerClick={copyDolar} showCopy={showCopyDolar} />
        </AtomInput>

        <AtomInput currency="Bs" handleChange={handleValueBs} value={valueBs}>
          <AtomCopyButton handlerClick={copyBs} showCopy={showCopyBs} />
        </AtomInput>
      </div>
      <AtomClearButton handleClick={clearInputs} nameButton="Limpiar" />
    </main>
  )
}
