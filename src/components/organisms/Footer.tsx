// export const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }

// import { useAppContext } from '../context/stateDolar'
import { AiOutlineLinkedin } from 'react-icons/ai'

export const Footer = () => {
  // const { isPortrait } = useAppContext()

  return (
    <footer
      className="flex w-full flex-grow select-none flex-col items-center justify-end p-8 md:p-12"
    >
      <a
        href="https://www.linkedin.com/in/orangel-gonzalez/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <AiOutlineLinkedin className="h-[40px] w-[40px] text-white-color md:h-[48px] md:w-[48px]" />
      </a>
      <p className="text-white-color">Hecho por Orangel © 2024</p>
    </footer>
  )
}
