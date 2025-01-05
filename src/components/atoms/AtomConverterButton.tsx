interface Props {
  nameButton: string
  dollarValue: string
  handleClick: (exchangeRate: string, value: string) => void
}

export const AtomConverterButton = ({ nameButton, dollarValue, handleClick }: Props) => {
  return (
    <button
      className="cursor-pointer select-none rounded bg-black px-3 py-2 font-bold text-primary drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] lg:px-8 lg:py-2"
      onClick={() => handleClick(nameButton, dollarValue)}
    >
      {nameButton}
    </button>
  )
}
