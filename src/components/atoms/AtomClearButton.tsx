interface Props {
  nameButton: string
  handleClick: () => void
}

export const AtomClearButton = ({ nameButton, handleClick }: Props) => {
  return (
    <button 
    className="text-primary py-2 px-3 cursor-pointer select-none rounded bg-black lg:px-8 lg:py-2 font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
    onClick={() => handleClick()}
    >
      {nameButton}
    </button>
  )
}
