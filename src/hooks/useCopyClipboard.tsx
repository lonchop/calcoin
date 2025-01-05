// const formatNumber = (number: string) => {
//   return Number(number).toLocaleString('es-ES', {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//     minimumIntegerDigits: 1,
//   })
// }

export const copyToClipboard = (
  text: string,
  setShowCopy: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      setShowCopy(true)
      setTimeout(() => setShowCopy(false), 1000)
    })
    .catch((err) => {
      console.error('Error al copiar el texto: ', err)
    })
}
