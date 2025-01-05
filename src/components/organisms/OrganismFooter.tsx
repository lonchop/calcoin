import Link from 'next/link'
import { Icon } from '@iconify/react'

export const Footer = () => {
  // const { isPortrait } = useAppContext()

  return (
    <footer className="flex w-full flex-grow select-none flex-col items-center justify-end gap-y-1 p-8 md:p-12">
      <Link
        href="https://www.linkedin.com/in/orangel-gonzalez/"
        rel="noopener noreferrer"
        target="_blank"
      >
        {/* <AiOutlineLinkedin className="h-[40px] w-[40px] text-white-color md:h-[48px] md:w-[48px]" /> */}

        <Icon 
        height="48"
        icon="mdi:linkedin" 
        width="48" 
        />
      </Link>

      <p className="text-white-color">Hecho por Orangel © 2024</p>
    </footer>
  )
}
