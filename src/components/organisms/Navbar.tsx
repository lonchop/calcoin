// 'use client'

import { Button } from '../atoms/Button'
import Image from 'next/image'
import calcoinLogo from '../../../public/calcoin-logo.svg'

export const Navbar = () => {
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
        <Button nameButton="BCV" />
        <Button nameButton="Promedio" />
        <Button nameButton="Paralelo" />
      </div>
    </nav>
  )
}
