interface Props {
  currency: string
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  value: string
  children?: React.ReactNode
}

export const AtomInput = ({
  currency,
  handleChange,
  value,
  children,
}: Props) => {
  return (
    <div>
      <label className="select-none" htmlFor="">
        {currency}:
      </label>
      <div className="relative mb-[8px] w-[240px] md:w-[280px] lg:w-[320px]">
        <input
          autoComplete="nope"
          className="h-[40px] w-[240px] rounded-[8px] pl-[16px] text-black-color outline-none md:w-[280px] lg:w-[320px]"
          type="text"
          value={value}
          onChange={handleChange}
        />
        {children && <div>{children}</div>}
      </div>
    </div>
  )
}
