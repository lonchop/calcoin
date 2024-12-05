// export default function Input({
//   handlerChange,
//   value,
//   children,
// }: {
//   handlerChange: React.ChangeEventHandler<HTMLInputElement>
//   value: string
//   children?: React.ReactNode
// }) {
//   return (
//     <div className="relative mb-[8px] w-[240px] md:w-[280px] lg:w-[320px]">
//       <input
//         className="mt-[4px] h-[40px] w-[240px] rounded-[8px] pl-[16px] text-black-color outline-none md:w-[280px] lg:w-[320px]"
//         type="number"
//         inputMode="numeric"
//         autoComplete="nope"
//         onChange={handlerChange}
//         value={value}
//       />
//       {children && <div>{children}</div>}
//     </div>
//   )
// }

export const Input = () => {
  return (
    <div className="relative mb-[8px] w-[240px] md:w-[280px] lg:w-[320px]">
      <input
        className="h-[40px] w-[240px] rounded-[8px] pl-[16px] text-black-color outline-none md:w-[280px] lg:w-[320px]"
        type="number"
      />
      {/* {children && <div>{children}</div>} */}
    </div>
  )
}
