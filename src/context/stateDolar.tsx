'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import useLocalStorage from '@/hooks/useLocalStorage'

const AppContext = createContext({
  state: false,
  setDolarBCV: () => {},
  setDolarProm: () => {},
  easterEgg: false,
  handlerEasterEgg: () => {},
  isPortrait: true,
})

export function StateDolar({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(false)
  const [easterEgg, setEasterEgg] = useLocalStorage('easterEgg', false)

  const setDolarBCV = () => {
    setState(true)
  }

  const setDolarProm = () => {
    setState(false)
  }

  let numClick = 0

  const handlerEasterEgg = () => {
    numClick++
    if (numClick === 2) {
      setEasterEgg(!easterEgg)
      numClick = 0
    }
  }

  const [isPortrait, setIsPortrait] = useState(true)

  useEffect(() => {
    function handleOrientationChange() {
      setIsPortrait(window.innerHeight > window.innerWidth)
    }

    handleOrientationChange()

    window.addEventListener('resize', handleOrientationChange)
    return () => {
      window.removeEventListener('resize', handleOrientationChange)
    }
  }, [isPortrait])

  return (
    <AppContext.Provider
      value={{
        state,
        setDolarBCV,
        setDolarProm,
        easterEgg,
        handlerEasterEgg,
        isPortrait,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
