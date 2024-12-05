// export const Main = () => {
//   return (
//     <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//       <h1>Calcoin</h1>
//     </main>
//   )
// }

import { Input } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'

export const Main = () => {
  return (
    <main className="flex w-full flex-col items-center p-8 md:p-12">
      <h1 className="text-4xl font-bold text-white-color md:text-6xl">Bs.</h1>

      <h2 className="select-none text-xl font-semibold text-primary md:text-2xl">
        Dolar
      </h2>

      <div className="flex w-full flex-col items-center text-base font-semibold text-white-color md:text-lg">
        <label className="select-none" htmlFor="">
          Dolar:
        </label>
        <Input></Input>

        <label className="select-none" htmlFor="">
          Bs:
        </label>
        <Input></Input>
      </div>
      <Button nameButton="Limpiar" />
    </main>
  )
}
