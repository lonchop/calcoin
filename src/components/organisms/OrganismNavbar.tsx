'use client'

import Image from 'next/image'
import { AtomConverterButton } from '../atoms/AtomConverterButton'
import { useDolarStore } from '@/store/dollarStore'
import calcoinLogo from '../../../public/calcoin-logo.svg'

export const Navbar = () => {
  // * Store
  const setDollar = useDolarStore((state) => state.setDollar)

  const handleClick = (exchangeRate: string, value: string) => {
    setDollar(exchangeRate, value)
  }

  const dollarValue = {
    BCV: '40,00',
    Promedio: '50,00',
    Paralelo: '60,00',
  }

  return (
    <nav className="flex w-full items-center justify-center bg-[#FFFFEC] py-8 lg:px-12">
      <div className="hidden items-center lg:flex">
        <Image
          alt="Calcoin Logo"
          className="absolute"
          height={64}
          src={calcoinLogo}
          width={64}
        />
      </div>
      <div className="flex flex-1 justify-center gap-4 lg:gap-8">
        <AtomConverterButton
          dollarValue={dollarValue.BCV}
          handleClick={handleClick}
          nameButton="BCV"
        />
        <AtomConverterButton
          dollarValue={dollarValue.Promedio}
          handleClick={handleClick}
          nameButton="Promedio"
        />
        <AtomConverterButton
          dollarValue={dollarValue.Paralelo}
          handleClick={handleClick}
          nameButton="Paralelo"
        />
      </div>
    </nav>
  )
}
