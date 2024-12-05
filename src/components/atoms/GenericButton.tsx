export default function GenericButton({
  nameGenericButton,
  handlerClick,
}: {
  nameGenericButton: string
  handlerClick: () => void
}) {
  return (
    <button
      className="bg-black-color text-primary flex h-[32px] w-[100px] cursor-pointer select-none items-center justify-center rounded-[4px] text-[2rem] font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] lg:h-[40px] lg:w-[120px]"
      onClick={() => handlerClick()}
    >
      {nameGenericButton}
    </button>
  )
}
