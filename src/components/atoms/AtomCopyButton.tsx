import { Icon } from '@iconify/react'

interface Props {
  handlerClick: () => void
  showCopy: boolean
}

export const AtomCopyButton = ({ handlerClick, showCopy }: Props) => {
  return (
    <button
      className="absolute right-0 top-0 flex h-[40px] w-[40px] select-none items-center justify-center rounded-r-[8px] bg-primary"
      onClick={() => handlerClick()}
    >
      <p
        className={`absolute right-[-10px] top-[-30px] rounded-[8px] bg-white-color px-[4px] text-sm font-semibold text-black-color ${
          showCopy ? 'visible' : 'hidden'
        }`}
      >
        Copiado
      </p>
      {/* // <AiOutlineCopy className="h-[28px] w-[28px] text-black-color" /> */}
      <Icon
        className="text-black-color"
        height="28"
        icon="ic:baseline-content-copy"
        width="28"
      />
    </button>
  )
}

// import { AiOutlineCopy } from "react-icons/ai";

// export default function CopyButton({
//   handlerClick,
//   showCopy
// }: {
//   handlerClick: () => void;
//   showCopy: boolean;
// }) {

//   return (
//     <button
//       className="absolute top-0 right-0 mt-[4px] flex h-[40px] w-[40px] select-none items-center justify-center rounded-r-[8px] bg-primary"
//       onClick={() => handlerClick()}
//     >
//       <p
//         className={`absolute right-[-10px] top-[-30px] rounded-[8px] bg-white-color px-[4px] text-[1.6rem] font-semibold text-black-color ${
//           showCopy ? "visible" : "hidden"
//         }`}
//       >
//         Copiado
//       </p>
//     </button>
//   );
// }
